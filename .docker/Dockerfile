FROM node:8.9.4-wheezy

RUN curl -L https://raw.githubusercontent.com/dockito/vault/master/onvault?latest > /usr/local/bin/ONVAULT && \
    chmod +x /usr/local/bin/ONVAULT
RUN curl -L https://github.com/maxcnunes/waitforit/releases/download/v1.4.0/waitforit-linux_amd64 > /usr/local/bin/waitforit && \
    chmod +x /usr/local/bin/waitforit

RUN yarn global add nodemon

WORKDIR /usr/src/app
