# 技术漫记 — 辰渊尘个人主页

[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro)](https://astro.build/)
[![License](https://img.shields.io/badge/License-MIT-3482ff)](./LICENSE)

我的个人主页，使用 [Astro](https://astro.build/) 构建，融合 HyperOS/MIUIX 与 Liquid Glass 设计风格，配色采用 oklch 色系。

🔗 **在线访问**: [mcxiaochen.top](https://mcxiaochen.top/)

## 特性

- 🎨 **HyperOS × Liquid Glass 设计** — 毛玻璃、边缘高光、Squircle 圆角、按压反馈
- 🌗 **三档主题切换** — 自动 / 浅色 / 深色，跟随系统或手动选择
- 📱 **响应式布局** — 视口自适应宽度，移动端友好
- ⚡ **纯静态输出** — Astro SSG，零 JavaScript 框架运行时
- 🌐 **零 CDN 依赖** — 字体等资源全部本地自托管
- 🎂 **生日倒计时** — 首页实时显示距下个生日的天数
- 🚀 **自动化发版** — tag 触发 CI 自动构建并发布 GitHub Release

## 技术栈

- **框架**: Astro 7.x
- **语言**: TypeScript (strict mode)
- **样式**: 纯 CSS，oklch 色彩空间，CSS 自定义属性设计令牌
- **字体**: MiSans 本地自托管

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
npm run preview  # 预览构建结果
```

## 自定义内容

所有站点内容集中在 `src/site.config.ts`，修改此文件即可更新全站：

| 配置项 | 说明 |
|--------|------|
| `profile` | 个人信息（头像、简介、生日、所在地、学校等） |
| `socials` | 社交链接 |
| `nav` | 导航栏链接 |
| `skills` | 技能标签 |
| `projects` | 开源项目列表 |
| `footer` | 页脚版权信息 |

## 许可证

[MIT](./LICENSE) © 2026 辰渊尘（ChenDusk）
