# XDriveSite — local dev & deploy notes

This repository contains a React/Vite site with a contact form powered by Netlify Forms. It's designed for simple deployment with no backend server required.

## Quick local run (Windows PowerShell)
1. Open PowerShell and change into the project folder:

```powershell
cd C:\Users\Cristian\Desktop\XDriveSite\XDriveSite
```

2. Install dependencies (if you haven't already):

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

## Contact Form
The contact form uses Netlify Forms for handling form submissions. Form submissions will be available in your Netlify dashboard once deployed. During local development, form submissions won't be processed - they will only work once deployed to Netlify.

## Deploy to Netlify
1. Push the repository to GitHub.
2. In Netlify:
   - Create a new site from Git -> GitHub and pick this repo
   - Build command: `npm run build`
   - Publish directory: `dist`
   - No environment variables needed
3. After deployment:
   - Go to Forms section in your Netlify dashboard to see form submissions
   - Configure form notifications in Netlify if desired (email, Slack, etc.)

## Useful commands

```bash
# Development
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build locally

# Deployment
git push        # Push changes to GitHub
                        # Netlify will automatically deploy changes
```

## Repository Status
- ✅ Contact form integrated with Netlify Forms
- ✅ Build configuration optimized for Netlify
- ✅ No backend/database dependencies
- ✅ Ready for simple deployment
