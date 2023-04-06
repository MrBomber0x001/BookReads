FROM node:18.14.1-bullseye-slim AS builder
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /home/node
COPY --chown=node:node package*.json ./
COPY --chown=node:node tsconfig*.json ./
COPY --chown=node:node src ./src
RUN  npm ci --ignore-scripts && npm run build
 
FROM node:18.14.1-bullseye-slim
ENV NODE_ENV production
WORKDIR /home/node
COPY --from=builder --chown=node:node /usr/bin/dumb-init /usr/bin/dumb-init
COPY --chown=node:node package*.json ./
COPY --from=builder /home/node/dist/ dist/
RUN npm install --omit=dev --ignore-scripts
USER node
EXPOSE 34273
CMD ["node", "dist/server/index.js"]