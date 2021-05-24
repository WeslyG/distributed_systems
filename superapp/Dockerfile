FROM node:14-alpine

RUN mkdir -p /opt
WORKDIR /opt
COPY package.json .
RUN yarn install

COPY . /opt

CMD [ "yarn", "start" ]