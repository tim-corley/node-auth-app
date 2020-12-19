FROM node:15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --silent

COPY . .

EXPOSE 3003

CMD [ "npm", "start" ]