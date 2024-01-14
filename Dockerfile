FROM node:20-alpine3.18

RUN npm i -g @nestjs/cli

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

CMD ["npm", "run", "start:prod"]

EXPOSE 3000

EXPOSE 7474

EXPOSE 7687