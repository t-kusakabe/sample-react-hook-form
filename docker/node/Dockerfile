##########################
## Builder Container
##########################
FROM node:16.8.0-alpine3.12 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:16.8.0-alpine3.12 as builder

WORKDIR /app

COPY --from=builder /app ./

CMD ["npm", "run", "start"]
