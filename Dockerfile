FROM node:17-slim

LABEL Vinícius Gutierrez <srgutyerrez@gmail.com>

ENV NPM_TOKEN=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

RUN npm install -g ts-node-dev

RUN mkdir /home/zeraph-users

COPY . /home/zeraph-users

WORKDIR /home/zeraph-users
