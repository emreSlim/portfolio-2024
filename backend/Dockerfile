# Stage 1: Install dependencies and build the application
FROM node:16 AS builder

# Set working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code into the container
COPY backend/ .

# Build the application (assuming you have a build script in package.json)
RUN npm run build

# Stage 2: Build a lightweight image for production
FROM node:16-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Expose the port on which the app will run
EXPOSE 3001

# Set NODE_ENV to production
ENV NODE_ENV=production

# Command to start the application in production mode
CMD ["npm", "run", "start:prod"]
