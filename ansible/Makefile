.PHONY: deps test

reqs:
	pip3 install virtualenv

deps: reqs
	python3 -m venv .venv; \
	. .venv/bin/activate; \
	pip3 install -U pip
	pip3 install -U wheel
	pip3 install -r requirements.txt

lint:
	. .venv/bin/activate; \
	flake8 ./app/*

run:
	. .venv/bin/activate; \
	python3 ./app/run.py

test:
	. .venv/bin/activate; \
	pytest -vv

ansible-deps:
	. .venv/bin/activate; \
	ansible-galaxy install -r requirements.yml

ansible:
	. .venv/bin/activate; \
	ansible-playbook -i inventory.ini --diff playbook.yml --ask-vault-pass

update:
	. .venv/bin/activate; \
	ansible-playbook -i inventory.ini --diff --tags=update playbook.yml --ask-vault-pass

locust:
	. .venv/bin/activate; \
	ansible-playbook -i inventory.ini --diff locust.yml
