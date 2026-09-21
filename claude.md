# Gym Website — Development Instructions

## Project Type

This is a modern static gym/fitness website.

## Technology

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Vercel

## Architecture

- Use Next.js App Router.
- Use TypeScript.
- Prefer Server Components.
- Use Client Components only when required.
- Keep the initial website static.
- Do not introduce a database or backend unless explicitly requested.
- Keep components reusable and maintainable.
- Keep dependencies minimal.

## Development Principles

Before making changes:

1. Inspect the existing project.
2. Understand the current structure.
3. Reuse existing components where possible.
4. Do not rewrite working code unnecessarily.
5. Do not install packages unless they are required.
6. Keep changes focused on the requested task.

After making changes:

1. Check for TypeScript errors.
2. Check for lint errors.
3. Run the production build when appropriate.
4. Fix errors before considering the task complete.

## Design Direction

The website should feel:

- Premium
- Modern
- Athletic
- Strong
- Clean
- Professional

Avoid:

- Generic gym-template designs
- Excessive rounded cards
- Excessive gradients
- Excessive animations
- Cluttered layouts
- Unnecessary UI elements

## Responsive Design

The website must work properly on:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop screens

Use a mobile-first approach.

## Images

Use Next.js Image where appropriate.

Do not use random external image URLs without approval.

Keep website images organized under:

public/images/

## SEO

The website should use:

- Semantic HTML
- Proper heading hierarchy
- Metadata
- Descriptive page titles
- Descriptive meta descriptions
- Accessible image alt text

## Deployment

The production deployment target is Vercel.

The project should work with:

npm run dev

npm run build

npm run start

## Important

Do not build the entire website at once.

Implement the project incrementally, one section or feature at a time.

Do not make major architectural changes without explaining them first.
