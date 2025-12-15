#!/usr/bin/env python
import sys
import os

# Ensure DJANGO settings are loaded
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

import django
django.setup()

from django.contrib.auth import get_user_model


def set_password(username, password):
    User = get_user_model()
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        print(f"User '{username}' does not exist")
        sys.exit(2)

    user.set_password(password)
    user.save()
    print("Пароль змінено")


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: set_admin_password.py <username> <new_password>")
        sys.exit(1)
    set_password(sys.argv[1], sys.argv[2])
