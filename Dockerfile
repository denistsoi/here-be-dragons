FROM node:6.9.5-alpine

RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install 

CMD ["npm", "start"]