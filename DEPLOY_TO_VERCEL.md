# 🚀 Step-by-Step Guide: Deploy Portfolio to Vercel

## Prerequisites ✅
- GitHub account
- Vercel account (free)
- Git repository connected to GitHub

---

## Step 1: Verify Your Project Setup

Your project is already configured with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `build.sh` - Build script to copy files
- ✅ `index.html` - Main HTML file
- ✅ All assets in `public/` folder

---

## Step 2: Push to GitHub (if not already done)

```bash
# Check if you have uncommitted changes
git status

# If you have changes, commit them
git add .
git commit -m "Ready for Vercel deployment"

# Push to GitHub
git push origin main
```

---

## Step 3: Sign Up / Login to Vercel

1. Go to **https://vercel.com**
2. Click **"Sign Up"** (or **"Log In"** if you already have an account)
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub account

---

## Step 4: Create New Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **`portfolio_janu`** and click **"Import"**

---

## Step 5: Configure Project Settings

Vercel will auto-detect your `vercel.json`, but verify these settings:

### Framework Preset
- Select: **"Other"** or leave as auto-detected

### Root Directory
- Leave as **`.`** (root)

### Build Command
- Should show: `bash -c 'chmod +x build.sh && ./build.sh'`
- If not, paste it manually

### Output Directory
- Should show: **`.`** (root)
- If not, set it to **`.`**

### Install Command
- Leave empty or: `echo 'No dependencies to install'`

---

## Step 6: Deploy!

1. Click **"Deploy"** button
2. Wait 1-2 minutes for the build to complete
3. You'll see build logs in real-time

---

## Step 7: Verify Deployment

After deployment completes:

1. **Check the deployment URL:**
   - Vercel will show: `https://portfolio-janu-xxxxx.vercel.app`
   - Click it to open your site

2. **Test your site:**
   - ✅ Homepage loads
   - ✅ Images display correctly
   - ✅ Navigation works
   - ✅ Contact form works
   - ✅ Dark mode toggle works
   - ✅ All sections are visible

---

## Step 8: Custom Domain (Optional)

If you want a custom domain (e.g., `janushan.dev`):

1. Go to **Project Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain name
4. Follow DNS configuration instructions

---

## Step 9: Automatic Deployments

✅ **Automatic deployments are enabled by default!**

Every time you push to GitHub:
- Vercel automatically builds and deploys
- You get a new deployment URL
- Production URL updates automatically

---

## Troubleshooting

### ❌ Build Fails

**Error: "Command not found"**
- Solution: Make sure `build.sh` is executable
- Run: `chmod +x build.sh` locally and commit

**Error: "404 NOT_FOUND"**
- Solution: Check that `index.html` is in the root directory
- Verify `vercel.json` has correct `outputDirectory: "."`

**Error: "Missing files"**
- Solution: Ensure all files are in `public/` folder
- Check that `build.sh` copies files correctly

### ❌ Images Not Loading

- Check that images are in `public/` folder
- Verify image paths in `index.html` start with `/` (e.g., `/profile.jpg`)
- Check browser console for 404 errors

### ❌ Contact Form Not Working

- Verify EmailJS configuration in `index.html`
- Check EmailJS service ID, template ID, and public key
- See `EMAILJS_SETUP.md` for setup instructions

---

## Quick Deploy Checklist

Before deploying, ensure:

- [ ] All files committed to Git
- [ ] Pushed to GitHub
- [ ] `vercel.json` exists and is correct
- [ ] `build.sh` is executable
- [ ] All images in `public/` folder
- [ ] `index.html` references images correctly (e.g., `/profile.jpg`)

---

## Need Help?

If deployment fails:
1. Check build logs in Vercel dashboard
2. Verify all files are in `public/` folder
3. Ensure `build.sh` has execute permissions
4. Check that `index.html` is in the root directory

---

## 🎉 Success!

Once deployed, your portfolio will be live at:
- **Production URL:** `https://portfolio-janu.vercel.app` (or your custom domain)
- **Automatic HTTPS:** Enabled by default
- **Global CDN:** Fast loading worldwide
- **Free SSL Certificate:** Included

**Your portfolio is now live! 🚀**

