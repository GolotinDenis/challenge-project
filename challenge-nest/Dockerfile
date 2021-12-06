FROM node:12.19.0-alpine3.9 

WORKDIR /challenge-nest

COPY challenge-nest/package*.json ./

RUN npm install 

# COPY challenge-nest/. .

RUN npm run build
