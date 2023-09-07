# Use an official Node.js runtime as the base image
# You're specifying the Node.js version and the Alpine Linux distribution
FROM --platform=linux/amd64 node:16-alpine3.16

# Set the working directory in the container to /frontend
WORKDIR /frontend

# Copy package.json and package-lock.json from your local directory into the container
COPY package*.json .

# Install the application dependencies using Yarn
RUN yarn install

# Copy the rest of your application source code from your local directory into the container
COPY . .

# Set an environment variable named PORT to 8081 (for the Vue.js development server)
ENV PORT 8081

# Define the command to start your Vue.js application when the container starts
# This will start your application using Yarn and the "serve" script defined in your package.json
CMD ["yarn", "serve"]
