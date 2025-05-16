# Stage 1: Build the React app
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./
COPY .babelrc ./

RUN npm install

COPY client/ ./client
COPY server/ ./server

RUN npm run build
