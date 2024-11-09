FROM node

WORKDIR /client

COPY package*.json /client/

RUN npm install

COPY . /client/

EXPOSE 3000

CMD [ "npm", "start" ]

# The error error:0308010C:digital envelope routines::unsupported occurs because the default OpenSSL version in Node.js 17+ (and some versions of Node 16 with certain configurations) requires setting specific environment variables to handle Webpack properly.

# To fix this issue, run the commmand to create a container: docker run -p 3000:3000 -e NODE_OPTIONS=--openssl-legacy-provider dockify/front-end
