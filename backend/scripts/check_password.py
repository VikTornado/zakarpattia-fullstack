#!/usr/bin/env python
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

import django
django.setup()

from django.contrib.auth import get_user_model

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Usage: check_password.py <username> <password>")
        sys.exit(1)
    username = sys.argv[1]
    password = sys.argv[2]
    User = get_user_model()
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        print(f"User '{username}' does not exist")
        sys.exit(2)
    print(user.check_password(password))
