FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json tsconfig*.json ./
RUN npm i -g npm && npm ci

COPY ./db  ./db
COPY ./src ./src
RUN npm run build && npm run prune --production

FROM node:18-alpine AS runner

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR usr/src/app

COPY --from=builder /usr/src/app ./package.json
COPY --from=builder /usr/src/app ./node_modules
COPY --from=builder /usr/src/app ./db
COPY --from=builder /usr/src/app ./build

EXPOSE 4000
CMD [ "npm start" ]