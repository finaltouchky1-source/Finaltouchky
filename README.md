# Final Touch Painting & Remodel LLC — One Page Website

## 1) Quick setup
1. Open `index.html` and replace:
   - `REPLACE_WITH_PHONE` with your phone number (example: `502-555-1234`)
   - `REPLACE_WITH_EMAIL` with your email (example: `finaltouch@example.com`)
   - `REPLACE_WITH_DOMAIN` with your website URL (example: `https://finaltouchpainting.com`)

2. Optional edits:
   - Update the Hours line in the hero card
   - Add nearby cities in the About → Service area section

## 2) Add gallery photos
- Create a folder: `assets/gallery/`
- Put images inside (jpg/png/webp) and update the Gallery section in `index.html`.
Tip: Aim for ~1200px wide and compress to keep each image under ~500KB.

## 3) Hosting on Netlify (recommended)
This site includes a Netlify form (the estimate form) — it will work automatically on Netlify.

Steps:
1. Create a Netlify account
2. Drag-and-drop the *entire* site folder (or the zip contents) into Netlify: "Add new site" → "Deploy manually"
3. After deploy, go to:
   - Site settings → Forms → Enable form notifications (send submissions to your email)
4. Add your custom domain:
   - Site settings → Domain management → Add custom domain
   - Netlify will show DNS records to add at your domain registrar

## 4) Custom domain (Namecheap / GoDaddy / etc.)
At your registrar:
- If Netlify tells you to use Netlify DNS: change your nameservers to Netlify's nameservers.
- OR add the DNS records Netlify provides (A records or CNAME), depending on your setup.

## 5) Alternative hosting (Vercel / GitHub Pages)
- Works great for the site, but the built-in form will NOT work automatically.
- If you want Vercel/GitHub Pages, use a form service like Formspree or Basin and update the form action.

## Need help?
Tell me:
- Your phone number + email
- The domain you bought (or want to buy)
…and I’ll tailor the exact DNS records and update the site files with your real info.


# Easy Editing (Option B) — Admin Dashboard (/admin)

This site is set up for **Decap CMS** (Netlify CMS) so you can edit:
- Phone, email, hours, about text
- Services list
- Gallery images + captions

## IMPORTANT
To use the admin dashboard, Netlify requires the site to be connected to a **Git repo** (GitHub is easiest).

## Setup steps
1) Create a GitHub repo (example: `finaltouchky`).

2) Upload these site files to that repo.

3) In Netlify (for your site):
   - **Site configuration → Build & deploy → Link site to Git**
   - Choose GitHub and select your repo

4) Enable Identity:
   - Netlify site → **Identity** → Enable

5) Enable Git Gateway:
   - Identity → **Settings → Services → Git Gateway → Enable**

6) Invite yourself:
   - Identity → **Invite users** → invite your email
   - Accept invite and set a password

7) Visit:
   - `https://YOURDOMAIN.com/admin/`
   - Log in and edit your site, then click **Publish**.
