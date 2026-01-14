#!/bin/bash
# Copy public folder files to root for Vercel deployment
if [ -d "public" ]; then
    cp -r public/* . 2>/dev/null || true
    echo "Files copied from public/ to root"
    ls -la *.jpg *.png *.pdf 2>/dev/null | head -5
else
    echo "Public folder not found"
fi

