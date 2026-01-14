# Vercel Deployment Fix Guide

## Problem
Getting `404: NOT_FOUND` errors on Vercel deployment.

## Solution Applied

### 1. Updated `vercel.json`
- Simplified configuration
- Build command explicitly runs the build script
- Output directory set to root (`.`)

### 2. Enhanced `build.sh`
- Better error handling and logging
- Verifies critical files exist
- More robust file copying

### 3. Files Structure
- All assets in `public/` folder
- Build script copies them to root during deployment
- `index.html` references files with `/` paths (e.g., `/profile.jpg`)

## Deployment Steps

1. **Commit all changes:**
```bash
git add .
git commit -m "Fix Vercel deployment configuration"
git push
```

2. **Verify build script is executable:**
```bash
chmod +x build.sh
git add build.sh
git commit -m "Make build.sh executable"
git push
```

3. **Check Vercel Build Logs:**
   - Go to your Vercel dashboard
   - Click on your project
   - Go to "Deployments"
   - Click on the latest deployment
   - Check "Build Logs" tab
   - Look for:
     - "✓ index.html exists"
     - "✓ profile.jpg exists"
     - "Build successful!"

## What the Build Script Does

1. Copies all files from `public/` to root directory
2. Verifies `index.html` exists (required)
3. Verifies critical assets exist
4. Lists copied files for verification

## Troubleshooting

### If you still get 404 errors:

1. **Check Build Logs:**
   - Look for "ERROR" or "WARNING" messages
   - Verify files are being copied

2. **Verify File Paths:**
   - All images should be referenced as `/filename.jpg` (absolute paths)
   - Not `./filename.jpg` or `filename.jpg`

3. **Check Vercel Settings:**
   - Go to Project Settings → General
   - Framework Preset: "Other"
   - Build Command: `bash -c 'chmod +x build.sh && ./build.sh'`
   - Output Directory: `.`
   - Install Command: `echo 'No dependencies to install'`

4. **Manual Test:**
   - After deployment, check the URL:
   - `https://your-domain.vercel.app/profile.jpg` should work
   - `https://your-domain.vercel.app/index.html` should work

## Expected File Structure After Build

```
/
├── index.html          (main file)
├── profile.jpg         (copied from public/)
├── profile2.jpg        (copied from public/)
├── Mercury_FM.jpg      (copied from public/)
├── FitFuel.jpg         (copied from public/)
├── Venus_PC.jpg        (copied from public/)
├── Helping_birds.jpg   (copied from public/)
├── Playwright_QA.png   (copied from public/)
├── Scout.jpg           (copied from public/)
└── Janushan_Kalaikumar_Resume.pdf (copied from public/)
```

## Next Steps

1. Commit and push the updated files
2. Redeploy on Vercel
3. Check the build logs
4. Test the deployed site

If issues persist, check the Vercel build logs for specific error messages.

