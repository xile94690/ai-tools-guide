/**
 * 左右侧栏正规联盟位（境外 VPS + 机场）。
 *
 * 提成：把各厂后台生成的完整联盟链接填进 affiliateHrefs。
 * 空着则跳到官网产品页，能买但没有你的佣金。
 *
 * 申请：
 * - Vultr         https://www.vultr.com/affiliates/
 * - 搬瓦工        https://bandwagonhost.com/affiliates-info.php
 * - 蓝天云        https://lty02.com/ （注册后后台生成邀请码，替换 LTY_INVITE_CODE）
 * - FlyBit        https://www.52fb.shop/ （同上，替换 FLYBIT_INVITE_CODE）
 */
import { adGuides, type AdGuideStep } from "./ads-guide";

/** 机场邀请码：换成自己后台的邀请码，推广才会记到你名下。 */
const LTY_INVITE_CODE = "nSYgUWH9";
const LTY_SITE = "https://lty02.com";
const ltyInviteHref = `${LTY_SITE}/#/register?code=${LTY_INVITE_CODE}`;

const FLYBIT_INVITE_CODE = "6CWRM6n1";
const FLYBIT_SITE = "https://www.52fb.shop";
const flybitInviteHref = `${FLYBIT_SITE}/#/register?code=${FLYBIT_INVITE_CODE}`;

export const affiliateHrefs = {
  vultr: process.env.NEXT_PUBLIC_AD_VULTR_HREF?.trim() || "",
  bandwagon: process.env.NEXT_PUBLIC_AD_BWH_HREF?.trim() || "",
  lty: process.env.NEXT_PUBLIC_AD_LTY_HREF?.trim() || ltyInviteHref,
  flybit: process.env.NEXT_PUBLIC_AD_FLYBIT_HREF?.trim() || flybitInviteHref,
};

export type AdKind = "vps" | "vpn" | "proxy";
export type AdTheme = "vultr" | "bwh" | "lty" | "flybit";

export type AdSlot = {
  id: keyof typeof affiliateHrefs;
  theme: AdTheme;
  kind: AdKind;
  nameZh: string;
  nameEn: string;
  href: string;
  taglineZh: string;
  taglineEn: string;
  ctaZh: string;
  ctaEn: string;
  /** 分步开通引导。留空则卡片直接跳转 href，不弹层。 */
  guide?: AdGuideStep[];
  /** 点击后先弹「即将离开」中转页（机场类跑路/换域名风险高，默认加上）。 */
  gate?: boolean;
};

const PRODUCT_PAGES: Record<keyof typeof affiliateHrefs, string> = {
  vultr: "https://www.vultr.com/products/cloud-compute/",
  bandwagon: "https://bandwagonhost.com/vps-hosting.php",
  lty: `${LTY_SITE}/`,
  flybit: `${FLYBIT_SITE}/`,
};

function hrefFor(id: keyof typeof affiliateHrefs): string {
  return affiliateHrefs[id] || PRODUCT_PAGES[id];
}

const catalog: AdSlot[] = [
  {
    id: "vultr",
    theme: "vultr",
    kind: "vps",
    nameZh: "Vultr",
    nameEn: "Vultr",
    href: hrefFor("vultr"),
    taglineZh: "东京 / 新加坡 VPS",
    taglineEn: "VPS in Tokyo and Singapore",
    ctaZh: "去开通",
    ctaEn: "Get VPS",
    guide: adGuides.vultr,
  },
  {
    id: "bandwagon",
    theme: "bwh",
    kind: "vps",
    nameZh: "搬瓦工",
    nameEn: "Bandwagon",
    href: hrefFor("bandwagon"),
    taglineZh: "香港 / 美西 VPS",
    taglineEn: "VPS in HK and US West",
    ctaZh: "去开通",
    ctaEn: "Get VPS",
    guide: adGuides.bandwagon,
  },
  {
    id: "lty",
    theme: "lty",
    kind: "proxy",
    nameZh: "蓝天云",
    nameEn: "Lantian Cloud",
    href: hrefFor("lty"),
    taglineZh: "多地区节点 · 全平台客户端",
    taglineEn: "Multi-region nodes, every platform",
    ctaZh: "去开通",
    ctaEn: "Get started",
    gate: true,
  },
  {
    id: "flybit",
    theme: "flybit",
    kind: "proxy",
    nameZh: "FlyBit",
    nameEn: "FlyBit",
    href: hrefFor("flybit"),
    taglineZh: "全球节点 · 一键订阅",
    taglineEn: "Global nodes, one-tap import",
    ctaZh: "去开通",
    ctaEn: "Get started",
    gate: true,
  },
];

const LEFT_ORDER: (keyof typeof affiliateHrefs)[] = ["lty", "vultr"];

const RIGHT_ORDER: (keyof typeof affiliateHrefs)[] = ["flybit", "bandwagon"];

const inOrder = (order: (keyof typeof affiliateHrefs)[]) =>
  order
    .map((id) => catalog.find((slot) => slot.id === id))
    .filter((slot): slot is AdSlot => Boolean(slot));

export const adRails = {
  left: inOrder(LEFT_ORDER),
  right: inOrder(RIGHT_ORDER),
};
