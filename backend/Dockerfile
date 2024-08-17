# Docker/Dockerfile

# 1. Use an official Node.js runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory in the container to /app
WORKDIR /app

# 3. Copy the package.json and package-lock.json files to the container
COPY ../package*.json ./

# 4. Install the application dependencies
RUN npm install

# 5. Copy the rest of the application code to the working directory in the container
COPY ../src ./src

# 6. Make port 5000 available to the world outside this container
EXPOSE 5000

# 7. Define the command to run the application
# CMD ["npm", "start"]
CMD ["bash", "-c", "ls -la /app && node /app/server.js"]
