# Deploying this site to Vercel

This project is a Next.js app and is ready to be deployed to Vercel. The repository already contains a minimal `vercel.json` which tells Vercel to build the project using the Next.js builder.

Quick checklist before deployment
- Ensure the repo is pushed to a Git provider (GitHub, GitLab, or Bitbucket).
- Confirm there are no required environment variables (this project currently has none).

Recommended Vercel settings (default values are fine):
- Framework Preset: Next.js (Vercel detects this automatically)
- Root Directory: `/` (project root)
- Build Command: `npm run build` (already in `package.json`)
- Output Directory: Leave blank (Next.js static/server output is handled by the adapter)

How to deploy

1. Connect the repository to Vercel via https://vercel.com/new (choose your Git provider and select the repo).
2. Vercel will detect Next.js automatically. Confirm or set the build command to `npm run build`.
3. Click Deploy. Vercel will run `npm install` and `npm run build` and publish the site.

Optional: Deploy using the Vercel CLI

Install the CLI and run an interactive deploy from the project root:

```bash
npm install -g vercel
vercel login
vercel --prod
```

If you need to add environment variables, open the Vercel dashboard for the project and add them under Settings → Environment Variables. After adding secrets, re-deploy.

Notes
- `vercel.json` is present and points to the Next.js builder.
- No serverless functions or special rewrites are required by the current site.

If you'd like, I can:
- Add a GitHub Actions workflow that runs `npm run build` and `npm test` on pushes.
- Add Vercel-specific preview metadata (like an `og:image`) or improve SEO meta tags.
