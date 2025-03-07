release: python gamebits/backend/manage.py migrate --noinput
web: gunicorn --workers 3 --timeout 60 gamebits.backend.gamebits.wsgi:application --chdir gamebits