# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChenDusk's personal homepage built with Astro 5.x. The site uses a HyperOS × Liquid Glass design system — a fusion of MIUIX/HyperOS (Squircle corners, deep dark mode, press feedback, MiSans font) and iOS 26 Liquid Glass (glassmorphism, edge highlights, dual-layer architecture, fluid animations).

Design references: [MIUIX](https://compose-miuix-ui.github.io/miuix/zh_CN/) · [Liquid Glass](https://zh.wikipedia.org/zh-cn/Liquid_Glass)

## ⚠️ 铁律：禁止自行 Push

**除非用户在对话中明确说出"push"、"推送到远程"等指令，否则绝对不要执行 `git push`。** 这条规则没有任何例外——即使刚刚完成了大量修改、即使用户要求了 commit，也必须等用户主动发出 push 指令才能推送。违反此规则是不可接受的。

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

No test framework or linter is configured.

## Architecture

**Content-driven architecture**: All site content lives in `src/site.config.ts`. To update profile info, projects, skills, or about page text, edit that single file — no page code changes needed.

**Dependency graph**:
```
site.config.ts ← imported by all pages and components
    ├── BaseLayout.astro ← imports site.config + global.css
    │       ↑ wrapped by all pages
    │       ├── index.astro ← imports AvatarCard, SkillTags, ProjectCard
    │       ├── projects.astro ← imports ProjectCard
    │       └── about.astro
    ├── AvatarCard.astro ← reads profile, socials
    ├── SkillTags.astro ← reads skills
    └── ProjectCard.astro ← pure Props, does NOT import siteConfig
```

**Pages** (in `src/pages/`):
- `index.astro` — Homepage: AvatarCard + SkillTags + ProjectCard grid
- `projects.astro` — Full project listing with subtitle
- `about.astro` — Bio, stats (3-col grid), interests list, skills, contact grid; uses 5-level staggered animation delays

**Components** (in `src/components/`):
- `AvatarCard.astro` — Hero card with squircle avatar, pulse-ring animation, meta info, social buttons
- `SkillTags.astro` — Flex-wrap pill tags from `siteConfig.skills`
- `ProjectCard.astro` — Receives all data via Props (name, description, url, language, stars, delay); has hardcoded `langColors` map for Go/JS/Dart/TS

**Layout**: `BaseLayout.astro` wraps all pages. Accepts optional `title` and `description` props (defaults from siteConfig). Contains fixed-position glassmorphism navbar and footer.

## Design System (`src/styles/global.css`)

### Design Fusion Strategy

| From MIUIX/HyperOS | From Liquid Glass |
|--------------------|-------------------|
| Squircle corners | Dual-layer architecture (functional + content) |
| Deep dark mode (#000000) | Glassmorphism (backdrop-filter) |
| Press scale feedback (Sink) | Edge highlight gradients |
| MiSans font | Fluid entrance animations |
| 14-level type scale | Restrained color, content penetrates UI |
| Layered container colors | Scroll edge effects (reserved) |

### Key CSS Classes

- `.glass-card` — Glassmorphism container: `backdrop-filter: blur(20px)`, semi-transparent bg/border, glow shadow
- `.glass-card:hover` — Enhanced bg/border opacity + soft glow
- `.glass-card.pressable` — Adds cursor:pointer; `:active` scales to 0.97 (MIUIX Sink)
- `.glass-highlight` — Use WITH `.glass-card`; adds `::before` pseudo-element with gradient border highlight via `mask-composite: exclude`
- `.squircle` / `.squircle-sm` / `.squircle-xl` — Border-radius: 24px / 12px / 32px
- `.tag` — Pill-shaped glass tag (999px radius)
- `.container` — Max-width 960px, centered
- `.section` — Vertical padding 64px
- `.animate-in` — `fade-in-up` 500ms with spring easing; `.animate-in-delay-{1-5}` adds 100–500ms stagger

### Design Token Highlights

- **Colors**: Pure black bg (#000000), MIUIX primary blue (#3482ff), 4-level text opacity (100%/80%/60%/40%)
- **Glass**: bg rgba(255,255,255,0.05), border rgba(255,255,255,0.10), blur 20px/40px
- **Glow**: 3 levels (subtle/soft/strong) using box-shadow with blue tint
- **Typography**: MiSans font family; 9 sizes from 11px (footnote2) to 32px (title1); 17sp base is larger than Material's 16sp for CJK readability
- **Animation**: Spring easing `cubic-bezier(0.22, 1, 0.36, 1)` from HyperOS physics; 3 durations (200/350/500ms)

### Body Background Effect

Two radial gradients on `body` create subtle blue ambient glow, simulating Liquid Glass light scatter:
```css
radial-gradient(ellipse at 50% 0%, rgba(52,130,255,0.08) 0%, transparent 60%)
radial-gradient(ellipse at 80% 80%, rgba(52,130,255,0.04) 0%, transparent 50%)
```

## Key Patterns

- `AvatarCard`, `SkillTags`, `about.astro` import directly from `site.config.ts`; `ProjectCard` uses Props instead
- Language colors in ProjectCard are a hardcoded `Record<string, string>` map (Go, JS, Dart, TS)
- All Chinese UI text is inline in templates (no i18n)
- Navbar uses `position: fixed` + `backdrop-filter: blur(40px)` (heavy blur) to implement the Liquid Glass functional layer floating above content
- MiSans loaded via jsDelivr CDN (Regular 400 + Semibold 600)
- Avatar is currently a placeholder SVG; replace by updating `siteConfig.profile.avatar`

## Known Issues

- **Node.js Windows assertion**: After `npm run build`, may see `Assertion failed: !(handle->flags & UV_HANDLE_CLOSING)` — this is a known Node.js/UV bug on Windows. Build output in `dist/` is unaffected.
