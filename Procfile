release: python gamebits/backend/manage.py makemigrations && python gamebits/backend/manage.py migrate
web: gunicorn gamebits.backend.gamebits.wsgi:application