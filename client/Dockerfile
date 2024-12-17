# Use the official Node.js image for building the React app
FROM node:16 AS build_stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code to the container
COPY . .

# Define build argument for environment (default is production)
ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

# Conditionally run the React build for production
RUN if [ "$NODE_ENV" = "prod" ]; then npm run build; fi

# Development stage
FROM node:16 AS dev_stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code to the container
COPY . .

EXPOSE 80

# Start React development server on port 80 without using an .env file
CMD ["sh", "-c", "PORT=80 npm start"]

# Production stage
FROM nginx:alpine AS prod_stage

COPY --from=build_stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
