.PHONY: up down restart

up:
	docker compose up --build -d

down:
	docker compose down -v

restart:
	make down
	make up