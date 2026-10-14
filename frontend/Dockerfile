FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY index.html ./
COPY src ./src

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

EXPOSE 3000

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
