# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development commands

This is a statically generated Astro 5 blog with React 18 islands, Tailwind CSS 3, Jotai state, and Framer Motion animations. Use pnpm (v9+); the repository has a pnpm v9-format lockfile. Use Node.js 22+.

Run commands from the repository root:

```bash
pnpm install
pnpm dev                                # Development server: http://localhost:4321
pnpm astro check                        # Astro/TypeScript diagnostics without building
pnpm build                              # astro check -> astro build -> Pagefind indexing
pnpm preview                            # Serve the production output in dist/
pnpm exec prettier --check .             # Non-mutating formatting check
pnpm exec prettier --write path/to/file  # Format only selected files
pnpm lint                               # Formats the entire repository in place
```

- There is no automated test suite. The verification steps are `pnpm astro check`, formatting checks, and the complete production build (`pnpm build`).
- `pnpm build` produces both the static site and its search index. Plain `astro build` skips Pagefind; use the full build followed by preview when checking search.
- Interactive content scaffolders are `pnpm new-post`, `pnpm new-friend`, and `pnpm new-project`. Filenames must match lowercase alphanumeric segments separated by hyphens (e.g., `bai-viet-moi`). Posts are created directly in `src/content/posts/`.
- Installation runs `prepare` to register simple-git-hooks: pre-commit runs lint-staged/Prettier, and commit-msg enforces Conventional Commits.
- GitHub Actions CI/CD is configured in `.github/workflows/deploy.yml` to automatically build and deploy to GitHub Pages on pushes to `main`.

## Architecture

### Configuration and content

- `src/astro-obsidian.config.ts`: Single source of truth for site URL, title, author, menu, hero, colors, and comment settings.
- `astro.config.ts`: Connects React, Tailwind, sitemap generation, Swup SPA navigation, and the Markdown processing pipeline. Static output goes to `dist/`.
- `src/content/posts/`: Blog posts in Markdown format, tracked directly in this repository.
- `src/content.config.ts`: Defines Zod schemas for `posts`, `spec`, `projects`, and `friends` content collections.
- TypeScript extends Astro's strict configuration. The `@/` import alias maps to `src/`.

### Formatting and theme conventions

Prettier uses single quotes, no semicolons, a 100-character print width, and `prettier-plugin-astro`. Tailwind's dark selector is `[data-theme="dark"]`, not a `.dark` class; its semantic colors reference CSS custom properties rather than hardcoded palette values.
