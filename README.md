# {Codonist} website

Company website for **Codonist**, the software studio of Hamayun Aziz. It's built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: hero, interactive product preview, selected work, services, Lab teaser, founder & testimonials, process |
| `/work` | Full portfolio with search, technology filters and sorting |
| `/services` | The 8 services, with what's included and related work |
| `/lab` | Live demos: filters, data table, booking calendar, cart & checkout, multi-step quote, AI chat, UI kit, RTL |
| `/about` | Story, principles, timeline, education, toolbox |
| `/contact` | Enquiry form with validation (opens the visitor's email app), email, WhatsApp, Upwork |

Light and dark themes are both supported. The toggle in the header saves the visitor's choice.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

## Editing content

All copy lives in **`src/data/site.ts`**: services, projects, testimonials, timeline, skills and contact links. Lab demo titles live in `src/data/lab.ts`.

### Adding a real project screenshot

1. Save the image as `public/work/<project-slug>.jpg` (about 1600×1000).
2. In `src/data/site.ts`, add `image: "/work/<project-slug>.jpg"` to that project.

Projects without an `image` show a generated branded preview.

## To confirm before launch

- Exact degree name on the About page (MCA vs MCS)
- AlphaSquad LLC dates and role, and the i-intellect city
- Python/Django/Flask projects to list under Python & AI
- Real screenshots for each project
