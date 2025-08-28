# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache curl
COPY --from=builder /app /app
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]
