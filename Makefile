.PHONY: up down restart

up:
	docker compose up --build -d
	docker rm releaf-react-builder-1


down:
	docker compose down -v

restart:
	make down
	make up