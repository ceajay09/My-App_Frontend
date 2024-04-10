FROM nginx:stable-alpine
MAINTAINER mip03
# Copy static content
COPY build /usr/share/nginx/html

#expose only http
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]