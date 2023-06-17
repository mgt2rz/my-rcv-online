
FROM node:18.16-alpine AS deps
LABEL maintainer="Miguel Gutierrez <gt2rz.dev@gmail.com>"
LABEL version="1.0"
LABEL description="Dockerfile for NextJS"
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN  npm install --production


FROM node:18-alpine AS builder
LABEL maintainer="Miguel Gutierrez <gt2rz.dev@gmail.com>"
LABEL version="1.0"
LABEL description="Dockerfile for NextJS"
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build


FROM node:18-alpine AS runner
LABEL maintainer="Miguel Gutierrez <gt2rz.dev@gmail.com>"
LABEL version="1.0"
LABEL description="Dockerfile for NextJS"
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]


FROM node:18.16-alpine as dev
LABEL maintainer="Miguel Gutierrez <gt2rz.dev@gmail.com>"
LABEL version="1.0"
LABEL description="Dockerfile for NextJS"
WORKDIR /app
ENV NODE_ENV development
ENV NEXT_TELEMETRY_DISABLED 1
RUN apk add --no-cache nano git libc6-compat
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "run", "dev"]