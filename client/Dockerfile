FROM nginx:alpine

# Copy your static site files into the Nginx web root
COPY ./public /usr/share/nginx/html

# Copy your custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80