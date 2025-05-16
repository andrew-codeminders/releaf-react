# Stage 1: Build
FROM node:20 AS builder

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN npm install

ARG CACHEBUST=1
# Copy app source code
COPY index.js ./
ARG CACHEBUST=0

# Stage 2: Production
FROM node:20-slim

# Create app directory
WORKDIR /app

# Install Chromium dependencies required by Puppeteer
RUN apt-get update && apt-get install -y --no-install-recommends \
    chromium \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libnspr4 \
    libnss3 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    wget \
    ca-certificates \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Set env so Puppeteer uses system-installed Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Copy app from build stage
COPY --from=builder /app /app

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
