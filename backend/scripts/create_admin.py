#!/usr/bin/env python
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

import django
django.setup()

from django.contrib.auth import get_user_model


def create_superuser(username, email, password):
    User = get_user_model()
    if User.objects.filter(username=username).exists():
        print(f"User '{username}' already exists")
        return
    User.objects.create_superuser(username=username, email=email or '', password=password)
    print(f"Superuser '{username}' created")


if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Usage: create_admin.py <username> <email> <password>")
        sys.exit(1)
    create_superuser(sys.argv[1], sys.argv[2], sys.argv[3])
