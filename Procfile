release: python gamebits/backend/manage.py migrate --noinput
web: gunicorn backend.gamebits.wsgi:application --chdir gamebits