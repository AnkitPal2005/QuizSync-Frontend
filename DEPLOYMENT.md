# Deployment Guide

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**
   - Add your environment variables in Vercel dashboard
   - Go to Settings → Environment Variables
   - Add:
     - `NEXT_PUBLIC_API_URL`
     - `NEXT_PUBLIC_ENABLE_ANALYTICS`

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Every push to main will trigger a new deployment

#### Custom Domain
- Go to Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

#### Steps:

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables**
   - Add in Site Settings → Environment Variables

3. **Deploy**
   - Connect GitHub repository
   - Netlify will auto-deploy on push

---

### 3. Docker

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run

```bash
# Build image
docker build -t quizsync-frontend .

# Run container
docker run -p 3000:3000 quizsync-frontend
```

---

### 4. AWS (EC2 + PM2)

#### Steps:

1. **Setup EC2 Instance**
   - Launch Ubuntu instance
   - Install Node.js 18+
   - Install PM2: `npm install -g pm2`

2. **Clone Repository**
   ```bash
   git clone <your-repo-url>
   cd quizsync-frontend
   npm install
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "quizsync" -- start
   pm2 save
   pm2 startup
   ```

4. **Setup Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Build succeeds locally (`npm run build`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No linting errors (`npm run lint`)
- [ ] All pages load correctly
- [ ] API endpoints are correct
- [ ] Images and assets load properly
- [ ] Mobile responsive design tested
- [ ] Performance optimized (Lighthouse score)

---

## 🔧 Environment Variables

Required for production:

```env
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_APP_NAME=QuizSync
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

---

## 🐛 Troubleshooting

### Build Fails

1. Clear cache: `npm run clean`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node version: `node -v` (should be 18+)

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables
- Check Vercel/Netlify dashboard for correct values

### Images Not Loading

- Use Next.js Image component
- Configure `next.config.ts` for external images
- Check image paths are correct

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use Next.js Image component

2. **Code Splitting**
   - Use dynamic imports for heavy components
   - Lazy load non-critical components

3. **Bundle Analysis**
   ```bash
   npm install @next/bundle-analyzer
   ```

4. **Caching**
   - Configure proper cache headers
   - Use CDN for static assets

---

## 🔒 Security

- [ ] Enable HTTPS
- [ ] Set security headers in `next.config.ts`
- [ ] Validate all user inputs
- [ ] Sanitize data before rendering
- [ ] Use environment variables for secrets
- [ ] Enable CORS properly
- [ ] Rate limiting on API routes

---

## 📈 Monitoring

### Recommended Tools

- **Vercel Analytics** (if using Vercel)
- **Google Analytics**
- **Sentry** (Error tracking)
- **LogRocket** (Session replay)

---

## 🔄 CI/CD

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

---

## 📞 Support

For deployment issues, contact the development team or check:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
