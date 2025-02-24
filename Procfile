release: python backend/manage.py makemigrations && python backend/manage.py migrate
web: gunicorn gamebits.backend.gamebits.wsgi:application