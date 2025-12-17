"""
Django settings for core project.
"""

from pathlib import Path
import os
import dj_database_url
from decouple import config

# Build paths
BASE_DIR = Path(__file__).resolve().parent.parent
PROJECT_ROOT = BASE_DIR.parent

# Security settings
SECRET_KEY = config('SECRET_KEY', default='django-insecure-qsmvq)-3a7wq@amfuynn(dhw-w9vb93dxc!b-q#+x6gr82vw^=')
DEBUG = config('DEBUG', default=True, cast=bool)
ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='localhost,127.0.0.1').split(',')

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'django_ckeditor_5',
    'cloudinary_storage',
    'cloudinary',
    'adminsortable2',  # Drag-and-drop ordering
    'content',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',  # For static files on Render
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [PROJECT_ROOT / 'build'],  # React build folder
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# Database
if config('DATABASE_URL', default=None):
    # Production: PostgreSQL on Render
    DATABASES = {
        'default': dj_database_url.config(
            default=config('DATABASE_URL'),
            conn_max_age=600,
            conn_health_checks=True,
        )
    }
else:
    # Development: SQLite
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = []
_react_static_dir = PROJECT_ROOT / 'build/static'
if _react_static_dir.exists():
    STATICFILES_DIRS.append(_react_static_dir)
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# Media files - Cloudinary for production
if config('CLOUDINARY_CLOUD_NAME', default=None):
    # Production: Cloudinary
    import cloudinary
    
    CLOUDINARY_STORAGE = {
        'CLOUD_NAME': config('CLOUDINARY_CLOUD_NAME'),
        'API_KEY': config('CLOUDINARY_API_KEY'), 
        'API_SECRET': config('CLOUDINARY_API_SECRET'),
    }
    
    # Initialize cloudinary
    cloudinary.config(
        cloud_name=config('CLOUDINARY_CLOUD_NAME'),
        api_key=config('CLOUDINARY_API_KEY'),
        api_secret=config('CLOUDINARY_API_SECRET'),
        secure=True
    )
    
    DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'
    MEDIA_URL = '/media/'  # Cloudinary handles the actual URLs
else:
    # Development: Local storage
    MEDIA_URL = '/media/'
    MEDIA_ROOT = BASE_DIR / 'media'

# CORS settings
if DEBUG:
    CORS_ALLOWED_ORIGINS = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]
else:
    CORS_ALLOWED_ORIGINS = config('CORS_ALLOWED_ORIGINS', default='').split(',')

# CSRF settings for production
if not DEBUG:
    CSRF_TRUSTED_ORIGINS = [f"https://{host}" for host in ALLOWED_HOSTS if host != 'localhost']

# REST Framework
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# Site and contact settings
SITE_URL = config('SITE_URL', default='http://localhost:8000')
CONTACT_RECIPIENTS = [r.strip() for r in config('CONTACT_RECIPIENTS', default='').split(',') if r.strip()]

# Development defaults: when DEBUG=True provide a safe email backend and a
# recipient so the contact endpoint can be tested locally without extra env vars.
if DEBUG:
    if not CONTACT_RECIPIENTS:
        CONTACT_RECIPIENTS = ['test@example.com']

    # Use console backend by default in development to avoid needing SMTP.
    EMAIL_BACKEND = config('EMAIL_BACKEND', default='django.core.mail.backends.console.EmailBackend')
else:
    EMAIL_BACKEND = config('EMAIL_BACKEND', default='django.core.mail.backends.smtp.EmailBackend')

# Throttling for public endpoints (e.g., contact form)
REST_FRAMEWORK.update({
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '10/min',
    }
})

# CKEditor 5 Configuration (django-ckeditor-5)
CKEDITOR_5_CONFIGS = {
    "default": {
        "toolbar": [
            "heading", "|",
            "bold", "italic", "underline", "link", "|",
            "bulletedList", "numberedList", "blockQuote", "|",
            "undo", "redo",
        ],
    }
}

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
