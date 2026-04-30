.PHONY: help build up down test lint migrate saga-test load-test metrics

help:
	@echo "Microservices Reference Platform - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build      : Build all service containers"
	@echo "up         : Start all services in the background"
	@echo "down       : Stop and remove all containers"
	@echo "test       : Run unit and integration tests across services"
	@echo "lint       : Run linting checks for all services"
	@echo "migrate    : Run database migrations for all services"
	@echo "saga-test  : Trigger an end-to-end Saga workflow (Order flow)"
	@echo "load-test  : Run performance and load tests using Locust/K6"
	@echo "metrics    : Open Prometheus and Grafana dashboards"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/services tests/api

lint:
	flake8 apps/user-service apps/order-service apps/payment-service apps/inventory-service

migrate:
	docker-compose exec user-service alembic upgrade head
	docker-compose exec order-service alembic upgrade head
	docker-compose exec payment-service alembic upgrade head
	docker-compose exec inventory-service alembic upgrade head

saga-test:
	docker-compose exec gateway python scripts/test/trigger_order_saga.py

load-test:
	docker-compose exec gateway python scripts/load/run_locust.py

metrics:
	@echo "Grafana: http://localhost:3000"
	@echo "Prometheus: http://localhost:9090"
