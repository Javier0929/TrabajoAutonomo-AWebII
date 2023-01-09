FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 9999
ENTRYPOINT ["npm","start"]