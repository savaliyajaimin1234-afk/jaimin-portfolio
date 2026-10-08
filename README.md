# Jaimin Savaliya — Portfolio

Static site, no build step. Everything that gets deployed lives in `dist/`.

```
dist/
  index.html      page structure and static sections
  style.css       design tokens (dark) and all layout
  script.js       project + case study content, menu, case study viewer
  assets/         mockups (full size + *-1100.webp for faster loading) and resume PDF
vercel.json       tells Vercel to serve dist/
```

## Deploy

```bash
npx vercel login
npx vercel --prod
```

From GitHub import: Framework Preset **Other**, Output Directory **dist**, no build command.

## Editing content

- **Projects and case studies:** the `PROJECTS` array at the top of `script.js`. Each project has a `study` object with the seven sections: problem, research, strategy, wireframes, ui, prototype, outcome.
- **Feature work list:** the `MORE` array in `script.js`.
- **About, experience, skills, contact:** directly in `index.html`.
- **Colours and type:** the `:root` block at the top of `style.css` (dark theme only).
- Case studies can be linked directly, e.g. `yoursite.com/#case/pos`.

## Before you publish — please review

The case study text is written only from your resume and what is visible in the final screens. Read each one and correct anything that doesn't match how the work actually happened. Two things would make the case studies much stronger:

1. **Real outcomes.** Any numbers you can share (faster billing, fewer support tickets, restaurants onboarded, app ratings) belong in each `outcome`.
2. **Process images.** Add a wireframe or early sketch per project to `assets/` and it can be shown in the Wireframes section.

Testimonials are intentionally left out. Add a short quote from a product manager or developer you've worked with only when you have one with their name and role.
