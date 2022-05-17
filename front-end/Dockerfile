FROM node:14-alpine
EXPOSE 3000

WORKDIR /app
ADD package.json .
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]