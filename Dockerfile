FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

RUN npm i -g nodemon

COPY . .

CMD ["npm", "start"]