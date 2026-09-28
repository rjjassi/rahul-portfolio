# Rahul Jaiswal — Developer Portfolio

A responsive, dark technical portfolio built with Next.js, TypeScript, Tailwind CSS and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Customize

Edit `app/page.tsx` for your profile, projects, certifications, email, LinkedIn and GitHub links.

## Production

```bash
npm run build
npm start
```

### Docker

```bash
docker build -t rahul-portfolio .
docker run -p 3000:3000 rahul-portfolio
```

### Deploy to Vercel

Push this folder to GitHub and import the repository into Vercel. No special configuration is required.

### Deploy to Azure

The project can run as a Node.js container on Azure App Service or Azure Container Apps. The included Dockerfile uses Next.js standalone output.
