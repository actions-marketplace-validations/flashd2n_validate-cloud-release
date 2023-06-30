FROM --platform=linux/amd64 node:18-alpine

WORKDIR /home/node/app

COPY ./package*.json /home/node/app

RUN npm install

COPY . /home/node/app

CMD [ "node", "/home/node/app/src/index.js" ]
