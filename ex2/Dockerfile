FROM node
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 16001
CMD [ "npm", "start" ]
