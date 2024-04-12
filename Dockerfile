FROM nginx:stable-alpine
MAINTAINER cjaquiery
# Copy static contentla
COPY ./build /usr/share/nginx/html

#expose only http
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]