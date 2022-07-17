FROM node:lts-alpine3.15
EXPOSE 3000
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY src ./src
CMD [ "node", "src/index.js" ]
