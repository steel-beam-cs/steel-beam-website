# Steel Beam Website Operations

This repository powers the production website for Steel Beam Contractor Solutions LLC.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel hosting and Web Analytics
- Formspree consultation intake

## Production

- `https://steel-beam.org`
- `https://www.steel-beam.org`

The `main` branch deploys to the Vercel production project `steel-beam-website`.

## Important integrations

- English and Spanish consultation forms submit through Formspree from `components/ConsultationForm.tsx`.
- Successful English submissions route to `/thank-you`.
- Successful Spanish submissions route to `/es/gracias`.
- Vercel Web Analytics is installed through `@vercel/analytics`.

## Validation

Before merging:

```bash
npm install
npm run lint
npm run build
```

Review the Vercel preview at desktop and mobile widths. Test any affected forms, links, metadata, and success routes.

## Content rules

- Use only approved Steel Beam services, credentials, pricing, contact details, and business claims.
- Do not imply that Steel Beam provides legal services, tax preparation, or bilingual professional services beyond approved language assistance.
- Keep the contractor-focused positioning and practical, direct tone.
- Treat changes to forms, contact information, pricing, credentials, service scope, privacy language, or client commitments as high-impact changes requiring review.

## Change workflow

1. Record nontrivial work in a GitHub issue.
2. Create a focused branch.
3. Make the smallest complete change.
4. Run lint and build.
5. Review the Vercel preview.
6. Merge through a pull request.
7. Confirm the production deployment is ready and error-free.

Do not edit production blindly.
