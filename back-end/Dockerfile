FROM node

RUN mkdir /src/app

WORKDIR /src/app

ENV PATH /src/app/node_modules/.bin:$PATH

COPY  package*.json /src/app

RUN npm install

COPY . /src/app

EXPOSE 4000

CMD [ "npm", "start" ]