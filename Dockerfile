# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
FROM node:16.15.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 49153

RUN mkdir /opt/app && chown node:node /opt/app
WORKDIR /opt/app

USER node
COPY --chown=node:node package.json ./
RUN npm install --no-optional && npm cache clean --force
