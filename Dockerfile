FROM node:10-alpine

COPY . /src
WORKDIR /src
COPY package.json /src/
RUN npm install -g serve
RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["npm","run","serve"]
