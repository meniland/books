# Use the official Node.js image for building the React app
FROM node:16 AS buildStage

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code to the container
COPY . .

# Set NODE_ENV to development by default, but can be overridden during build
ARG NODE_ENV=development
ENV NODE_ENV=$NODE_ENV

# Copy the appropriate .env file (either .env.development or .env.production)
COPY .env.${NODE_ENV} .env

# Run the React build for both development and production
RUN npm run build

# Always use Nginx even for local
FROM nginx:alpine AS nginxStage

# Copy the built React app from the build stage to Nginx
COPY --from=buildStage /app/build /usr/share/nginx/html

# Create and set the correct permissions for the Nginx cache directories
RUN mkdir -p /var/cache/nginx/client_temp /var/cache/nginx/proxy_temp /var/cache/nginx/fastcgi_temp /var/cache/nginx/uwsgi_temp && \
    chmod -R 755 /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx

# Expose port 80 (default for Nginx)
EXPOSE 80

# Set Nginx to run in the foreground
CMD ["nginx", "-g", "daemon off;"]
