export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh";

/** Catalog copy last reviewed (YYYY-MM-DD). */
export const catalogVerified = "2026-09-17";

export const isLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export const htmlLang = (locale: Locale) =>
  locale === "zh" ? "zh-CN" : "en";

export interface Category {
  id: string;
  zh: string;
  en: string;
  keywords: string[];
}

export const categories: Category[] = [
  {
    id: "chat",
    zh: "对话问答",
    en: "Chat & Q&A",
    keywords: ["对话", "聊天", "问答", "chat", "assistant", "llm"],
  },
  {
    id: "image",
    zh: "绘画设计",
    en: "Image & Design",
    keywords: ["绘画", "设计", "出图", "生图", "image", "art", "draw"],
  },
  {
    id: "video",
    zh: "视频生成",
    en: "Video",
    keywords: ["视频", "短片", "video", "clip", "film"],
  },
  {
    id: "code",
    zh: "编程开发",
    en: "Coding",
    keywords: ["编程", "代码", "开发", "code", "coding", "ide", "cli"],
  },
  {
    id: "office",
    zh: "办公效率",
    en: "Productivity",
    keywords: ["办公", "效率", "笔记", "会议", "ppt", "office", "docs", "notes"],
  },
  {
    id: "audio",
    zh: "音频音乐",
    en: "Audio & Music",
    keywords: ["音频", "音乐", "配音", "配乐", "audio", "music", "voice", "tts"],
  },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);
