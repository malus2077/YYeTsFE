FROM node:18-alpine AS builder

WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]