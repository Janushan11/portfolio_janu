# Image Optimization Guide

## Current Image Sizes
Your portfolio images are currently very large, which causes slow loading:

- `FitFuel.jpg`: **21MB** ⚠️ (Should be < 500KB)
- `Venus_PC.jpg`: **13MB** ⚠️ (Should be < 500KB)
- `Scout.jpg`: **13MB** ⚠️ (Should be < 500KB)
- `Helping_birds.jpg`: **7.4MB** ⚠️ (Should be < 500KB)
- `Mercury_FM.jpg`: **7MB** ⚠️ (Should be < 500KB)
- `Playwright_QA.png`: **1.2MB** ⚠️ (Should be < 300KB)
- `profile2.jpg`: **384KB** ✅ (Acceptable)
- `profile.jpg`: **120KB** ✅ (Good)

## Recommended Image Sizes
- **Hero/Profile images**: 800-1200px width, < 200KB
- **Portfolio thumbnails**: 800-1000px width, < 300KB
- **Format**: Use WebP or optimized JPEG

## How to Optimize Images

### Option 1: Online Tools (Easiest)
1. **Squoosh** (Google): https://squoosh.app/
   - Upload image
   - Choose format (WebP or MozJPEG)
   - Set quality to 80-85%
   - Download optimized image

2. **TinyPNG**: https://tinypng.com/
   - Upload JPG/PNG
   - Automatically compresses
   - Download optimized version

### Option 2: Command Line (Linux/Mac)
```bash
# Install ImageMagick
sudo apt-get install imagemagick  # Linux
brew install imagemagick          # Mac

# Optimize images
cd public/

# Convert to WebP (best compression)
convert FitFuel.jpg -quality 85 -resize 1000x FitFuel.webp
convert Venus_PC.jpg -quality 85 -resize 1000x Venus_PC.webp
convert Scout.jpg -quality 85 -resize 1000x Scout.webp
convert Helping_birds.jpg -quality 85 -resize 1000x Helping_birds.webp
convert Mercury_FM.jpg -quality 85 -resize 1000x Mercury_FM.jpg
convert Playwright_QA.png -quality 85 -resize 1000x Playwright_QA.webp

# Or optimize JPEGs
convert FitFuel.jpg -quality 85 -resize 1000x -strip FitFuel_optimized.jpg
```

### Option 3: Using Python (Pillow)
```python
from PIL import Image
import os

def optimize_image(input_path, output_path, max_size=(1000, 1000), quality=85):
    img = Image.open(input_path)
    img.thumbnail(max_size, Image.Resampling.LANCZOS)
    img.save(output_path, 'JPEG', quality=quality, optimize=True)
    print(f"Optimized: {input_path} -> {output_path}")

# Optimize all images
images = [
    'FitFuel.jpg',
    'Venus_PC.jpg',
    'Scout.jpg',
    'Helping_birds.jpg',
    'Mercury_FM.jpg',
    'Playwright_QA.png'
]

for img in images:
    optimize_image(f'public/{img}', f'public/{img.replace(".png", ".jpg")}')
```

## After Optimization
1. Replace images in `public/` folder
2. Update `index.html` if you change file extensions (e.g., `.jpg` to `.webp`)
3. Test the site to ensure images load faster

## Expected Results
After optimization, your site should load **10-20x faster** on initial page load!

