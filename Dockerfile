# Use the official Node.js runtime as the base image
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything to the container
COPY . .

# Build app for production
RUN npm run build

# Stage 2: Serve website with Nginx
FROM nginx:alpine

# Copy the built React app from dist to Nginx's default public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy Nginx config file
COPY nginx.conf /etc/nginx/conf.d/your_react_app.conf

# Expose port 80 (default HTTP port for Nginx)
EXPOSE 80

# Command to start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]