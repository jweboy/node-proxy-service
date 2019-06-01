build:
	@echo "===================== build ==================="
	docker build -t jweboy/node-proxy-service .
run:
	@echo "===================== build ==================="
	docker run --rm -p 4001:4001 -d --name node-proxy-service jweboy/node-proxy-service