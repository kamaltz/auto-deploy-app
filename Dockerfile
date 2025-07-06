# Tahap 1: Build Aplikasi
FROM node:18-alpine AS builder
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin sisa kode aplikasi
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Tahap 2: Produksi Image
FROM node:18-alpine AS runner
WORKDIR /app

# Set environment variable untuk produksi
ENV NODE_ENV=production

# Salin build dari tahap 'builder'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "start"]