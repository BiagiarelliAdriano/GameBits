release: python manage.py makemigrations && python manage.py migrate
web: gunicorn gamebits.backend.gamebits.wsgi:application