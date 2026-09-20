export type AdGuideStep = {
  titleZh: string;
  titleEn: string;
  textZh: string;
  textEn: string;
  src: string;
  captionZh: string;
  captionEn: string;
};

export type AdGuideId = "vultr" | "bandwagon";

export const adGuides: Record<AdGuideId, AdGuideStep[]> = {
  vultr: [
    {
      titleZh: "打开官网，点 Sign Up",
      titleEn: "Open the site and click Sign Up",
      textZh: "打开 vultr.com。首页右侧就是注册框：填 Email、Password，勾选条款后点 **Create free account**。也可以用 GitHub / Google。",
      textEn: "Open vultr.com. The homepage has a signup form on the right: email, password, then **Create free account**. GitHub/Google also work.",
      src: "/shots/ads/vultr-1.png",
      captionZh: "Vultr 首页右侧就是注册框（官网实拍）",
      captionEn: "Vultr homepage signup form (official site)",
    },
    {
      titleZh: "登录控制台",
      titleEn: "Log in to the console",
      textZh: "打开 console.vultr.com（或 my.vultr.com），用刚才的邮箱点 **Log in**。登录后进入 Instances 列表。",
      textEn: "Open console.vultr.com, then **Log in** with the same email. You land on the Instances list.",
      src: "/shots/ads/vultr-2.png",
      captionZh: "控制台登录页（官网实拍）",
      captionEn: "Console login (official site)",
    },
    {
      titleZh: "点 Deploy Server / Create Instance",
      titleEn: "Click Deploy Server / Create Instance",
      textZh: "列表是空的也正常。点蓝色 **Deploy Server +**，或右上角 **Create Instance +**。不要点下面 OpenClaw 广告那一行。",
      textEn: "An empty list is normal. Click blue **Deploy Server +** or **Create Instance +**. Ignore the OpenClaw promo.",
      src: "/shots/ads/vultr-3.png",
      captionZh: "登录后点 Deploy Server 开通机器（控制台实拍）",
      captionEn: "After login, click Deploy Server (console)",
    },
    {
      titleZh: "点 Shared CPU，选 $5 那档",
      titleEn: "Click Shared CPU, then the $5 plan",
      textZh: "新开通页默认是 **Dedicated CPU / VX1**，最便宜也大约四十美元，所以看不到 5 美元。点上面的 **Shared CPU**，左边再点 **Cloud Compute**。第一行 **vc2-1c-1gb** 就是 1 vCPU / 1GB / 25GB SSD / 1TB，**$5.00/mo**。机房选东京或新加坡。右侧 Automatic Backup 默认会多 $1，只要 5 美元就点 **Disable**。看清价格后点 **Configure**，下一步选系统再 Deploy。若提示该机房没货，换一个机房，或改选 **High Frequency** 的 1GB（约 $6/月）。",
      textEn: "Create Instance defaults to **Dedicated CPU / VX1** (about $40+/mo), so the $5 plan is hidden. Click **Shared CPU**, then **Cloud Compute**. The first row **vc2-1c-1gb** is 1 vCPU / 1GB / 25GB SSD / 1TB at **$5.00/mo**. Set Location to Tokyo or Singapore. Automatic Backup adds $1 — click **Disable** if you only want $5. Then **Configure**, pick an OS, and Deploy. If the plan is out of stock in that region, switch location or use **High Frequency** 1GB (~$6/mo).",
      src: "/shots/ads/vultr-4.png",
      captionZh: "Shared CPU → Cloud Compute → vc2-1c-1gb = $5/月（控制台实拍）",
      captionEn: "Shared CPU → Cloud Compute → vc2-1c-1gb = $5/mo (console)",
    },
  ],
  bandwagon: [
    {
      titleZh: "打开套餐页，选 KVM",
      titleEn: "Open the plan page and pick KVM",
      textZh: "打开搬瓦工 VPS 页面。新手先看 **KVM 基础年付**（价格以官网为准）。点套餐上的 **Order**。",
      textEn: "Open BandwagonHost VPS plans. Beginners usually start with a **KVM yearly** plan. Click **Order**.",
      src: "/shots/ads/bwh-1.png",
      captionZh: "选 KVM 套餐点 Order（官网实拍）",
      captionEn: "Order a KVM plan (official site)",
    },
    {
      titleZh: "确认购物车并结账",
      titleEn: "Review the cart and check out",
      textZh: "核对年限和套餐后点 **Checkout**。机房可以之后在 KiwiVM 里换。",
      textEn: "Confirm term and plan, then **Checkout**. Location can be changed later in KiwiVM.",
      src: "/shots/ads/bwh-2.png",
      captionZh: "购物车确认后 Checkout（官网实拍）",
      captionEn: "Checkout after reviewing the cart (official site)",
    },
    {
      titleZh: "注册并付款",
      titleEn: "Register and pay",
      textZh: "用邮箱注册账号。结账页可选支付宝 / PayPal / 卡（以当时页面为准）。点 **Complete Order**。",
      textEn: "Register with email. Pay with Alipay / PayPal / card as shown. **Complete Order**.",
      src: "/shots/ads/bwh-3.png",
      captionZh: "填邮箱并付款（官网实拍）",
      captionEn: "Email + payment (official site)",
    },
    {
      titleZh: "打开 KiwiVM 复制 IP",
      titleEn: "Open KiwiVM and copy the IP",
      textZh: "客户区进入刚买的服务，点 **KiwiVM**。这里有 Main IP、SSH 密码、换机房。用 `ssh root@IP` 登录。",
      textEn: "Open the service → **KiwiVM** for Main IP, SSH password, and location change. `ssh root@IP`.",
      src: "/shots/ads/bwh-4.png",
      captionZh: "KiwiVM 面板复制 IP（官网实拍）",
      captionEn: "Copy IP in KiwiVM (official site)",
    },
  ],
};
