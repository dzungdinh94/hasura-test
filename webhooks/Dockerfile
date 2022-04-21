FROM node:14

WORKDIR /webhooks
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8989
CMD [ "npm start" ]