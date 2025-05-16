# Stage 1: Build the React app
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./
COPY .babelrc ./

RUN npm install

# Ensuring that the files are rebuilt without using cache
ARG CACHEBUST=1

COPY client/ ./client
COPY server/ ./server

RUN npm run build
