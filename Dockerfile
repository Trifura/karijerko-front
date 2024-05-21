FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install

ARG VITE_GOOGLE_OAUTH_CLIENT_ID
RUN echo 'GOOGLE OAUTH:' $VITE_GOOGLE_OAUTH_CLIENT_ID
ENV VITE_GOOGLE_OAUTH_CLIENT_ID=$VITE_GOOGLE_OAUTH_CLIENT_ID

ARG VITE_API_BASE_URL
RUN echo 'API BASE URL:' $VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL



RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
