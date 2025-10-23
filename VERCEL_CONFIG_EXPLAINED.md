# Vercel.json Configuration Explained

This document explains each setting in your `vercel.json` configuration file.

## Configuration Breakdown

### Build Settings

```json
"buildCommand": "npm run build",
"devCommand": "npm run dev",
"installCommand": "npm install",
"framework": "nextjs"
```

- **buildCommand**: Command to build your Next.js app for production
- **devCommand**: Command for local development (used by Vercel CLI)
- **installCommand**: Command to install dependencies
- **framework**: Tells Vercel this is a Next.js project for optimizations

### Regions

```json
"regions": ["iad1"]
```

- **iad1**: Deploys to Washington D.C., USA (East Coast)
- Other options:
  - `sfo1`: San Francisco (West Coast)
  - `lhr1`: London (Europe)
  - `hnd1`: Tokyo (Asia)
  - `all`: Deploy to all regions (Enterprise only)

### Security Headers

```json
"headers": [...]
```

Adds important security headers to all pages:

- **X-Content-Type-Options: nosniff**
  - Prevents MIME type sniffing attacks

- **X-Frame-Options: DENY**
  - Prevents your site from being embedded in iframes (clickjacking protection)

- **X-XSS-Protection: 1; mode=block**
  - Enables browser XSS filtering

- **Referrer-Policy: origin-when-cross-origin**
  - Controls how much referrer information is sent

### Cache Control

```json
"source": "/fonts/(.*)",
"headers": [
  {
    "key": "Cache-Control",
    "value": "public, max-age=31536000, immutable"
  }
]
```

- Caches fonts for 1 year (31536000 seconds)
- Improves performance by reducing font re-downloads

### Rewrites

```json
"rewrites": [
  {
    "source": "/api/:path*",
    "destination": "/api/:path*"
  }
]
```

- Ensures API routes work correctly
- Useful if you add API endpoints later

### Redirects

```json
"redirects": [
  {
    "source": "/home",
    "destination": "/",
    "permanent": true
  }
]
```

- Example redirect from `/home` to `/`
- `permanent: true` = 308 redirect (good for SEO)
- Add more redirects here as needed

### URL Settings

```json
"trailingSlash": false,
"cleanUrls": true
```

- **trailingSlash: false**: URLs won't have trailing slashes (`/shop` not `/shop/`)
- **cleanUrls: true**: Removes `.html` extensions from URLs

### Environment Variables

```json
"env": {
  "NEXT_PUBLIC_SITE_URL": "https://your-domain.vercel.app"
}
```

- Define environment variables for all environments
- **Remember**: Update the URL after deployment!
- `NEXT_PUBLIC_` prefix makes it available in browser code

## Customization Tips

### Add More Regions (For faster global performance)

```json
"regions": ["iad1", "sfo1", "lhr1"]
```

### Add Custom Redirects

```json
"redirects": [
  {
    "source": "/old-shop",
    "destination": "/shop",
    "permanent": true
  },
  {
    "source": "/products",
    "destination": "/shop",
    "permanent": false
  }
]
```

### Add CORS Headers (If you need API access from other domains)

```json
{
  "source": "/api/(.*)",
  "headers": [
    {
      "key": "Access-Control-Allow-Origin",
      "value": "*"
    },
    {
      "key": "Access-Control-Allow-Methods",
      "value": "GET, POST, PUT, DELETE, OPTIONS"
    }
  ]
}
```

### Add Maintenance Mode Redirect

```json
{
  "source": "/(.*)",
  "destination": "/maintenance.html",
  "permanent": false
}
```

## After Deployment

1. Update the `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL
2. Add any custom domains in the Vercel dashboard
3. Monitor your deployment in Vercel's analytics

## Important Notes

⚠️ **Next.js 14 App Router works great without vercel.json**
- This file is optional but provides extra control
- Vercel auto-detects Next.js and configures most things automatically

✅ **What's Already Configured**
- Image optimization
- Automatic HTTPS
- Edge caching
- Gzip/Brotli compression
- Smart CDN

## Resources

- [Vercel Configuration Docs](https://vercel.com/docs/configuration)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Edge Network](https://vercel.com/docs/edge-network/overview)

---

Your `vercel.json` is production-ready! 🚀

