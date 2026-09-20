/**
 * 左右侧栏正规联盟位（境外 VPS + 品牌 VPN）。
 *
 * 提成：把各厂后台生成的完整联盟链接填进 affiliateHrefs。
 * 空着则跳到官网产品页，能买但没有你的佣金。
 *
 * 申请：
 * - Vultr         https://www.vultr.com/affiliates/
 * - 搬瓦工        https://bandwagonhost.com/affiliates-info.php
 * - DigitalOcean  https://www.digitalocean.com/affiliates
 * - RackNerd      https://www.racknerd.com/ （后台 Affiliates）
 * - NordVPN       https://nordvpn.com/affiliates/
 * - Surfshark     https://surfshark.com/affiliate
 */
import { adGuides, type AdGuideStep } from "./ads-guide";

export const affiliateHrefs = {
  vultr: process.env.NEXT_PUBLIC_AD_VULTR_HREF?.trim() || "",
  bandwagon: process.env.NEXT_PUBLIC_AD_BWH_HREF?.trim() || "",
  digitalocean: process.env.NEXT_PUBLIC_AD_DO_HREF?.trim() || "",
  racknerd: process.env.NEXT_PUBLIC_AD_RACKNERD_HREF?.trim() || "",
  nordvpn: process.env.NEXT_PUBLIC_AD_NORD_HREF?.trim() || "",
  surfshark: process.env.NEXT_PUBLIC_AD_SURFSHARK_HREF?.trim() || "",
};

export type AdKind = "vps" | "vpn";
export type AdTheme =
  | "vultr"
  | "bwh"
  | "do"
  | "racknerd"
  | "nord"
  | "surfshark";

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
  guide: AdGuideStep[];
};

const PRODUCT_PAGES: Record<keyof typeof affiliateHrefs, string> = {
  vultr: "https://www.vultr.com/products/cloud-compute/",
  bandwagon: "https://bandwagonhost.com/vps-hosting.php",
  digitalocean: "https://www.digitalocean.com/pricing",
  racknerd: "https://www.racknerd.com/vps",
  nordvpn: "https://nordvpn.com/",
  surfshark: "https://surfshark.com/",
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
    id: "digitalocean",
    theme: "do",
    kind: "vps",
    nameZh: "DigitalOcean",
    nameEn: "DigitalOcean",
    href: hrefFor("digitalocean"),
    taglineZh: "开发者常用云主机",
    taglineEn: "Cloud for developers",
    ctaZh: "去开通",
    ctaEn: "Get VPS",
    guide: adGuides.digitalocean,
  },
  {
    id: "racknerd",
    theme: "racknerd",
    kind: "vps",
    nameZh: "RackNerd",
    nameEn: "RackNerd",
    href: hrefFor("racknerd"),
    taglineZh: "美国便宜年付 VPS",
    taglineEn: "Budget US yearly VPS",
    ctaZh: "去开通",
    ctaEn: "Get VPS",
    guide: adGuides.racknerd,
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
    id: "nordvpn",
    theme: "nord",
    kind: "vpn",
    nameZh: "NordVPN",
    nameEn: "NordVPN",
    href: hrefFor("nordvpn"),
    taglineZh: "品牌 VPN 订阅",
    taglineEn: "Brand VPN subscription",
    ctaZh: "去订阅",
    ctaEn: "Subscribe",
    guide: adGuides.nordvpn,
  },
  {
    id: "surfshark",
    theme: "surfshark",
    kind: "vpn",
    nameZh: "Surfshark",
    nameEn: "Surfshark",
    href: hrefFor("surfshark"),
    taglineZh: "不限设备 VPN",
    taglineEn: "VPN, unlimited devices",
    ctaZh: "去订阅",
    ctaEn: "Subscribe",
    guide: adGuides.surfshark,
  },
];

export const adRails = {
  left: catalog.filter((s) =>
    s.id === "vultr" || s.id === "digitalocean" || s.id === "racknerd",
  ),
  right: catalog.filter((s) =>
    s.id === "bandwagon" || s.id === "nordvpn" || s.id === "surfshark",
  ),
};
