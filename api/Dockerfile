# Multi-Stage
# Stage 1: build
FROM node:16-alpine as build

WORKDIR /app

COPY . .
COPY .env .

RUN npm i && npm run build

# Stage 2: prod
FROM node:16-alpine as prod

WORKDIR /app

RUN chown -R node:node /app

USER node

COPY --chown=node:node --from=build /app/.env /app

COPY --chown=node:node --from=build /app/dist /app/dist

COPY --chown=node:node --from=build /app/src/template /app/dist/template

COPY --chown=node:node --from=build /app/package*.json /app/

RUN npm install --only=prod

CMD [ "npm", "start" ]