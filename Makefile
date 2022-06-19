up:
	docker-compose down && docker-compose up

bash:
	docker exec -it chat-back bash

lint:
	docker exec -it chat-back yarn lint