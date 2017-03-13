FROM rafaelpinho/alpine:latest

MAINTAINER Rafael Pinho <rafaelpinho@protonmail.com>

ENV NODE_VERSION=7.7.2 \
    NPM_VERSION=3

RUN apk add --no-cache  curl \
                        tar \
                        make \
                        gcc \
                        g++ \
                        build-base \
                        python \
                        linux-headers \
                        paxctl && \

    curl  http://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.tar.gz > node.tar.gz && \
    tar -zxf node.tar.gz && \
    rm node.tar.gz && \

    cd /node-v$NODE_VERSION && \
    ./configure --prefix=/usr --fully-static --without-snapshot && \
    make -j$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
    make install && \
    paxctl -cm /usr/bin/node && \
    cd .. && \

    npm install -g npm@${NPM_VERSION} && \
    (find /usr/lib/node_modules/npm -name test -o -name .bin -type d | xargs rm -rf;) && \

    apk del --purge curl \
                    tar \
                    build-base \
                    linux-headers \
                    paxctl && \

    rm -rf  /root/.npm \
            /root/.node-gyp \
            /root/.gnupg \
            /usr/lib/node_modules/npm/man \
            /usr/lib/node_modules/npm/doc \
            /usr/lib/node_modules/npm/html \
            /node-v${NODE_VERSION} \
            /var/cache/apk/* \
            /usr/share/man \
            /tmp/* \
            /etc/ssl

CMD node
