FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

# Copy the top-level files
COPY requirements.txt requirements.txt
COPY manage.py manage.py

# Copy the Django project and all Django apps
COPY events_project events_project
COPY events_rest events_rest
COPY common common

RUN pip install -r requirements.txt
RUN python manage.py collectstatic --no-input
CMD python manage.py migrate && gunicorn events_project.wsgi --bind 0.0.0.0:$PORT --log-file -
