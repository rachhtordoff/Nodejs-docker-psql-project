FROM ubuntu:14.04

COPY /src /opt/flaskapp/

RUN apt-get update
RUN apt-get install -y build-essential python3-dev python3-pip

run pip3 install -r /opt/flaskapp/requirements.txt

EXPOSE 80
WORKDIR /opt/flaskapp
