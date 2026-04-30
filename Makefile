.PHONY: help build up down test lint migrate discover-apps run-assessment generate-roadmap generate-report

help:
	@echo "Legacy Modernization Assessment - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "discover-apps   : Trigger application portfolio discovery"
	@echo "run-assessment  : Execute cloud readiness and debt assessment"
	@echo "generate-roadmap: Orchestrate modernization roadmap generation"
	@echo "generate-report : Create executive modernization report"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

discover-apps:
	docker-compose exec api python scripts/discover/map_portfolio.py

run-assessment:
	docker-compose exec api python scripts/assess/evaluate_readiness.py

generate-roadmap:
	docker-compose exec api python scripts/recommend/build_roadmap.py

generate-report:
	docker-compose exec api python scripts/report/create_executive_summary.py
