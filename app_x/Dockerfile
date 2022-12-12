# Development environment
FROM node:alpine

# Set working directory
WORKDIR /app

# Environment Variables.
ENV NODE_ENV development

# Install and cache app dependencies
COPY /package.json /app
RUN pnpm install 

# Use port 3000
EXPOSE 3000:3000
ENV PORT 3000
CMD ["pnpm", "run", "dev"]