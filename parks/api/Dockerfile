FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files
COPY requirements.txt requirements.txt
COPY manage.py manage.py

# Copy the Django project and all Django apps
COPY parks_project parks_project
COPY parks_rest parks_rest

RUN pip install -r requirements.txt
RUN python manage.py collectstatic --no-input
CMD python manage.py migrate && gunicorn parks_project.wsgi --bind 0.0.0.0:$PORT --log-file -
