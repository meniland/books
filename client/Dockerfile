# Use the official Node.js image
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Set user and permissions
RUN chown -R node:node /app
USER node

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
