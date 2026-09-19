/**
 * 左右侧栏境外 VPS 联盟位。
 *
 * 提成规则：必须换成你自己在厂商后台生成的联盟链接。
 * 现在若 href 为空，会跳到官网产品页，访客能买，但你没有佣金。
 *
 * 申请：
 * - Vultr  https://www.vultr.com/affiliates/
 *   链接形如 https://www.vultr.com/?ref=你的ID
 * - 搬瓦工 https://bandwagonhost.com/affiliates-info.php
 *   链接形如 https://bandwagonhost.com/aff.php?aff=你的ID
 */
export const affiliateHrefs = {
  vultr: process.env.NEXT_PUBLIC_AD_VULTR_HREF?.trim() || "",
  bandwagon: process.env.NEXT_PUBLIC_AD_BWH_HREF?.trim() || "",
};

export type AdSlot = {
  id: "vultr" | "bandwagon";
  name: string;
  href: string;
  taglineZh: string;
  taglineEn: string;
  ctaZh: string;
  ctaEn: string;
};

const PRODUCT_PAGES = {
  vultr: "https://www.vultr.com/products/cloud-compute/",
  bandwagon: "https://bandwagonhost.com/vps-hosting.php",
} as const;

function hrefFor(
  id: keyof typeof affiliateHrefs,
): string {
  return affiliateHrefs[id] || PRODUCT_PAGES[id];
}

export const adSlots: { left: AdSlot; right: AdSlot } = {
  left: {
    id: "vultr",
    name: "Vultr",
    href: hrefFor("vultr"),
    taglineZh: "东京 / 新加坡 / 美西云服务器，按小时计费",
    taglineEn: "Cloud VPS in Tokyo, Singapore, and the US West",
    ctaZh: "开通境外服务器",
    ctaEn: "Get a cloud VPS",
  },
  right: {
    id: "bandwagon",
    name: "BandwagonHost",
    href: hrefFor("bandwagon"),
    taglineZh: "搬瓦工：香港 / 美西 VPS，华人常用线路",
    taglineEn: "BandwagonHost VPS in Hong Kong and the US West",
    ctaZh: "开通境外服务器",
    ctaEn: "Get a cloud VPS",
  },
};
