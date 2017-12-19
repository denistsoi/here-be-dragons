FROM node:9.3.0
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install 
RUN npm run build
CMD ["npm", "start"]