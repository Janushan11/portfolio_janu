#!/bin/bash
# Copy public folder files to root for Vercel deployment
cp -r public/* . 2>/dev/null || true
echo "Files copied successfully"

