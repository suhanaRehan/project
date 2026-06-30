# 🚀 Deployment Guide

This guide will help you deploy your SoftwareSphere MVP to production within minutes.

## Option 1: Vercel (Recommended - Easiest)

Vercel is the company behind Next.js and provides the smoothest deployment experience.

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/softwaresphere.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Add environment variables if needed (see below)
6. Click "Deploy"
7. Your site goes live in ~30 seconds! 🎉

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

---

## Option 2: Netlify (Alternative)

Similar to Vercel, very user-friendly.

### Step 1: Connect GitHub
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub account
4. Select your repository

### Step 2: Configure Build Settings
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18

### Step 3: Deploy
Click "Deploy" and your site will be live in 2-3 minutes.

---

## Option 3: Self-Hosted (Advanced)

For complete control over your infrastructure.

### Prerequisites
- VPS or dedicated server (DigitalOcean, AWS, Linode, etc.)
- Node.js 18+ installed
- PM2 for process management
- Nginx or Apache as reverse proxy

### Deployment Steps

1. **SSH into your server:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install dependencies:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Clone your repository:**
   ```bash
   cd /home/user
   git clone https://github.com/yourusername/softwaresphere.git
   cd softwaresphere
   ```

4. **Install and build:**
   ```bash
   npm install
   npm run build
   ```

5. **Start with PM2:**
   ```bash
   pm2 start npm --name "softwaresphere" -- run start
   pm2 startup
   pm2 save
   ```

6. **Set up Nginx:**
   ```bash
   sudo apt-get install nginx
   sudo nano /etc/nginx/sites-available/default
   ```

   Add this configuration:
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

7. **Restart Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

8. **Set up SSL (Let's Encrypt):**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## Environment Variables Setup

### For Vercel:
1. Go to Project Settings > Environment Variables
2. Add each variable:
   ```
   NEXT_PUBLIC_SUPABASE_URL = ...
   NEXT_PUBLIC_SUPABASE_ANON_KEY = ...
   ```

### For Netlify:
1. Go to Settings > Build & Deploy > Environment
2. Add variables
3. Redeploy if needed

### For Self-Hosted:
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All pages are accessible
- [ ] Contact form works (if connected)
- [ ] Navigation links work correctly
- [ ] Mobile layout is responsive
- [ ] Images load correctly
- [ ] Custom domain is set up
- [ ] SSL certificate is active (lock icon in browser)
- [ ] Analytics are configured
- [ ] Email notifications are set up
- [ ] Database backups are enabled

---

## Performance Optimization

### Enable Caching
The site is already optimized with:
- Static page generation
- Image optimization
- CSS optimization

### Monitor Performance
- Vercel Analytics: Included automatically
- Google Analytics: Add to `app/layout.tsx`
- Lighthouse: Chrome DevTools > Lighthouse

### Database Optimization (if using Supabase)
1. Create indexes on frequently queried columns
2. Use connection pooling
3. Archive old data regularly

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### 404 Errors
- Check page routes match file structure
- Verify metadata is correct

### Environment Variables Not Loading
- Verify variable names (case-sensitive)
- Check for typos in `.env.local`
- Restart dev server after changes

### Slow Loading
- Check image sizes
- Enable CDN caching
- Optimize database queries

---

## Monitoring & Maintenance

### Set Up Alerts
- Vercel: Automatic uptime monitoring
- Netlify: Add to Monitoring
- Self-hosted: Use tools like Uptime Robot

### Regular Updates
```bash
npm update
npm audit fix
git pull origin main
npm run build
```

### Backup Strategy
- Daily backups of database
- Regular GitHub commits
- Document all configurations

---

## Costs & Pricing

### Vercel (Recommended for MVP)
- **Free plan:** Sufficient for most MVPs
- **Pro plan:** $20/month for advanced features
- **Enterprise:** Custom pricing

### Netlify
- **Free plan:** Sufficient for MVP
- **Pro plan:** $19/month

### Self-Hosted (DigitalOcean example)
- **Basic droplet:** $4-6/month
- **Plus SSL & monitoring:** ~$10-15/month

---

## Next Steps After Deployment

1. **Add Google Analytics:**
   ```bash
   npm install next-google-analytics
   ```

2. **Set up contact form:**
   - Connect Supabase or Firebase
   - Integrate email service (SendGrid, Mailgun)

3. **Enable authentication:**
   - Configure Supabase/Auth0
   - Test login/signup flows

4. **Add blog section:**
   - Create `/app/blog` directory
   - Use MDX for markdown support

5. **Implement admin panel:**
   - Create `/app/admin` directory
   - Add user/inquiry management

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Deployment Help:** https://vercel.com/support

---

**Congratulations on deploying your site! 🎉**

Monitor your metrics, gather user feedback, and iterate for success!