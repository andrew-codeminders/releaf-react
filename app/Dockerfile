# Stage 1: Build the React app
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
COPY .npmrc ./
COPY .babelrc ./

RUN npm install

# Ensuring that the files are rebuilt without using cache
ARG CACHEBUST=1
COPY checkout/ ./checkout

RUN npm run build

FROM nginx:alpine

WORKDIR /app

# Copy app from build stage
COPY --from=builder /app/dist /usr/share/nginx/html/dist

# Copy your static site files into the Nginx web root
COPY ./public /usr/share/nginx/html

# Copy your custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
