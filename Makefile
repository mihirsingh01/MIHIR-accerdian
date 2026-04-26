# Makefile for Accredian Enterprise Next.js Project

.PHONY: install dev build start lint deploy

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

deploy:
	git add .
	git commit -m "Update for Vercel deployment"
	git push origin master
