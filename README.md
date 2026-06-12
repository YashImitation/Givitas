# Givitas — Personalized Gift Platform

Premium digital catalog + live personalization + WhatsApp order flow.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Plain CSS (dark luxury theme)
- **Hosting**: Vercel (free tier)

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel (Step by Step)

### Step 1 — Push to GitHub
1. Create a new repo on github.com (name: `givitas`)
2. Run these commands in the project folder:
```bash
git init
git add .
git commit -m "Initial commit — Givitas platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/givitas.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **vercel.com** → Sign up / Log in (use GitHub account)
2. Click **"Add New Project"**
3. Select your `givitas` GitHub repo
4. Settings:
   - Framework: **Next.js** (auto-detected)
   - Build Command: `npm run build` (auto)
   - Output: leave default
5. Click **"Deploy"**
6. Done! URL milega: `givitas.vercel.app`

### Step 3 — Custom Domain (givitas.in)
1. Vercel Dashboard → Your Project → Settings → Domains
2. Add `givitas.in`
3. Vercel DNS records dikhayega — apne domain registrar mein add karo
4. SSL automatic ho jaata hai

## WhatsApp Number
`WA_NUMBER` in `src/data/products.ts` — already set to `918482970210`

## Features
- 44 products, 8 categories
- Live SVG name preview (wallet, pen, bottle, bracelet, pendant, diary, frame, ring)
- Symbol selection (Crown, Doctor, Infinity, etc.)
- Color picker
- WhatsApp order with pre-filled message
- Corporate enquiry form
- SEO meta tags
- Mobile responsive
