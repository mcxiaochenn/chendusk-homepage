/**
 * 站点全局配置 — 所有页面内容均从此文件读取
 * 修改此文件即可更新整个站点，无需改动页面代码
 */

export const siteConfig = {
  /* ===== 基本信息 ===== */
  name: '辰渊尘笔记-个人主页',
  title: '辰渊尘 | ChenDusk',
  description: '05后开发者，喜欢什么就做什么',
  lang: 'zh-CN',

  /* ===== 个人信息 ===== */
  profile: {
    displayName: '辰渊尘',
    englishName: 'ChenDusk',
    nicknames: '小尘 / 阿尘 / 尘 / 尘桑',
    pronouns: 'he/him',
    mbti: 'INTP-T',
    birthYear: 2009,
    avatar: '/avatar.webp',
    bio: '05后 · 半吊子搞机玩家 · 喜欢什么就做什么',
    motto: '有志不在年高，无志空活百岁',
    location: '中国 · 浙江嘉兴',
    school: '平湖技师学院',
    email: 'mcxiaochenn.yyds@gmail.com',
    emailAlt: 'mcxiaochenn_yyds@163.com',
  },

  /* ===== 社交链接 ===== */
  socials: [
    { name: 'GitHub', url: 'https://github.com/mcxiaochenn', icon: 'github' },
    { name: 'Bilibili', url: 'https://space.bilibili.com/123757127', icon: 'bilibili' },
    { name: 'Blog', url: 'https://blog.mcxiaochen.top/', icon: 'blog' },
    { name: '酷安', url: 'https://www.coolapk.com/u/21508887', icon: 'coolapk' },
    { name: 'Email', url: 'mailto:mcxiaochenn.yyds@gmail.com', icon: 'email' },
    { name: 'QQ群', url: 'https://qm.qq.com/q/1021796828', icon: 'qq' },
  ],

  /* ===== 导航栏 ===== */
  nav: [
    { label: '首页', href: '/' },
    { label: '项目', href: '/projects' },
    { label: '关于', href: '/about' },
  ],

  /* ===== 技能标签 ===== */
  skills: [
    'Go', 'JavaScript', 'Dart', 'TypeScript', 'PHP',
    'Astro', 'Hexo', 'Flutter', 'Clash/mihomo',
    'Arch Linux', 'Hyprland', 'Docker', 'Nginx',
    '跨平台开发', '网络代理', 'CI/CD', 'iOS 侧载',
    'Twikoo', 'Umami', 'MCSManager',
  ],

  /* ===== 项目展示 ===== */
  projects: [
    {
      name: 'clash-rules-cn',
      description: 'Clash 分流规则聚合系统，自动从多个上游源获取规则，合并去重后发布为 YAML rule-provider 文件',
      url: 'https://github.com/mcxiaochenn/clash-rules-cn',
      language: 'Go',
      stars: 168,
    },
    {
      name: 'Clash_Override_Script_For_CN',
      description: 'mihomo 覆写脚本，基于 Loyalsoldier 规则集，支持按地区自动分组、AI 服务分流、广告过滤',
      url: 'https://github.com/mcxiaochenn/Clash_Override_Script_For_CN',
      language: 'JavaScript',
      stars: 1,
    },
    {
      name: 'myriad-monitor',
      description: '去中心化的跨平台系统监控面板，设备间 IP 直连，一端采集一端渲染',
      url: 'https://github.com/mcxiaochenn/myriad-monitor',
      language: 'Dart',
      stars: 0,
    },
  ],

  /* ===== 关于页面 ===== */
  about: {
    intro: [
      '大家好，我是辰渊尘（ChenDusk），也可以叫我小尘、阿尘、尘桑。2009年出生，浙江嘉兴平湖人，目前是一名职业类学校高二学生。',
      '我是一个半吊子个人开发者，编程纯属爱好。MBTI 是 INTP-T，大众前社恐，实则慢热，和熟人比较放得开。',
      '热爱折腾各种奇奇怪怪的东西，内容方向偏技术向和保姆级教程。座右铭：有志不在年高，无志空活百岁。',
    ],
    interests: [
      '手机搞机（深度玩机玩家）',
      '网络代理/分流工具开发',
      '技术教程写作（保姆级教程）',
      '开源工具开发',
      '骑车 & 旅行',
      '二次元（孤独摇滚、EVA、鬼灭之刃）',
      'GalGame / Minecraft / 鸣潮',
      '折腾 Linux（Arch Linux + Hyprland）',
    ],
    stats: {
      repos: 44,
      stars: 168,
      contributions: 1271,
    },
    anime: ['孤独摇滚', '国家队 (DARLING in the FRANXX)', '晨曦公主', 'EVA', '鬼灭之刃'],
    games: ['GalGame', 'Minecraft', 'CS', '明日方舟：终末地', '鸣潮'],
    os: 'Arch Linux (曾用) / Windows (当前)',
    blog: {
      framework: 'Astro v7.0.0 (Mizuki theme)',
      comments: 'Twikoo',
      stats_tool: 'Umami',
      deploy: 'EdgeOne (主力) + Cloudflare / Netlify / Vercel',
      articles: 28,
      words: 18713,
    },
    domains: ['mcxiaochen.top (当前)', 'mcxiaochen.icu (已弃用)', 'shuiarun.com (已作废)'],
  },

  /* ===== 页脚 ===== */
  footer: {
    copyright: '© 2026 辰渊尘 ChenDusk',
    poweredBy: 'Powered by Astro',
  },
};
