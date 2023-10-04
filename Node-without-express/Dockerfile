# Use your specific Node.js version as the base image
FROM node:18.17.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose a port (if your app needs it)
EXPOSE 3000

# Define the command to run your application
CMD [ "node", "index.js" ]
