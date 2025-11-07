# 🚀 Deployment Guide - Vercel

This project is configured for automatic deployment to Vercel using the **production** branch.

---

## 📋 Branch Strategy

- **`master`** - Development branch (auto CI checks, no deploy)
- **`production`** - Production branch (auto deploy to Vercel)

---

## 🔧 Setup Instructions

### 1️⃣ Connect GitHub to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Choose: `fthliqml/vibe-portfolio`
5. Click **"Import"**

### 2️⃣ Configure Project Settings

**Framework Preset:** Next.js (auto-detected)

**Root Directory:** `./` (default)

**Build Command:**
```bash
npm run build
```

**Output Directory:** `.next` (auto-detected)

**Install Command:**
```bash
npm install
```

**Node Version:** 20.x (recommended)

### 3️⃣ Configure Git Integration

In Vercel project settings → **Git** tab:

**Production Branch:**
```
production
```

**Preview Branches:**
- ✅ Enable for `master` (optional)
- ✅ Enable for pull requests

**Deployment Protection:**
- 🔒 Protect production deployments (recommended)

### 4️⃣ Environment Variables (if needed)

In Vercel project settings → **Environment Variables** tab:

Currently no environment variables needed. Add if you use:
- API keys
- Database URLs
- Third-party service tokens

---

## 🎯 Deployment Workflow

### **For Production Deploy:**

```bash
# 1. Ensure you're on master with latest changes
git checkout master
git pull origin master

# 2. Switch to production branch
git checkout production

# 3. Merge master into production
git merge master

# 4. Push to trigger Vercel deploy
git push origin production
```

**Result:** Vercel automatically deploys! 🚀

---

### **For Development:**

```bash
# Work on master branch as usual
git checkout master

# Make changes, commit, push
git add .
git commit -m "feat: new feature"
git push origin master
```

**Result:** GitHub Actions runs CI checks ✅ (no deploy)

---

## 🔍 CI/CD Pipeline

### **GitHub Actions (All Branches)**

Runs on every push to `master` or `production`:

✅ **TypeScript Check** - `npx tsc --noEmit`  
✅ **ESLint** - `npm run lint`  
✅ **Build Test** - `npm run build`

### **Vercel (Production Only)**

Runs on every push to `production`:

1. 🔄 Clone repository
2. 📦 Install dependencies (`npm ci`)
3. 🏗️ Build project (`npm run build`)
4. 🚀 Deploy to production
5. 🌐 Update domain (`*.vercel.app`)

---

## 📊 Vercel Dashboard

After deployment, monitor:

- **Deployments** - View build logs
- **Analytics** - Traffic & performance
- **Domains** - Custom domain setup
- **Logs** - Runtime logs (Server Components, API routes)

---

## 🌐 Custom Domain (Optional)

1. Go to **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `fatihuliqmal.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (1-48 hours)

---

## ⚡ Performance Tips

### **Vercel Edge Network:**
- ✅ Global CDN (automatic)
- ✅ Image optimization (automatic)
- ✅ Static asset caching (automatic)

### **Next.js Optimizations:**
- ✅ Server Components (enabled)
- ✅ Image component (using `next/image`)
- ✅ Font optimization (system fonts)
- ✅ Code splitting (automatic)

---

## 🐛 Troubleshooting

### **Build Fails:**
1. Check Vercel build logs
2. Test build locally: `npm run build`
3. Fix errors, commit, push

### **Deploy Not Triggered:**
1. Verify production branch pushed: `git push origin production`
2. Check Vercel Git integration settings
3. Manually trigger redeploy in Vercel dashboard

### **Old Content Showing:**
1. Clear browser cache (Ctrl+Shift+R)
2. Check deployment timestamp in Vercel
3. Verify correct commit deployed

---

## 📝 Deployment Checklist

Before first deploy:

- [x] Production branch created
- [x] CI/CD workflow configured
- [x] Vercel.json added
- [ ] GitHub repo connected to Vercel
- [ ] Production branch set in Vercel
- [ ] First deployment successful
- [ ] Custom domain configured (optional)

---

## 🎉 Ready to Deploy!

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Import project
3. Push to production branch
4. Watch it deploy! 🚀

**Questions?** Check [Vercel Docs](https://vercel.com/docs) or [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Last Updated:** 2025-11-07  
**Framework:** Next.js 15  
**Deployment:** Vercel  
**CI/CD:** GitHub Actions
