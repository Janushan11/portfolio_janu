# Profile Image Setup

## How to Add Your Profile Image

1. **Save your profile image** to this folder (`/public/`)
2. **Name it**: `profile-image.jpg` (or `.png` if it's a PNG file)
3. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`

## Current Image Reference

The portfolio is configured to use: `/profile-image.jpg`

If you use a different filename or format, update `src/data/profile.ts`:
```typescript
avatar: '/your-image-name.jpg',
```

## Image Recommendations

- **Size**: 400x400px to 800x800px (square is best)
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for fast loading
- **Quality**: High quality, professional photo

## Alternative: Using External URL

If you prefer to host the image elsewhere (e.g., GitHub, Imgur, Cloudinary), you can update `src/data/profile.ts`:

```typescript
avatar: 'https://your-image-url.com/profile.jpg',
```

