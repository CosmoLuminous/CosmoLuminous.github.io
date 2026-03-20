# Aman Bhardwaj - Personal Research Website

A professional, responsive personal website showcasing research, publications, and projects in AI, Machine Learning, and Healthcare Innovation.

## 🌐 Live Website

This website is designed to be hosted on GitHub Pages at: `https://CosmoLuminous.github.io`

## 📋 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🚀 Deployment to GitHub Pages

### Option 1: Deploy to `username.github.io` (Recommended)

1. **Create a new repository** named `CosmoLuminous.github.io` (replace with your GitHub username)

2. **Clone the repository**:
   ```bash
   git clone https://github.com/CosmoLuminous/CosmoLuminous.github.io.git
   cd CosmoLuminous.github.io
   ```

3. **Copy website files**:
   ```bash
   # Copy all files from the website directory to the repository root
   cp -r /path/to/website/* .
   ```

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Initial commit: Personal research website"
   git push origin main
   ```

5. **Access your website** at: `https://CosmoLuminous.github.io`

### Option 2: Deploy to Project Repository

1. **Create a new repository** (e.g., `personal-website`)

2. **Clone and add files**:
   ```bash
   git clone https://github.com/CosmoLuminous/personal-website.git
   cd personal-website
   cp -r /path/to/website/* .
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click Save

4. **Access your website** at: `https://CosmoLuminous.github.io/personal-website`

## 📁 Project Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet with responsive design
├── js/
│   └── script.js      # JavaScript for interactivity
├── images/            # Directory for images (add your photos here)
└── README.md          # This file
```

## 🎨 Customization

### Adding Your Photo

1. Add your professional photo to the `images/` directory
2. Update the hero section in `index.html` to include your image:
   ```html
   <div class="hero-image">
       <img src="images/your-photo.jpg" alt="Aman Bhardwaj">
   </div>
   ```

### Updating Content

- **Personal Information**: Edit the hero section in `index.html`
- **Research Focus**: Modify the research cards in the Research section
- **Publications**: Update the publications list with your latest papers
- **Projects**: Add or remove project cards as needed
- **News**: Keep the news section updated with recent achievements
- **Contact**: Update email, phone, and social media links

### Customizing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #2040a0;      /* Main brand color */
    --secondary-color: #1a3380;    /* Secondary brand color */
    --accent-color: #3d5afe;       /* Accent color for highlights */
}
```

## 🔧 Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A local web server (optional but recommended)

### Running Locally

#### Option 1: Using Python (Recommended)

```bash
# Navigate to the website directory
cd website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open browser to http://localhost:8000
```

#### Option 2: Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Navigate to website directory
cd website

# Start server
http-server -p 8000

# Open browser to http://localhost:8000
```

#### Option 3: Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option 4: Direct File Opening

Simply open `index.html` in your web browser. Note: Some features may not work without a local server.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

The website includes:
- Semantic HTML5 structure
- Meta descriptions and keywords
- Open Graph tags (can be added)
- Proper heading hierarchy
- Alt text for images
- Fast loading times

### Adding Open Graph Tags (Optional)

Add these meta tags in the `<head>` section of `index.html`:

```html
<meta property="og:title" content="Aman Bhardwaj | AI Researcher">
<meta property="og:description" content="Interdisciplinary researcher in AI, Machine Learning, and Healthcare">
<meta property="og:image" content="https://CosmoLuminous.github.io/images/og-image.jpg">
<meta property="og:url" content="https://CosmoLuminous.github.io">
<meta name="twitter:card" content="summary_large_image">
```

## 📊 Analytics (Optional)

To add Google Analytics:

1. Create a Google Analytics account
2. Get your tracking ID
3. Add before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Troubleshooting

### Website not loading on GitHub Pages

- Check that the repository is public
- Verify GitHub Pages is enabled in Settings
- Ensure `index.html` is in the root directory
- Wait a few minutes for deployment to complete

### Styles not applying

- Clear browser cache
- Check that `css/style.css` path is correct
- Verify CSS file is committed to repository

### JavaScript not working

- Check browser console for errors
- Ensure `js/script.js` path is correct
- Verify JavaScript file is committed to repository

## 📝 Content Updates

### Regular Updates Recommended

- **Publications**: Add new papers as they're published
- **News**: Update with recent achievements and events
- **Projects**: Add new research projects
- **CV/Resume**: Keep downloadable CV updated

### Adding a CV Download

1. Add your CV PDF to the repository
2. Add a download button in the hero section:

```html
<a href="cv/Aman_Bhardwaj_CV.pdf" download class="btn-link">
    <i class="fas fa-download"></i> Download CV
</a>
```

## 🤝 Contributing

This is a personal website, but suggestions for improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This website template is free to use and modify for personal or academic purposes.

## 📧 Contact

**Aman Bhardwaj**
- Email: aman.bhardwaj@sit.iitd.ac.in
- GitHub: [@CosmoLuminous](https://github.com/CosmoLuminous)
- LinkedIn: [aman-bhardwaj-iitd](https://www.linkedin.com/in/aman-bhardwaj-iitd/)

---

**Built with ❤️ for research and innovation**

Last Updated: February 2026