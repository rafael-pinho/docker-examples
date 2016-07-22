# docker-compose-files

In this folder you will find some docker compose yml files and some environments that you can build and run with it.
To use compose:

## Install Docker

If  you do not have docker yeat follow this guide: https://docs.docker.com/engine/installation/

## Install Docker-Compose

You will find how to install docker-compose in this link: https://docs.docker.com/compose/install/#install-docker-compose

## The 3 steps

You need 3 steps to use compose

- define how each service of your environment will be. You need to know thinks like:
 - image or dockerfile
 - volumes
 - ports
 - dependent services
 - environment variables
 - command
- write the definitions in docker-compose yml file
- run the command 'docker-compose up'

## Samples

More samples will be avaliable soon

- [TDC São Paulo 2016 - DevOps JAVA](./tdc-sampa-2016-devops-java)

!!!WARNING: This environments contains some nodejs, java, go or dotNet apps. Please, don't use this apps as a model to your own. As I saw, the objective is show how to use docker compose and nothing more.
