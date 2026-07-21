FROM node:20-alpine
WORKDIR /app

COPY server.js index.html manifest.json sw.js ./
COPY js ./js
COPY assets ./assets

EXPOSE 8080
CMD ["node", "server.js"]
