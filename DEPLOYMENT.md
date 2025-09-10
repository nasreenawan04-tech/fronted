
# Frontend Deployment Guide

## Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set the **Root Directory** to the repository root (since this is now the frontend-only repo)
3. Vercel will automatically detect it's a Vite project

### Environment Variables in Vercel
- `VITE_API_URL` = Your backend URL (e.g., `https://your-backend.railway.app`)

### Build Settings (Auto-detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Manual Deployment

```bash
npm install
npm run build
# Upload dist/ folder to your hosting provider
```
