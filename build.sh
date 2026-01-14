#!/bin/bash
# Copy public folder files to root for Vercel deployment
echo "Starting Vercel build process..."
echo "Current directory: $(pwd)"
echo "Contents:"
ls -la | head -10

# Copy all files from public to root
if [ -d "public" ]; then
    echo "Copying files from public/ to root..."
    cp -r public/* . 2>&1 || {
        echo "Warning: Some files may not have copied, continuing..."
    }
    
    # Verify critical files exist
    echo "Verifying files..."
    MISSING_FILES=0
    
    if [ ! -f "index.html" ]; then
        echo "ERROR: index.html missing!"
        MISSING_FILES=1
    else
        echo "✓ index.html exists"
    fi
    
    if [ ! -f "profile.jpg" ]; then
        echo "WARNING: profile.jpg missing!"
    else
        echo "✓ profile.jpg exists"
    fi
    
    if [ ! -f "Janushan_Kalaikumar_Resume.pdf" ]; then
        echo "WARNING: Resume PDF missing!"
    else
        echo "✓ Resume PDF exists"
    fi
    
    echo "Build complete. Files in root:"
    ls -la *.jpg *.png *.pdf index.html 2>/dev/null | head -15 || echo "No files found"
    
    if [ $MISSING_FILES -eq 1 ]; then
        echo "ERROR: Critical files missing, build failed!"
        exit 1
    fi
else
    echo "ERROR: Public folder not found!"
    echo "Current directory contents:"
    ls -la
    exit 1
fi

echo "Build successful!"

