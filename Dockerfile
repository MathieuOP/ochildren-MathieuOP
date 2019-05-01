FROM node:11-alpine as builder
RUN mkdir /src
WORKDIR /src
COPY . .
RUN npm i --silent
RUN npm run build:prod

FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
COPY conf/nginx /etc/nginx
COPY --from=builder /src/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# FROM node:alpine

# RUN mkdir -p /src/client /src/api
# WORKDIR /src/client

# COPY . .

# RUN apk add --no-cache --virtual build-dependencies \
#   git \
#   openssh

# ADD conf/git/repo-key /
# RUN \
#   chmod 600 /repo-key && \
#   echo "IdentityFile /repo-key" >> /etc/ssh/ssh_config && \
#   echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config && \
#   git clone git@github.com:O-clock-Orion/plateforme-educative-api.git /src/api

# RUN apk del build-dependencies \
#   && npm i --silent

# CMD ["npm", "start"]
