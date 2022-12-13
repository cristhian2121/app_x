FROM node:alpine

WORKDIR /app

RUN corepack prepare pnpm@7.18.1 --activate
RUN corepack enable

COPY package.json ./

RUN pnpm install
COPY . .

EXPOSE 3100
CMD [ "npm", "start" ]