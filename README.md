# AI 工具大全

中英双语的 AI 工具安装与使用教程站。面向新手：按分类浏览，点进详情看保姆级步骤（命令、预期输出、示意图、排错、费用）。

应用在 [`web/`](web/)。

## 本地运行

```bash
cd web
npm install
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)。中文首页就是 `/`，英文是 `/en`。

```bash
npm test          # 目录完整性、搜索、语言路径
npm run build     # 生产构建
```

## 语言路由

中文是默认语言，**URL 里没有语言前缀**；英文才加 `/en`。

| 页面 | 中文 | 英文 |
| --- | --- | --- |
| 首页 | `/` | `/en` |
| 工具 | `/tool/kimi` | `/en/tool/kimi` |
| 分类 | `/category/video` | `/en/category/video` |
| 搜索 | `/search?q=绘画` | `/en/search?q=绘画` |

旧链接 `/zh/...` 会 308 到不带前缀的地址。页头语言切换会留在当前页，并保留查询参数（例如搜索词）。

`<html lang>` 由当前语言决定：`zh-CN` / `en`。

## 内容从哪来

没有数据库。工具元数据、教程、界面文案都是 TypeScript：

- `web/src/lib/tools.ts` — 工具列表
- `web/src/lib/tutorials*.ts` — 保姆级教程
- `web/src/lib/i18n.ts` — 界面文案（中英 key 必须对齐）
- `web/public/icons/` — 图标
- `web/public/shots/` — 教程示意图

加一款工具的最短路径：

1. 在 `tools.ts` 追加一条（`slug`、分类、中英简介 / FAQ）
2. 在对应 `tutorials-batch-*.ts` 写 `{ zh, en }` 教程
3. 放 `public/icons/{slug}.png` 或 `.svg`（svg 的 slug 要写入 `toolIcon` 的集合）
4. 示意图放到 `public/shots/{slug}/`，教程里用 `kind: "shot"` 引用
5. 跑 `npm test`，确认每个工具都有教程和图标

新工具的占位图标 / 示意图可以用：

```bash
cd web && node scripts/gen-assets.mjs
```

（脚本里要补上 slug 和文案。）

## 分类

对话、绘画、视频、编程、办公、音频。顶栏和首页都能边输入边出结果，点条目进详情。搜索只匹配名称 / 标签 / 别名 / 分类。

详情页有相关工具和校对日期。能配 CC Switch 的 CLI 会标出来。步骤和价格以官网当前页为准。

## 技术

Next.js App Router、React、Tailwind CSS。`web/src/proxy.ts` 负责默认语言的 rewrite / 去前缀 redirect。`sitemap.xml` / `robots.txt` 已生成；公开域名用环境变量 `NEXT_PUBLIC_SITE_URL`。

## 免费部署到 Vercel

这个站点适合 Vercel 免费档（Hobby）：语言路由和「检测当前网络」的 API 都能跑。GitHub Pages 只适合纯静态站，不适合当前项目。

### 1. 把代码推到 GitHub

需要一个 GitHub 账号。在 GitHub 新建**公开**仓库，然后在本机项目根目录：

```bash
cd "/Users/liao/Desktop/Ai工具"
git add .
git commit -m "Initial site"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

（如果还没有 `git commit` 过，先执行上面的 `add` / `commit`。）

### 2. 用 GitHub 登录 Vercel

1. 打开 [https://vercel.com/signup](https://vercel.com/signup)
2. 选 **Continue with GitHub**，授权访问仓库
3. 登录后点 **Add New… → Project**，选刚推上去的仓库，**Import**

### 3. 导入时改这一项

应用在子目录 `web/` 里，必须设置：

| 项 | 值 |
|---|---|
| **Root Directory** | `web` |
| Framework Preset | Next.js（一般会自动认出） |
| Build Command | `npm run build`（默认即可） |
| Install Command | `npm install`（默认即可） |

先不必填环境变量，点 **Deploy**。第一次大约 1～2 分钟。

成功后会得到类似：

`https://仓库名.vercel.app`

用这个地址就能打开站点。

### 4. 补上正式网址（建议）

部署完成后再加环境变量，让 sitemap / 分享卡片用对域名：

1. Vercel 项目 → **Settings → Environment Variables**
2. 添加 `NEXT_PUBLIC_SITE_URL` = `https://你的项目.vercel.app`（不要末尾斜杠）
3. **Deployments** 里对最新一次点 **Redeploy**

以后每次 `git push`，Vercel 会自动再部署。

### 注意

- 免费档给个人、非高流量站点一般够用；把仓库保持公开即可。
- Vercel 服务器在海外，国内有时会偏慢，这是正常现象。
- 不要把 API Key、密码写进代码或 Vercel 环境变量以外的地方；本项目目前不需要密钥。
