FROM node:8

WORKDIR /usr/src/node-proxy-service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4001

CMD ["npm", "start"]