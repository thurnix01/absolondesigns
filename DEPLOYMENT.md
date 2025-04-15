# Deploying to GitHub Pages

This guide will walk you through the process of deploying your portfolio website to GitHub Pages.

## Option 1: Using GitHub Actions (Recommended)

This repository is already set up with a GitHub Actions workflow that will automatically build and deploy your site when you push to the main branch.

### Steps:

1. **Create a GitHub repository**
   - Create a new repository on GitHub (e.g., `portfolio-redesign`)
   - Push your local repository to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-redesign.git
   git branch -M main
   git push -u origin main
   ```

2. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Your site will be automatically built and deployed when you push to the main branch

3. **View Your Site**
   - After the GitHub Actions workflow completes, your site will be available at:
   - `https://YOUR_USERNAME.github.io/portfolio-redesign`

## Option 2: Manual Deployment

If you prefer to deploy manually, follow these steps:

1. **Build the site**
   ```bash
   npm run build
   ```
   This will create a static export in the `out` directory.

2. **Create a gh-pages branch**
   ```bash
   git checkout -b gh-pages
   ```

3. **Prepare for deployment**
   - Create a `.nojekyll` file to tell GitHub Pages not to use Jekyll:
   ```bash
   touch out/.nojekyll
   ```

4. **Deploy to GitHub Pages**
   - Use the provided deploy script:
   ```bash
   npm run deploy
   ```
   OR manually push the `out` directory to the `gh-pages` branch:
   ```bash
   git add -f out/
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

5. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", select "Deploy from a branch"
   - Select the "gh-pages" branch and the "/ (root)" folder
   - Click "Save"

6. **View Your Site**
   - After a few minutes, your site will be available at:
   - `https://YOUR_USERNAME.github.io/portfolio-redesign`

## Troubleshooting

- **Missing Images**: Make sure all image paths in your components are correct and all image files exist in the public directory.
- **404 Errors**: If you're seeing 404 errors, check that your `basePath` in `next.config.ts` matches your repository name.
- **CSS/JS Not Loading**: If your CSS or JS is not loading, check your `basePath` and ensure all paths in your HTML are relative.
- **Custom Domain**: To use a custom domain, add the domain in the GitHub Pages settings and create a CNAME file in the `public` directory with your domain. 