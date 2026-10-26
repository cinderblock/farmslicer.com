# farmslicer.com

The project site for [FarmSlicer](https://github.com/cinderblock/FarmSlicer),
the open-source, self-hosted slicer and print-farm manager. Static, built
from [ssg-base](https://github.com/cinderblock/ssg-base): React Router
(prerendered), Vite, TypeScript, Bun.

`slicer.farm` and `slic3r.farm` redirect here. The public demo is
`demo.farmslicer.com` (a FarmSlicer instance, not part of this site; the
home page's demo button turns on with `SITE.demoLive` in `app/site.ts`).

## Getting Started

```sh
bun install
bun run dev
```

## Scripts

| Script              | Description                  |
| ------------------- | ---------------------------- |
| `bun run dev`       | Start dev server             |
| `bun run build`     | Build static site            |
| `bun run preview`   | Preview built site           |
| `bun run test`      | Run Playwright tests         |
| `bun run test:ui`   | Run tests with Playwright UI |
| `bun run fmt`       | Format all files with oxfmt  |
| `bun run fmt:check` | Check formatting             |
| `bun run typecheck` | Type check                   |

## Project Structure

```
app/
  root.tsx          — HTML shell, icons
  site.ts           — facts the pages share (URLs, tagline, demo switch)
  routes.ts         — Route definitions
  routes/
    home.tsx        — The landing page
    404.tsx         — Not found page
  styles/
    global.css      — The app's palette, light and dark
assets/
  og.svg            — Source of public/og.png (resvg -w 1200 -h 630)
public/
  favicon.svg       — FarmSlicer's icon (source: FarmSlicer web/icons/)
  og.png            — Social card
tests/
  home.spec.ts      — E2E tests
```

Facts on the page come from FarmSlicer's README; keep them in step with it.

## Deployment

Cloudflare Pages builds and deploys on push to `master` (git-connected,
`bun run build` → `build/client`), configured in the ops repo with the
domain's redirects. `.github/workflows/ci.yml` only checks formatting,
types, tests, and the build.
