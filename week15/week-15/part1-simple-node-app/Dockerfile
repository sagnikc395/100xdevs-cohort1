FROM node:14
# where will evrything be copied and be stored.
WORKDIR /usr/src/app
# take everything and copy into the working directory.
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
