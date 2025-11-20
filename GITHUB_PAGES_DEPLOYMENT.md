# GitHub Pages Deployment Guide

## Option 1: Deploy to arjuaman.github.io (User Site)

This will make your portfolio available at `https://arjuaman.github.io`

### Steps:

1. **Create a new repository named exactly**: `arjuaman.github.io`
   - Go to https://github.com/new
   - Repository name: `arjuaman.github.io` (must match your username exactly)
   - Make it Public
   - Don't initialize with README

2. **Update Vite config for GitHub Pages**
   
   Edit `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/', // For user site (arjuaman.github.io)
   })
   ```

3. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Update package.json**
   
   Add these scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "tsc -b && vite build",
       "preview": "vite preview",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

5. **Deploy to GitHub Pages**
   ```bash
   # Add the new remote
   git remote add github-pages https://github.com/arjuaman/arjuaman.github.io.git
   
   # Deploy
   npm run deploy
   ```

6. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

7. **Wait 2-3 minutes**, then visit: `https://arjuaman.github.io`

---

## Option 2: Deploy to Project Site (My-PM-Portfolio)

This will make your portfolio available at `https://arjuaman.github.io/My-PM-Portfolio`

### Steps:

1. **Update Vite config**
   
   Edit `vite.config.ts`:
   ```typescript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/My-PM-Portfolio/', // For project site
   })
   ```

2. **Install gh-pages** (if not already installed)
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update package.json**
   
   Add deployment scripts:
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "tsc -b && vite build",
       "preview": "vite preview",
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to https://github.com/arjuaman/My-PM-Portfolio/settings/pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

6. **Visit**: `https://arjuaman.github.io/My-PM-Portfolio`

---

## Troubleshooting

### Blank Page / 404 Errors
- Check that `base` in `vite.config.ts` matches your deployment type
- User site: `base: '/'`
- Project site: `base: '/My-PM-Portfolio/'`

### Assets Not Loading
- Ensure all asset paths are relative (no leading `/`)
- Check browser console for errors

### Build Fails
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Update Deployment
```bash
# Make changes, then:
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy  # Redeploy to GitHub Pages
```

---

## Custom Domain (Optional)

1. **Buy a domain** (e.g., from Namecheap, GoDaddy)

2. **Add CNAME file** to `public/` folder:
   ```
   yourdomain.com
   ```

3. **Configure DNS** at your domain registrar:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: arjuaman.github.io
   ```

4. **Enable in GitHub Settings**:
   - Go to Settings → Pages
   - Custom domain: `yourdomain.com`
   - Enforce HTTPS: ✓

---

## Recommended: User Site (arjuaman.github.io)

For a portfolio, I recommend **Option 1** (User Site) because:
- Cleaner URL: `arjuaman.github.io` vs `arjuaman.github.io/My-PM-Portfolio`
- Easier to remember and share
- Professional appearance
- Can still use custom domain later

---

## Quick Deploy Commands

```bash
# One-time setup
npm install --save-dev gh-pages

# Every time you want to deploy
npm run deploy
```

That's it! Your portfolio will be live in 2-3 minutes. 🚀
