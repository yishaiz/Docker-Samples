FROM node:alpine

WORKDIR .

COPY ./app/package.json ./


RUN npm install

COPY ./app .

CMD ["npm", "start"]