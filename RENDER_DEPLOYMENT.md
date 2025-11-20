# Render Deployment Configuration

## Static Site Settings

When creating a new Static Site on Render, use these settings:

### Build & Deploy
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Environment
- **Node Version**: 18 or higher (automatically detected from package.json)

### Advanced Settings (Optional)
- **Auto-Deploy**: Yes (deploys automatically on git push)
- **Branch**: main

## Deployment Steps

1. **Push to GitHub** (already done ✅)
   ```bash
   git push origin main
   ```

2. **Create New Static Site on Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Static Site"
   - Connect your GitHub account
   - Select repository: `arjuaman/My-PM-Portfolio`
   - Configure settings:
     - **Name**: `pm-portfolio` (or your preferred name)
     - **Branch**: `main`
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
   - Click "Create Static Site"

3. **Wait for Deployment**
   - Render will automatically build and deploy
   - Build time: ~2-3 minutes
   - You'll get a URL like: `https://pm-portfolio.onrender.com`

4. **Custom Domain (Optional)**
   - Go to Settings → Custom Domain
   - Add your domain and configure DNS

## Automatic Deployments

Every time you push to the `main` branch, Render will automatically:
1. Pull the latest code
2. Run `npm install`
3. Run `npm run build`
4. Deploy the `dist` folder

## Troubleshooting

If build fails:
- Check build logs in Render dashboard
- Verify Node.js version (should be 18+)
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

## Performance

- **CDN**: Render automatically serves via CDN
- **HTTPS**: Automatic SSL certificate
- **Compression**: Automatic gzip/brotli compression
- **Caching**: Optimized for static assets

## Cost

- **Free Tier**: Perfect for static sites
- **Bandwidth**: 100 GB/month free
- **Build Minutes**: Unlimited for static sites
