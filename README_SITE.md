# Draft Site (Next.js)

This is a minimal Next.js site with two pages: Home and Contact. It's configured so you can deploy it directly to Vercel.

How to run locally

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

How to deploy to Vercel

1. Commit and push your repository to GitHub (or another supported Git provider).
2. In the Vercel dashboard, import the repository and deploy. Vercel detects Next.js automatically.

Notes

- The contact form is a demo only (alerts on submit). Replace with API calls for production.
- `package.json` includes scripts `dev`, `build`, and `start` for standard Next.js workflows.
