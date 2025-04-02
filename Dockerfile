FROM node:23.11.0-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000 3000

WORKDIR /app/frontend
RUN npm install

WORKDIR /app
RUN chmod +x /app/start.sh
CMD ["/app/start.sh"]

