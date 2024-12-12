FROM node:17-alpine

# Set the working directory
WORKDIR /app

COPY package*.json ./

RUN npm install --save-dev nodemon

COPY . .

# Copy the environment file based on the build context (development or production)
ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

# Use the environment-specific .env file
COPY .env.${NODE_ENV} .env

RUN chown -R node:node /app
USER node

EXPOSE 5000

CMD ["npx", "nodemon", "server.js"]
