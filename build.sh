#!/usr/bin/env bash
# exit on error
set -o errexit

echo "==> Installing Python dependencies..."
pip install -r requirements.txt

echo "==> Installing Node.js dependencies..."
npm install

echo "==> Building React frontend..."
npm run build

echo "==> Collecting Django static files..."
cd backend
python manage.py collectstatic --no-input

echo "==> Running database migrations..."
python manage.py migrate

echo "==> Creating superuser if not exists..."
python manage.py shell << END
from django.contrib.auth import get_user_model
User = get_user_model()
username = '${DJANGO_SUPERUSER_USERNAME}'
email = '${DJANGO_SUPERUSER_EMAIL}'
password = '${DJANGO_SUPERUSER_PASSWORD}'

if username and email and password:
    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username, email, password)
        print(f'Superuser {username} created')
    else:
        print(f'Superuser {username} already exists')
else:
    print('Superuser credentials not provided, skipping...')
END

echo "==> Build completed successfully!"
