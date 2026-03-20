# Quick Deployment Guide for GitHub Pages

## 🚀 Fast Track Deployment (5 Minutes)

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `CosmoLuminous.github.io` (use your exact GitHub username)
4. Make it **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 2: Upload Your Website

#### Option A: Using Git (Recommended)

```bash
# Navigate to the website directory
cd /Users/cosmo/Documents/Work-IITD/Projects/github-profile-page/website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Personal research website"

# Add remote repository (replace CosmoLuminous with your username)
git remote add origin https://github.com/CosmoLuminous/CosmoLuminous.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL files from the `website` folder:
   - `index.html`
   - `README.md`
   - `.gitignore`
   - `css/` folder
   - `js/` folder
   - `images/` folder (even if empty)
3. Add commit message: "Initial commit"
4. Click **"Commit changes"**

### Step 3: Enable GitHub Pages (if not automatic)

1. Go to repository **Settings** → **Pages** (left sidebar)
2. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **"Save"**
4. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be live at: **`https://CosmoLuminous.github.io`**

---

## 🔧 Post-Deployment Checklist

### Immediate Actions

- [ ] Visit your website and verify it loads correctly
- [ ] Test all navigation links
- [ ] Check mobile responsiveness (use browser dev tools)
- [ ] Verify all external links work (GitHub, Scholar, LinkedIn)
- [ ] Test contact email link

### Content Updates

- [ ] Add your professional photo to `images/` folder
- [ ] Update any placeholder text if needed
- [ ] Add your latest publications
- [ ] Update news section with recent achievements
- [ ] Verify all dates are current

### Optional Enhancements

- [ ] Add Google Analytics tracking
- [ ] Create custom domain (optional)
- [ ] Add downloadable CV/Resume PDF
- [ ] Add more project images
- [ ] Set up custom 404 page

---

## 📝 Making Updates

### Quick Updates via GitHub Web Interface

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click **"Commit changes"**
7. Wait 1-2 minutes for changes to deploy

### Updates via Git (for multiple changes)

```bash
# Navigate to your website directory
cd /path/to/website

# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main
```

---

## 🎨 Common Customizations

### Adding Your Photo

1. Add your photo to `images/` folder (e.g., `profile.jpg`)
2. Edit `index.html`, find the hero section
3. Add before the `hero-content` div:

```html
<div class="hero-image">
    <img src="images/profile.jpg" alt="Aman Bhardwaj" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover; margin-bottom: 2rem; border: 5px solid rgba(255,255,255,0.3);">
</div>
```

### Adding a CV Download Button

1. Add your CV PDF to the repository (e.g., `Aman_Bhardwaj_CV.pdf`)
2. In `index.html`, add to the `hero-links` section:

```html
<a href="Aman_Bhardwaj_CV.pdf" download class="btn-link" aria-label="Download CV">
    <i class="fas fa-download"></i> Download CV
</a>
```

### Changing Colors

Edit `css/style.css`, find the `:root` section and modify:

```css
:root {
    --primary-color: #2040a0;      /* Your preferred color */
    --secondary-color: #1a3380;    /* Darker shade */
    --accent-color: #3d5afe;       /* Highlight color */
}
```

---

## 🐛 Troubleshooting

### Website Not Loading

**Problem**: 404 error or blank page

**Solutions**:
1. Check repository name is exactly `YourUsername.github.io`
2. Verify repository is **Public**
3. Check GitHub Pages is enabled in Settings → Pages
4. Wait 5-10 minutes after first deployment
5. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Styles Not Showing

**Problem**: Website loads but looks unstyled

**Solutions**:
1. Verify `css/style.css` exists in repository
2. Check file paths in `index.html` are correct
3. Ensure folder structure is maintained
4. Clear browser cache

### Links Not Working

**Problem**: Navigation or external links broken

**Solutions**:
1. Check all `href` attributes in `index.html`
2. Verify section IDs match navigation links
3. Test external links (GitHub, Scholar, LinkedIn)
4. Update email address if needed

---

## 🔒 Custom Domain (Optional)

If you want to use a custom domain (e.g., `amanbhardwaj.com`):

1. **Buy a domain** from a registrar (Namecheap, GoDaddy, etc.)

2. **Add custom domain in GitHub**:
   - Go to Settings → Pages
   - Under "Custom domain", enter your domain
   - Click Save

3. **Configure DNS** at your domain registrar:
   - Add A records pointing to GitHub's IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME record: `www` → `CosmoLuminous.github.io`

4. **Wait for DNS propagation** (can take 24-48 hours)

5. **Enable HTTPS** in GitHub Pages settings

---

## 📊 Adding Analytics

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📱 Testing Checklist

Before announcing your website:

- [ ] Desktop view (Chrome, Firefox, Safari)
- [ ] Mobile view (responsive design)
- [ ] Tablet view
- [ ] All navigation links work
- [ ] All external links open correctly
- [ ] Email link works
- [ ] Smooth scrolling functions
- [ ] Mobile menu toggles properly
- [ ] Back-to-top button appears on scroll
- [ ] All sections load properly
- [ ] No console errors (F12 → Console)

---

## 🎯 SEO Optimization

### Update Meta Tags

In `index.html`, verify/update these tags in `<head>`:

```html
<meta name="description" content="Your updated description">
<meta name="keywords" content="Your, Keywords, Here">
<meta name="author" content="Aman Bhardwaj">
```

### Add Open Graph Tags

For better social media sharing:

```html
<meta property="og:title" content="Aman Bhardwaj | AI Researcher">
<meta property="og:description" content="Interdisciplinary researcher in AI, ML, and Healthcare">
<meta property="og:image" content="https://CosmoLuminous.github.io/images/og-image.jpg">
<meta property="og:url" content="https://CosmoLuminous.github.io">
<meta name="twitter:card" content="summary_large_image">
```

---

## 📞 Support

If you encounter issues:

1. Check the main [README.md](README.md) for detailed documentation
2. Review GitHub Pages [documentation](https://docs.github.com/en/pages)
3. Check repository Issues tab for known problems
4. Contact via email: aman.bhardwaj@sit.iitd.ac.in

---

## ✅ Success Checklist

Your website is ready when:

- [x] Repository created and files uploaded
- [x] GitHub Pages enabled
- [x] Website accessible at your GitHub Pages URL
- [x] All sections display correctly
- [x] Navigation works smoothly
- [x] Mobile responsive
- [x] External links verified
- [x] Content is current and accurate

---

**Congratulations! Your professional research website is now live! 🎉**

Share your website:
- Add to email signature
- Update LinkedIn profile
- Share on academic networks
- Include in conference presentations
- Add to research papers

---

*Last Updated: February 2026*