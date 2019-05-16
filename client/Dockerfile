FROM node:alpine as builder
RUN npm install -g @angular/cli
WORKDIR '/client'
COPY package.json /client
RUN npm install
COPY . .
RUN ng build --prod=true

FROM nginx
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/dist/frontEndTdg /usr/share/nginx/html/cliente
