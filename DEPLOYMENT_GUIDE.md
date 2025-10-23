# Deployment Guide - Vercel via GitHub

Your coffee store is ready to deploy! Follow these steps to get it live on Vercel.

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `coffee-store` or `artisan-coffee-shop`)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Push to GitHub

After creating your repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name!**

### Example:
```bash
git remote add origin https://github.com/johndoe/coffee-store.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy on Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in (you can use your GitHub account)
3. Click "Add New..." → "Project"
4. Click "Import Git Repository"
5. Find and select your `coffee-store` repository
6. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
7. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 4: Configure Domain (Optional)

After deployment, Vercel gives you a free `.vercel.app` domain. To use a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Environment Variables (If Needed)

If you add any API keys or secrets later:

1. Go to project settings in Vercel
2. Click "Environment Variables"
3. Add your variables
4. Redeploy

## Automatic Deployments

✅ Every push to your `main` branch will automatically deploy to production!
✅ Pull requests will get preview deployments

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `package.json` has correct dependencies
- Run `npm run build` locally to test

### Images Not Loading
- Already configured! We're using `remotePatterns` in `next.config.js`

### Need Help?
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

## Your Current Git Status

✅ Git repository initialized
✅ Initial commit created
✅ Ready to push to GitHub

Run these commands now:

```bash
# 1. Add your GitHub remote (replace with your info)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 2. Push to GitHub
git branch -M main
git push -u origin main
```

Then go to Vercel and import your repository!

---

## Quick Deployment Checklist

- [ ] Create GitHub repository
- [ ] Push code to GitHub (`git push -u origin main`)
- [ ] Sign up for Vercel account
- [ ] Import GitHub repository in Vercel
- [ ] Click Deploy
- [ ] Share your live URL! 🎉

Your site will be live at: `https://your-project-name.vercel.app`

