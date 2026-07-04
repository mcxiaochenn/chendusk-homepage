# 辰渊尘 ChenDusk — 个人主页

[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro)](https://astro.build/)
[![License](https://img.shields.io/badge/License-MIT-3482ff)](./LICENSE)

我的个人主页，使用 [Astro](https://astro.build/) 构建，融合 HyperOS/MIUIX 与 iOS 26 Liquid Glass 设计风格。

🔗 **在线访问**: [mcxiaochen.top](https://mcxiaochen.top/)

## 技术栈

- **框架**: Astro 7.x (静态站点生成)
- **语言**: TypeScript
- **样式**: 纯 CSS，CSS 自定义属性设计令牌
- **字体**: MiSans (via jsDelivr CDN)
- **设计系统**: HyperOS/MIUIX × Liquid Glass 融合风格

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:4321)
npm run dev

# 构建静态站点 (输出到 dist/)
npm run build

# 预览构建结果
npm run preview
```

## 自定义内容

所有站点内容集中在 `src/site.config.ts`，修改此文件即可更新全站，无需改动页面代码：

| 配置项 | 说明 |
|--------|------|
| `profile` | 个人信息（头像、简介、所在地、学校等） |
| `socials` | 社交链接（GitHub、Bilibili、Blog 等） |
| `nav` | 导航栏链接 |
| `skills` | 技能标签 |
| `projects` | 开源项目列表 |
| `about` | 关于页内容（自我介绍、兴趣、统计数据） |
| `footer` | 页脚版权信息 |

## 项目结构

```
src/
├── site.config.ts          # 全局内容配置
├── styles/global.css       # CSS 设计系统（设计令牌 + 工具类）
├── layouts/BaseLayout.astro # 基础布局（导航栏 + 页脚）
├── components/
│   ├── AvatarCard.astro    # 头像卡片
│   ├── SkillTags.astro     # 技能标签
│   └── ProjectCard.astro   # 项目卡片
└── pages/
    ├── index.astro         # 首页
    ├── projects.astro      # 项目页
    └── about.astro         # 关于页
```

## 许可证

本项目基于 [MIT 许可证](./LICENSE) 开源。

© 2026 辰渊尘 ChenDusk
