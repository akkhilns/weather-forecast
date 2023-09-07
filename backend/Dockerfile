# Use an official Node.js runtime as the base image
# Specify the Node.js version and the Alpine Linux distribution
FROM --platform=linux/amd64 node:16-alpine3.16

# Set the working directory in the container to /backend
WORKDIR /backend

# Copy package.json and package-lock.json from your local directory into the container
COPY package*.json .

# Install the application dependencies using Yarn
RUN yarn install

# Copy the rest of your application source code from your local directory into the container
COPY . .

# Set an environment variable named PORT to 8080 (for the Node.js application)
ENV PORT 8080

# Define the command to start your Node.js application when the container starts
# This will start your application using Yarn and the "serve" script defined in your package.json
CMD ["yarn", "serve"]
