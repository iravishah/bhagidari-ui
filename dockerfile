# node.js base image
FROM node:14-alpine

# server info
RUN node -v
RUN npm -v

# install pm2 for production
# RUN npm install -g pm2

# working directory
RUN mkdir /app
RUN chown -R node:node /app
WORKDIR /app

# switch to user node
USER node

ADD --chown=node:node ./src ./src
# COPY --chown=node:node ./.npmrc ./.npmrc
COPY --chown=node:node ./*.json ./
COPY --chown=node:node ./public ./public

EXPOSE 3000

# install dependencies for build
RUN npm install --development
# RUN npm install @nestjs/cli
# RUN npm run build
# RUN rm -r ./src ./node_modules

# install prod dependencies
# RUN npm install --production

# start server
#CMD ["pm2-docker", "start", "dist/main.js"]
CMD [ "npm", "run", "start" ]