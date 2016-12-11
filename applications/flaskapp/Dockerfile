FROM node:latest

WORKDIR /opt/flaskapp

COPY myapp/package.json /opt/flaskapp
COPY myapp/node_modules /opt/flaskapp

RUN npm install
RUN npm install --global nodemon

EXPOSE 3000
