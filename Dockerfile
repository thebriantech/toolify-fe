# Stage 1: Base image with pnpm enabled
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate

# Stage 2: Install dependencies (separated for layer caching)
FROM base AS deps
WORKDIR /app
# Copy lock files first to leverage Docker cache when deps haven't changed
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Install exact versions from lock file for reproducible builds
RUN pnpm install --frozen-lockfile

# Stage 3: Build the Next.js application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure the public directory exists so the runner stage doesn't fail when copying it
RUN mkdir -p public
# Produces .next/standalone with minimal server and dependencies
RUN pnpm build

# Stage 4: Production runtime (minimal image)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Listen on all interfaces so the container is accessible externally
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy static assets
COPY --from=builder /app/public ./public

# Prepare .next directory with correct ownership
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone server and bundled dependencies
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copy pre-built static files (CSS, JS bundles)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

EXPOSE 3000

# Periodic health check using wget (curl is not available on Alpine by default)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the standalone Next.js server
CMD ["node", "server.js"]
