FROM node:latest

WORKDIR /usr/src/app

LABEL maintainer="Bartosz Pranagal"
LABEL description="Zadanie 1"

COPY package.json ./

RUN npm install

COPY index.js .

EXPOSE 8080
CMD [ "node", "index.js" ]