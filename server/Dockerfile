FROM node:17-alpine

# Set the working directory
WORKDIR /app

COPY package*.json ./

RUN npm install --save-dev nodemon

COPY . .

RUN chown -R node:node /app
USER node
RUN cp .env.dev .env

EXPOSE 5000

CMD ["npx", "nodemon", "server.js"]
