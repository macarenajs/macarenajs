FROM node:8.0.0-wheezy

RUN curl -l https://raw.githubusercontent.com/dockito/vault/master/onvault?latest > /usr/local/bin/ONVAULT && \
    chmod +x /usr/local/bin/ONVAULT
RUN curl -l https://github.com/maxcnunes/waitforit/releases/download/v1.4.0/waitforit-linux_amd64 > /usr/local/bin/waitforit && \
    chmod +x /usr/local/bin/waitforit

RUN yarn global add nodemon

WORKDIR /usr/src/app
