build:
	docker build -t baleinegris-portfolio:latest .
run:
	docker run -d -p 127.0.0.1:8080:80 --name portfolio baleinegris-portfolio