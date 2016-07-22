# docker-files

Dockerfiles for build docker containers.

WARNING - This is my dockerfiles, I just use them to learn docker, make tests and perhaps in small personal projects. 
If you want to use in production or serious project, please, search for official repositories in [docker hub](https://hub.docker.com). 

## alpine ##

Alpine linux docker images. See in docker hub: https://hub.docker.com/r/rafaelpinho/alpine/

* **[latest](/alpine/latest):** alpine linux with bash only
 - docker run -it rafaelpinho/alpine 


* **[rabbitmq/[version]](/alpine/rabbitmq)** alpine linux with rabbitmq. 
 - docker run -d -e -p 5672:5672 -p 15672:15672 rafaelpinho/alpine:rabbitmq-3.6.1
 - port 5672 to connect 
 - port 15672 to access management api using http
 - default userName:password = guest:guest
 

* **[nodejs/[version]](/alpine/nodejs)** alpine linux with nodejs. 
 - docker run -d -e -p 10000:10000 rafaelpinho/alpine:node-6.2.2-min
 - docker run -d -e -p 10000:10000 rafaelpinho/alpine:node-6.2.2-full
 - each version contains two files: "min-build", a minimal build with nodejs, npm and nothing more; "full-build", a full build with nodejs, npm and other packages like gcc, python and make to make possible install some npm packages;
 
