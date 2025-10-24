# Deployment Guide for Vercel

## Prerequisites
- GitHub account
- Vercel account
- Your portfolio code pushed to GitHub

## Steps to Deploy

### 1. Push to GitHub
```bash
git add .
git commit -m "Portfolio ready for deployment"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository: `pkmresume`
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

### 3. Environment Variables (Optional)
If you want to use EmailJS for contact form:
- Go to Project Settings > Environment Variables
- Add:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### 4. Custom Domain (Optional)
- Go to Project Settings > Domains
- Add your custom domain
- Update DNS records as instructed

## Features Included
✅ Mobile responsive design
✅ Downloadable resume from Google Drive
✅ Clickable certification links
✅ Smooth animations
✅ SEO optimized
✅ Fast loading

## Mobile Optimizations
- Responsive text sizing
- Touch-friendly buttons
- Optimized images
- Reduced animations on mobile
- Better spacing for small screens

Your portfolio is now ready for deployment! 🚀
