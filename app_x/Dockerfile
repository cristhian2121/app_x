# Development environment
FROM node:alpine

# Set working directory
WORKDIR /app

# install pnpm
RUN corepack prepare pnpm@7.18.1 --activate
RUN corepack enable

# Environment Variables.
ENV PORT 3000
ENV NODE_ENV development

# Install and cache app dependencies
COPY /package.json /app
RUN pnpm install 

COPY . /app

# Use port 3000
EXPOSE 3000
CMD ["pnpm", "run", "dev", "--host"]