# Steel Beam Contractor Solutions

The production website for **Steel Beam Contractor Solutions LLC**, providing contractor-focused bookkeeping, payroll coordination, job costing, cleanup work, QuickBooks support, and practical financial guidance.

## Production

- `https://steel-beam.org`
- `https://www.steel-beam.org`
- Vercel project: `steel-beam-website`
- Production branch: `main`

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel hosting and Web Analytics
- Formspree consultation intake

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

Review the Vercel preview at desktop and mobile widths before merging.

## Important integrations

- The English and Spanish consultation forms submit through Formspree from `components/ConsultationForm.tsx`.
- Successful English submissions route to `/thank-you`.
- Successful Spanish submissions route to `/es/gracias`.
- Vercel Web Analytics is installed through `@vercel/analytics`.
- The site includes private owner analytics opt-out controls.

## Main routes

- `/` — homepage
- `/how-we-help` — services and outcomes
- `/cleanup-bookkeeping` — catch-up and cleanup support
- `/contractor-success-center` — contractor resources
- `/client-journey` — Steel Beam process
- `/contact` — consultation form
- `/es` — Spanish-language site

## Operating rules

Use only approved Steel Beam services, credentials, pricing, contact information, and business claims. Do not imply that Steel Beam provides legal services, tax preparation, or bilingual professional services beyond approved language assistance.

See [`OPERATIONS.md`](./OPERATIONS.md) for the required branch, Vercel preview, pull-request, and production-verification workflow.
