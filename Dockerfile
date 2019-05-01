FROM node:11-alpine

RUN mkdir /src
WORKDIR /src

COPY . .
RUN npm i --silent

CMD ["npm", "start"]
