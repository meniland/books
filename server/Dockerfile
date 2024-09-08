FROM node:17-alpine

# Set the working directory
WORKDIR /app

COPY package*.json ./

RUN npm install --save-dev nodemon

COPY . .

EXPOSE 5000

CMD ["npx", "nodemon", "server.js"]
