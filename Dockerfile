FROM node:18-alpine AS runtime

# Build stage with Node.js for building
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application files
COPY . .

# Build the production bundle
RUN npm run build

# Copy the production build to the runtime image
FROM runtime

WORKDIR /usr/share/nginx/html

# Copy the production build from the builder stage
COPY --from=builder /app/dist .

# Expose the port (replace 80 with your desired port)
EXPOSE 80

# Use Nginx to serve the static content
CMD ["nginx", "-g", "daemon off;"]
