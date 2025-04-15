# Quick-Start Deployment Guide

## 1. Push Your Code to GitHub

```bash
# Navigate to your project directory
cd portfolio-redesign

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-redesign.git

# Push to main branch
git branch -M main
git push -u origin main
```

## 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Build and deployment", select "GitHub Actions" as the source

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site when changes are pushed to the main branch.

## 3. Access Your Site

After the GitHub Actions workflow completes (check Actions tab), your site will be available at:
`https://YOUR_USERNAME.github.io/portfolio-redesign`

## 4. Make Updates

To update your site, simply push changes to the main branch:

```bash
git add .
git commit -m "Update site"
git push
```

GitHub Actions will automatically rebuild and redeploy your site.

---

For more detailed instructions and troubleshooting, see the [DEPLOYMENT.md](DEPLOYMENT.md) file. 