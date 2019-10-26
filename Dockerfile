FROM node:10

COPY . /demo
WORKDIR /demo

RUN npm install

EXPOSE  8080

CMD ["node", "index.js"]
