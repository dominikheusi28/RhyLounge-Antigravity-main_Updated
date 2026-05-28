# RhyLounge Website

Client website for RhyLounge, built with Next.js.

## Local Preview

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000 in the browser.

If PowerShell blocks `npm`, use the Windows command form:

```powershell
npm.cmd run dev
```

## Production Check

Run these before showing the website to a client or deploying it:

```bash
npm run lint
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Metanet Hosting

This project should be hosted on a Metanet package that supports Node.js, ideally VPS or Plesk with Node.js enabled.

Recommended production setup:

```bash
npm ci
npm run build
npm run start
```

Use the server control panel or process manager to keep the app running and point the domain to the Next.js server port.

## Client-Ready Notes

- Main pages are prerendered for the `de`, `en`, and `fr` locales.
- Images used by the visible pages have lightweight WebP versions.
- The app uses local/system fonts instead of loading Google Fonts at runtime.
- `sharp` is installed so Next.js can serve optimized images in production.
