SHELL := /bin/bash

create_environment:
	python3 -m venv env

delete_environment:
	rm -rf env

install:
	pip install --upgrade pip
	pip install -r requirements.txt

run:
	python manage.py runserver

migration:
	python manage.py makemigrations

migrate:
	python manage.py migrate