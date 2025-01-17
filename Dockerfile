# Use the official Node.js image
FROM node:23-alpine

# Set the working directory
WORKDIR /test-app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port (either using the environment variable or default to 3000)
EXPOSE ${PORT:-3000}

# Command to run the application
CMD ["node", "server.js"]
