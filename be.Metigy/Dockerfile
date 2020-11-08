FROM node:14-slim

ENV MYSQL_HOST="localhost"
ENV MYSQL_USER="root"
ENV MYSQL_PWD="YATB2011iop!"
ENV MYSQL_DATABASE="mydb"

WORKDIR /backend

COPY src src
COPY db db
COPY index.js .
COPY package.json .

RUN npm i --production

CMD ["node", "index.js"]