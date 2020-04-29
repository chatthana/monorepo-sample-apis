FROM node:erbium-alpine
WORKDIR /usr/src/app

RUN npm install -gs lerna @babel/cli @babel/core

COPY ./packages/api/ ./packages/api
COPY ./packages/common/ ./packages/common

COPY ./lerna.json ./
COPY ./package.json ./

RUN yarn # install

RUN yarn release:common

EXPOSE 3000

CMD ["yarn", "start:api"]
