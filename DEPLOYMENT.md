# GitHub Pages Deployment Guide for Burgess Consulting

## Prerequisites
- Repository on GitHub with main branch
- Custom domain registered (burgessconsulting.org)

## Deployment Steps

### 1. GitHub Repository Setup
- Push this code to your GitHub repository (main branch)
- Go to repository Settings → Pages
- Under "Build and deployment":
  - Select "GitHub Actions" as the source
  - Ensure the workflow has permission to write to the repository

### 2. Custom Domain Configuration
- In GitHub repository Settings → Pages:
  - Enter your custom domain: `burgessconsulting.org`
  - GitHub will automatically generate the CNAME file (already included in public/CNAME)

### 3. Domain Registrar Setup
- Update your domain's DNS records to point to GitHub Pages:
  - For APEX domain (burgessconsulting.org):
    \`\`\`
    A records:
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    \`\`\`
  - For www subdomain (optional):
    \`\`\`
    CNAME record: your-username.github.io
    \`\`\`

### 4. SSL/HTTPS
- GitHub Pages automatically provides SSL/HTTPS
- Wait 5-10 minutes after DNS changes before accessing the site
- Enable "Enforce HTTPS" in repository Settings → Pages

### 5. Automatic Deployment
- Every push to the main branch automatically triggers the deploy workflow
- Check GitHub Actions tab to monitor deployment status

## File Structure
\`\`\`
.github/workflows/deploy.yml    # Deployment workflow
public/CNAME                    # Custom domain configuration
out/                            # Generated static files (after build)
\`\`\`

## Troubleshooting
- If deployment fails, check GitHub Actions logs for errors
- Ensure all image paths use relative URLs (not absolute)
- Clear browser cache if changes don't appear immediately
- DNS changes can take 24-48 hours to fully propagate
