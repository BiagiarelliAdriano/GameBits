release: python manage.py migrate --noinput
web: gunicorn --workers 3 --timeout 60 gamebits.wsgi:application