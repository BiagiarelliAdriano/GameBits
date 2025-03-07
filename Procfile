release: python gamebits/backend/manage.py migrate --noinput
web: gunicorn gamebits.backend.gamebits.wsgi:application --chdir gamebits