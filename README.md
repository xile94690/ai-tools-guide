# AI 工具大全

中英双语的 AI 工具入门教程站点，面向第一次安装、第一次登录的使用者。按分类浏览，进入详情可查看套餐、环境说明、电脑端或命令行步骤，以及常见问题。

站点应用位于 [`web/`](web/)。

## 功能

- 中文为默认语言（`/`），英文使用 `/en` 前缀
- 按对话、绘画、视频、编程、办公、音频分类
- 首页即时搜索（名称、标签、别名、分类）
- 教程区分电脑端与命令行；支持 API Key 的 CLI 会说明如何配合 CC Switch
- 详情页提供相关工具与内容校对日期

文中的步骤、价格与套餐以各产品官网当前页面为准。

## 技术栈

Next.js（App Router）、React、Tailwind CSS。界面与教程正文均为 TypeScript 常量，无数据库。

## 本地开发

```bash
cd web
npm install
npm run dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

```bash
npm test
npm run build
```

## 路由

| 页面 | 中文 | 英文 |
| --- | --- | --- |
| 首页 | `/` | `/en` |
| 工具 | `/tool/{slug}` | `/en/tool/{slug}` |
| 分类 | `/category/{id}` | `/en/category/{id}` |

`/zh/...` 会重定向到无前缀地址。

## 目录

| 路径 | 说明 |
| --- | --- |
| `web/src/lib/tools.ts` | 工具元数据 |
| `web/src/lib/tutorials*.ts` | 教程正文 |
| `web/src/lib/i18n.ts` | 界面文案 |
| `web/public/icons/` | 图标 |
| `web/public/shots/` | 示意图 |

新增工具时：在 `tools.ts` 追加条目，编写对应教程，放入图标与示意图，然后执行 `npm test`。
