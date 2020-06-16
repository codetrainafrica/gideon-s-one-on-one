FROM node:12.6

WORKDIR /app

COPY ./package.json ./

RUN yarn cache clean && yarn --update-checksums

COPY . ./


EXPOSE 3000

CMD ["yarn", "start"]