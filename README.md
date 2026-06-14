## He Cao Academic Homepage

This repository contains a lightweight academic homepage inspired by
[academicpages](https://github.com/academicpages/academicpages.github.io). It
keeps the same general information architecture: top navigation, author profile
sidebar, concise biography, publication archive, and project archive.

The site is plain static HTML/CSS, so it can be served directly by GitHub Pages
without a Jekyll build step.

### Local Preview

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

### Files

- `index.html` - homepage content and section anchors
- `publications.html` - publication archive with paper links where available
- `projects.html` - project archive
- `assets/styles.css` - responsive Academic Pages-style styling
- `assets/site.js` - shared sidebar component
- `assets/profile.jpg` - profile photo from Google Scholar
- `assets/profile.svg` - fallback profile visual
- `.nojekyll` - tells GitHub Pages to serve the site as plain static files

### ClustrMaps

To enable the visitor map, paste the `d` value from your ClustrMaps embed code
into `CLUSTRMAPS_ID` in `assets/site.js`.
