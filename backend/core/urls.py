from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.views.static import serve

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from content.views import PageContentView, PageContentListView, PageListView, PageDetailView, ContactAPIView

# Update site_url for production
if settings.DEBUG:
    admin.site.site_url = '/' # Use relative path to stay on same port (8000)
else:
    admin.site.site_url = '/'


urlpatterns = [
    path('admin/', admin.site.urls),
    path('ckeditor5/', include('django_ckeditor_5.urls')),
    
    # JWT Authentication
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # Old PageContent API (legacy)
    path('api/content/', PageContentListView.as_view(), name='page_content_list'),
    path('api/content/<slug:slug>/', PageContentView.as_view(), name='page_content'),
    
    # New Dynamic Pages API
    path('api/pages/', PageListView.as_view(), name='page_list'),
    path('api/pages/<slug:slug>/', PageDetailView.as_view(), name='page_detail'),
    path('api/contact/', ContactAPIView.as_view(), name='contact'),

    # Catalog API
    path('api/catalog/', include('catalog.urls')),
    
    # Serve React static assets from build root
    re_path(r'^(?P<path>manifest\.json)$', serve, {'document_root': settings.BASE_DIR.parent / 'build'}),
    re_path(r'^(?P<path>favicon\.ico)$', serve, {'document_root': settings.BASE_DIR.parent / 'build'}),
    re_path(r'^(?P<path>robots\.txt)$', serve, {'document_root': settings.BASE_DIR.parent / 'build'}),
    re_path(r'^(?P<path>logo192\.png)$', serve, {'document_root': settings.BASE_DIR.parent / 'build'}),
    re_path(r'^(?P<path>logo512\.png)$', serve, {'document_root': settings.BASE_DIR.parent / 'build'}),
    re_path(r'^(?P<path>asset-manifest\.json)$', serve, {'document_root': settings.BASE_DIR.parent / 'build'}),
    
]

# Serve media files in development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    # Serve React frontend for all other routes (catch-all for SPA)
    # Exclude admin, api, static, and media to allow Django to handle/redirect them correctly
    re_path(r'^(?!admin|api|static|media).*$', TemplateView.as_view(template_name='index.html')),
]
