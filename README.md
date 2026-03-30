# Personal Website

A minimal personal website with Research and Photography tabs, hosted for free on GitHub Pages.

## Hosting (free, no subscription)

1. Push this repo to GitHub (or it's already there)
2. Go to **Settings → Pages** in your GitHub repo
3. Under "Branch", select `main` (or whichever branch has your files), root `/`
4. Click Save — your site will be live at `https://yourusername.github.io/repo-name`

## Customizing

### Fill in your info (`index.html`)

| What to change | Where in the file |
|---|---|
| Your name | `<h1>Your Name</h1>` and tagline `<p class="tagline">` |
| Profile photo | Uncomment the `<img class="bio-photo">` line, add your photo to `images/` |
| Bio text | Inside `<div class="bio-text">` |
| Links (CV, Scholar, GitHub) | Inside `<div class="bio-links">` |
| Publications | Duplicate `<li class="pub-item">` blocks |
| Projects | Duplicate `<div class="project-card">` blocks |

### Adding photos

1. Create an `images/` folder in this directory
2. Put your `.jpg` / `.png` files in it
3. In `index.html`, find the `<!-- To add a real photo -->` comment and replace a placeholder block with:

```html
<div class="photo-item" onclick="openLightbox(this)">
  <img src="images/yourphoto.jpg" alt="Caption for this photo">
  <div class="photo-caption">Caption for this photo</div>
</div>
```

Photos display at 420px tall; width adjusts automatically. You can drag/scroll horizontally, and clicking a photo opens a fullscreen lightbox.

### Linking your CV

Put your CV PDF as `cv.pdf` next to `index.html`. The "CV" link in the bio already points to `cv.pdf`.
