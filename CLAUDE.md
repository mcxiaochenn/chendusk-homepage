# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ChenDusk (辰渊尘) 的个人主页，使用 Astro 7.x 构建。设计融合 HyperOS/MIUIX 与 Liquid Glass 风格，配色采用与博客 (blog.mcxiaochen.top) 同款 oklch 色系 (hue=170)。

## ⚠️ 铁律：禁止自行 Push

**除非用户在对话中明确说出"push"、"推送到远程"等指令，否则绝对不要执行 `git push`。** 这条规则没有任何例外——即使刚刚完成了大量修改、即使用户要求了 commit，也必须等用户主动发出 push 指令才能推送。

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production to ./dist/
npm run preview  # Preview production build locally
```

No test framework or linter is configured.

**TypeScript**: `tsconfig.json` extends `astro/tsconfigs/strict`.

## Network Proxy

如遇网络问题，临时使用代理（不写入全局配置）：
```bash
git -c http.proxy=http://127.0.0.1:7897 ...
HTTPS_PROXY=http://127.0.0.1:7897 curl ...
```

## Architecture

**Content-driven**: 所有站点内容集中在 `src/site.config.ts`，修改此文件即可更新全站。

**Dependency graph**:
```
site.config.ts ← imported by all pages and components
    ├── BaseLayout.astro ← imports site.config + global.css
    │       ↑ wrapped by all pages
    │       ├── index.astro ← inline hero + ProjectCard
    │       ├── projects.astro ← ProjectCard
    │       └── about.astro
    └── ProjectCard.astro ← pure Props, does NOT import siteConfig
```

**Pages**:
- `index.astro` — 双栏 Hero（左文右头像面板）+ 项目展示网格。参考 liushen.fun 布局
- `projects.astro` — 项目列表
- `about.astro` — 个人介绍、统计、兴趣、技能、联系方式

**Components**:
- `ProjectCard.astro` — 虚线边框卡片，接收 Props (name, description, url, language, stars, delay)；`langColors` 硬编码映射
- `AvatarCard.astro` / `SkillTags.astro` — 旧组件，当前未被首页使用

**Layout**: `BaseLayout.astro` — 固定导航栏 + 页脚 + 主题切换按钮 + 防闪烁脚本

## Theme System

三档主题切换（auto / light / dark）：
- **Auto**（默认）：跟随系统 `prefers-color-scheme`
- **手动选择**：存入 `localStorage('theme')`，优先级高于系统设置
- **防闪烁**：`<head>` 内 `<script is:inline>` 在渲染前同步设置 `.dark` 类
- 导航栏右侧太阳/月亮图标切换，CSS 变量驱动动画

## Design System (`src/styles/global.css`)

### Color Tokens (oklch, hue=170)

CSS 变量通过 `:root` / `:root.dark` 双套定义：

| Token | Light | Dark | 用途 |
|-------|-------|------|------|
| `--primary` | oklch(0.70 0.09 h) | oklch(0.75 0.09 h) | 主色 |
| `--page-bg` | oklch(0.95 0.01 h) | oklch(0.14 0.014 h) | 页面背景 |
| `--text-color` | oklch(0.25 0.02 h) | oklch(0.90 0.01 h) | 主文字 |
| `--text-color-75/50/25` | — | — | 75%/50%/25% 不透明度文字 |
| `--glass-bg` | rgba(255,255,255,0.60) | rgba(255,255,255,0.05) | 毛玻璃背景 |
| `--line-divider` | rgba(0,0,0,0.08) | rgba(255,255,255,0.08) | 分隔线 |

### Key CSS Classes

- `.glass-card` — 毛玻璃容器，hover 增强光晕
- `.glass-highlight` — 边缘高光渐变 `::before` 伪元素
- `.pressable` — MIUIX Sink 按压反馈 `scale(0.97)`
- `.animate-in` + `.animate-in-delay-{1-5}` — fade-in-up 入场动画

### Layout

- **Container**: `max-width: min(90vw, 1200px)` — 视口自适应
- **Font**: MiSans via jsDelivr CDN (Regular 400 + Semibold 600)
- **Background glow**: 3 个 oklch 色彩模糊圆，深色 8% / 浅色 25% 不透明度

## Key Patterns

- `ProjectCard` 使用虚线边框 + 毛玻璃（非旧版 glass-card）
- 首页 Hero 是内联双栏布局，不使用 AvatarCard/SkillTags 组件
- 导航图标使用 `<img src="/favicon.ico">`，非文字图标
- 页脚链接：作者 GitHub / Astro 官网 / xcTheme 首页 / ICP 备案号
- 面板宽度由 panel-info 文本内容决定，头像 `max-width: 320px` 同步
