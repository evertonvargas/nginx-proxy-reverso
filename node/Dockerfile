## Baixa a imagem do node com versão alpine (versão mais simplificada e leve
FROM node:alpine

## Define o local onde vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /usr/src/app

## Copia tudo que começa com package e termina com .json para dentro da pasta /usr/src/app
COPY package.json .

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

RUN apk add --no-cache curl

ENV DOCKERIZE_VERSION v0.19.0

RUN curl -sfL \
	https://github.com/powerman/dockerize/releases/download/${DOCKERIZE_VERSION}/dockerize-$(uname -s)-$(uname -m) | \
	install /dev/stdin /usr/local/bin/dockerize