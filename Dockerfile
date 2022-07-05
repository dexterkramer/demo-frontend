FROM node:16.15.0-alpine

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=4200
ENV PORT $PORT
EXPOSE $PORT 49153

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
# RUN npm i npm@latest -g

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/node_app && chown node:node /opt/node_app
RUN mkdir /opt/node_app/app && chown node:node /opt/node_app/app
WORKDIR /opt/node_app/app
# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node
COPY --chown=node:node package.json ./
# ENV PATH /opt/node_app/node_modules/.bin:$PATH
# ENV NODE_PATH /opt/node_app/node_modules
RUN npm install --no-optional && npm cache clean --force

# check every 30s to ensure this service returns HTTP 200
# HEALTHCHECK --interval=30s CMD node healthcheck.js

# copy in our source code last, as it changes the most
# copy in as node user, so permissions match what we need
# WORKDIR /opt/node_app/app
# COPY --chown=node:node ../package-lock.json package-lock.json
# RUN mv ../package-lock.json ./package-lock.json
# RUN chown node:node ./