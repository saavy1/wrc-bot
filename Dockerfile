FROM node:latest

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . /src/

EXPOSE 8080

CMD ["npm", "start"]