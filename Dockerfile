FROM node:16
RUN mkdir -p /provision
RUN mkdir -p /app
COPY provision/docker-up.sh /provision
RUN sh /provision/docker-up.sh
