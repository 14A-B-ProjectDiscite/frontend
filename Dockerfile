#stage 1
FROM node:14.20 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/project-discite /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
                 