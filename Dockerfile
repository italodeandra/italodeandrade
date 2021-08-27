# build environment
FROM node:14.17.1
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV PORT 3000
COPY . /usr/src/app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
