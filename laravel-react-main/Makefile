setup:
	@make build
	@make up 
	@make composer-update
	@npm-install
build:
	docker-compose build --no-cache --force-rm
stop:
	docker-compose stop
up:
	docker-compose up -d

composer-update:
	docker exec frontend-react sh -c "composer update"

composer-dump:
	docker exec frontend-react sh -c "composer dump autoload"	
npm-install:
	docker exec frontend-react sh -c "npm install"

front:
	docker exec frontend-react sh -c "npm run dev"

fresh-data:
	docker exec backend-laravel sh -c "php artisan migrate:fresh"

data:
	docker exec backend-laravel sh -c "php artisan migrate"
	docker exec backend-laravel sh -c "php artisan db:seed"

migrate:
	docker exec backend-laravel sh -c "php artisan migrate"