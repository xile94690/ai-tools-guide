import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "public/shots/ads");
fs.mkdirSync(dir, { recursive: true });

function chrome(url, inner, footer) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" width="1200" height="760" font-family="-apple-system,'Helvetica Neue',Helvetica,Arial,sans-serif">
  <rect width="1200" height="760" fill="#f4f4f5"/>
  <rect x="40" y="40" width="1120" height="680" rx="16" fill="#fff" stroke="#e4e4e7"/>
  <path d="M56 40 h1088 a16 16 0 0 1 16 16 v28 H40 v-28 a16 16 0 0 1 16-16z" fill="#f4f4f5"/>
  <line x1="40" y1="84" x2="1160" y2="84" stroke="#e4e4e7"/>
  <circle cx="76" cy="62" r="7" fill="#ff5f57"/>
  <circle cx="98" cy="62" r="7" fill="#febc2e"/>
  <circle cx="120" cy="62" r="7" fill="#28c840"/>
  <rect x="340" y="48" width="520" height="28" rx="14" fill="#e4e4e7"/>
  <text x="600" y="67" text-anchor="middle" fill="#3f3f46" font-size="14">${esc(url)}</text>
  ${inner}
  <text x="1180" y="740" text-anchor="end" fill="#a1a1aa" font-size="13">${esc(footer)}</text>
</svg>`;
}

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function btn(x, y, w, h, label, dark = true, ring = false) {
  const fill = dark ? "#18181b" : "#fff";
  const stroke = dark ? "none" : "#d4d4d8";
  const color = dark ? "#fff" : "#18181b";
  const ringEl = ring
    ? `<rect x="${x - 4}" y="${y - 4}" width="${w + 8}" height="${h + 8}" rx="14" fill="none" stroke="#2563eb" stroke-width="3"/>`
    : "";
  return `${ringEl}<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 6}" text-anchor="middle" fill="${color}" font-size="16" font-weight="700">${esc(label)}</text>`;
}

function field(x, y, w, label) {
  return `<rect x="${x}" y="${y}" width="${w}" height="44" rx="8" fill="#fff" stroke="#e4e4e7"/>
  <text x="${x + 16}" y="${y + 28}" fill="#a1a1aa" font-size="15">${esc(label)}</text>`;
}

function card(x, y, w, h, title, sub, ring = false) {
  const ringEl = ring
    ? `<rect x="${x - 4}" y="${y - 4}" width="${w + 8}" height="${h + 8}" rx="16" fill="none" stroke="#2563eb" stroke-width="3"/>`
    : "";
  return `${ringEl}<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#fff" stroke="${ring ? "#2563eb" : "#e4e4e7"}"/>
  <text x="${x + 20}" y="${y + 36}" fill="#18181b" font-size="18" font-weight="700">${esc(title)}</text>
  <text x="${x + 20}" y="${y + 62}" fill="#71717a" font-size="14">${esc(sub)}</text>`;
}

const shots = {
  "vultr-1": chrome(
    "vultr.com",
    `<text x="80" y="140" fill="#007BFC" font-size="22" font-weight="800">Vultr</text>
     ${btn(980, 112, 140, 40, "Sign Up", true, true)}
     <text x="1050" y="175" text-anchor="middle" fill="#2563eb" font-size="13">从这里注册</text>
     <text x="600" y="360" text-anchor="middle" fill="#18181b" font-size="36" font-weight="800">Cloud Compute</text>
     <text x="600" y="410" text-anchor="middle" fill="#71717a" font-size="16">东京 / 新加坡 / 美西 都能开</text>`,
    "示意图 · 官网右上角 Sign Up",
  ),
  "vultr-2": chrome(
    "my.vultr.com/signup",
    `<text x="600" y="160" text-anchor="middle" fill="#18181b" font-size="26" font-weight="800">Create your account</text>
     ${field(400, 210, 400, "Email")}
     ${field(400, 270, 400, "Password")}
     ${btn(400, 340, 400, 48, "Create Account", true, true)}
     <text x="600" y="430" text-anchor="middle" fill="#71717a" font-size="14">用常用邮箱，后面要收验证信</text>`,
    "示意图 · 填邮箱注册",
  ),
  "vultr-3": chrome(
    "my.vultr.com/deploy",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Deploy Server</text>
     ${card(80, 180, 240, 90, "Tokyo", "Japan · 推荐", true)}
     ${card(340, 180, 240, 90, "Singapore", "Asia")}
     ${card(600, 180, 240, 90, "Los Angeles", "US West")}
     ${card(80, 300, 340, 110, "Cloud Compute", "1 vCPU · 1 GB · $5/mo", true)}
     ${card(440, 300, 340, 110, "High Frequency", "更快，更贵")}
     ${btn(80, 450, 220, 48, "Deploy Now", true, true)}`,
    "示意图 · 选机房和套餐后 Deploy",
  ),
  "vultr-4": chrome(
    "my.vultr.com/servers",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Products / Compute</text>
     <rect x="80" y="180" width="1040" height="160" rx="12" fill="#fff" stroke="#2563eb" stroke-width="2"/>
     <text x="110" y="230" fill="#18181b" font-size="18" font-weight="700">Tokyo · Cloud Compute</text>
     <text x="110" y="268" fill="#3f3f46" font-size="16">IP  45.32.xx.xx</text>
     <text x="110" y="304" fill="#71717a" font-size="14">Running · root 密码在邮件和面板里</text>
     <text x="80" y="390" fill="#2563eb" font-size="14">开通成功：复制 IP，用 SSH 登录即可</text>`,
    "示意图 · 开通成功后复制 IP",
  ),
  "do-1": chrome(
    "digitalocean.com",
    `<text x="80" y="140" fill="#0069ff" font-size="22" font-weight="800">DigitalOcean</text>
     ${btn(960, 112, 160, 40, "Sign up", true, true)}
     <text x="600" y="340" text-anchor="middle" fill="#18181b" font-size="34" font-weight="800">Simple cloud for developers</text>
     <text x="600" y="390" text-anchor="middle" fill="#71717a" font-size="16">Droplet = 一台云服务器</text>`,
    "示意图 · 点 Sign up",
  ),
  "do-2": chrome(
    "cloud.digitalocean.com/registrations/new",
    `<text x="600" y="180" text-anchor="middle" fill="#18181b" font-size="26" font-weight="800">Sign up</text>
     ${field(400, 230, 400, "Email")}
     ${btn(400, 300, 400, 48, "Sign up with email", true, true)}
     ${btn(400, 368, 400, 48, "Continue with Google", false)}
     <text x="600" y="460" text-anchor="middle" fill="#71717a" font-size="14">邮箱验证通过后才能建 Droplet</text>`,
    "示意图 · 邮箱或 Google 注册",
  ),
  "do-3": chrome(
    "cloud.digitalocean.com/droplets/new",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Create Droplets</text>
     ${card(80, 180, 250, 90, "Singapore", "推荐亚太", true)}
     ${card(350, 180, 250, 90, "New York", "US")}
     ${card(80, 300, 340, 110, "Basic $6/mo", "1 GB RAM · 1 vCPU", true)}
     ${btn(80, 450, 240, 48, "Create Droplet", true, true)}`,
    "示意图 · 选新加坡 + Basic 套餐",
  ),
  "do-4": chrome(
    "cloud.digitalocean.com/droplets",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Droplets</text>
     <rect x="80" y="180" width="1040" height="150" rx="12" fill="#fff" stroke="#2563eb" stroke-width="2"/>
     <text x="110" y="235" fill="#18181b" font-size="18" font-weight="700">ubuntu-s-1vcpu-sgp1</text>
     <text x="110" y="275" fill="#3f3f46" font-size="16">IP  159.89.xx.xx · Active</text>
     <text x="80" y="380" fill="#2563eb" font-size="14">点进这台机器，复制 IP 和 root 密码邮件</text>`,
    "示意图 · 创建成功后复制 IP",
  ),
  "racknerd-1": chrome(
    "racknerd.com/kvm-vps",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">KVM VPS Specials</text>
     ${card(80, 190, 320, 140, "$11.29 / 年", "1核 1G · 美国机房", true)}
     ${card(420, 190, 320, 140, "$18.29 / 年", "1核 2G")}
     ${card(760, 190, 320, 140, "$32.49 / 年", "2核 3.5G")}
     <text x="80" y="380" fill="#2563eb" font-size="14">年付特价页：点 Order 进入购物车</text>`,
    "示意图 · 选一个年付套餐",
  ),
  "racknerd-2": chrome(
    "my.racknerd.com/cart.php",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Configure</text>
     ${card(80, 180, 500, 120, "Hostname", "随便填，如 vps1", true)}
     ${card(600, 180, 500, 120, "OS", "Ubuntu 24.04 推荐")}
     ${btn(80, 340, 220, 48, "Continue", true, true)}`,
    "示意图 · 选系统和主机名",
  ),
  "racknerd-3": chrome(
    "my.racknerd.com/cart.php?a=checkout",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Checkout</text>
     ${field(80, 190, 480, "Email")}
     ${field(80, 250, 480, "Password")}
     ${card(600, 190, 500, 160, "Pay", "PayPal / 信用卡 / 加密货币")}
     ${btn(80, 340, 240, 48, "Complete Order", true, true)}`,
    "示意图 · 注册并付款",
  ),
  "racknerd-4": chrome(
    "my.racknerd.com/clientarea.php",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Services</text>
     <rect x="80" y="180" width="1040" height="150" rx="12" fill="#fff" stroke="#2563eb" stroke-width="2"/>
     <text x="110" y="235" fill="#18181b" font-size="18" font-weight="700">KVM VPS · Active</text>
     <text x="110" y="275" fill="#3f3f46" font-size="16">IP / 密码在邮件和服务详情里</text>
     <text x="80" y="380" fill="#2563eb" font-size="14">点进服务 → View Details 复制 IP</text>`,
    "示意图 · 客户区查看已开通的 VPS",
  ),
  "bwh-1": chrome(
    "bandwagonhost.com/vps-hosting.php",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">搬瓦工 BandwagonHost</text>
     ${card(80, 190, 340, 150, "KVM 基础", "约 $49.99/年", true)}
     ${card(440, 190, 340, 150, "CN2 GIA-E", "线路更好，更贵")}
     ${card(800, 190, 300, 150, "香港 / 东京", "亚太低延迟")}
     <text x="80" y="390" fill="#2563eb" font-size="14">点套餐上的 Order 加入购物车</text>`,
    "示意图 · 选 KVM 套餐下单",
  ),
  "bwh-2": chrome(
    "bwh88.net/cart.php",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Review & Checkout</text>
     ${card(80, 180, 1040, 100, "Cart", "KVM 1GB · 1 年")}
     ${card(80, 300, 500, 120, "Location", "可在下单后到 KiwiVM 换机房")}
     ${btn(80, 450, 220, 48, "Checkout", true, true)}`,
    "示意图 · 确认购物车后结账",
  ),
  "bwh-3": chrome(
    "bwh88.net/cart.php?a=checkout",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Checkout</text>
     ${field(80, 190, 500, "Email")}
     ${field(80, 250, 500, "Password")}
     ${card(620, 190, 480, 160, "Payment", "支付宝 / PayPal / 卡")}
     ${btn(80, 340, 240, 48, "Complete Order", true, true)}`,
    "示意图 · 填账号并付款",
  ),
  "bwh-4": chrome(
    "bwh88.net/clientarea.php",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Services → KiwiVM</text>
     <rect x="80" y="180" width="1040" height="160" rx="12" fill="#fff" stroke="#2563eb" stroke-width="2"/>
     <text x="110" y="235" fill="#18181b" font-size="18" font-weight="700">KiwiVM Control Panel</text>
     <text x="110" y="275" fill="#3f3f46" font-size="16">Main IP / SSH 密码 / 换机房</text>
     <text x="80" y="390" fill="#2563eb" font-size="14">点 KiwiVM 进去复制 IP，用 SSH 登录</text>`,
    "示意图 · 用 KiwiVM 面板拿到 IP",
  ),
  "nord-1": chrome(
    "nordvpn.com",
    `<text x="80" y="140" fill="#4687FF" font-size="22" font-weight="800">NordVPN</text>
     ${btn(920, 112, 200, 40, "Get NordVPN", true, true)}
     <text x="600" y="340" text-anchor="middle" fill="#18181b" font-size="34" font-weight="800">Online security starts here</text>
     <text x="600" y="390" text-anchor="middle" fill="#71717a" font-size="16">品牌 VPN，装 App 后一键连接</text>`,
    "示意图 · 点 Get NordVPN",
  ),
  "nord-2": chrome(
    "nordvpn.com/pricing",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Choose a plan</text>
     ${card(80, 190, 330, 180, "1 month", "按月，最贵")}
     ${card(430, 190, 330, 180, "1 year", "常用")}
     ${card(780, 190, 330, 180, "2 years", "最划算", true)}
     ${btn(780, 400, 200, 48, "Continue", true, true)}`,
    "示意图 · 选套餐（两年通常最便宜）",
  ),
  "nord-3": chrome(
    "nordaccount.com/checkout",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Create account & pay</text>
     ${field(80, 200, 500, "Email")}
     ${field(80, 260, 500, "Password")}
     ${card(620, 200, 500, 160, "Card / PayPal", "境外卡或 PayPal")}
     ${btn(80, 350, 240, 48, "Pay now", true, true)}`,
    "示意图 · 注册并付款",
  ),
  "nord-4": chrome(
    "nordvpn.com/download",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Download apps</text>
     ${btn(80, 200, 240, 56, "Windows", true, true)}
     ${btn(340, 200, 240, 56, "macOS", false)}
     ${btn(600, 200, 240, 56, "iOS / Android", false)}
     <text x="80" y="320" fill="#3f3f46" font-size="16">安装后用刚才的邮箱登录，点 Quick Connect</text>
     <rect x="80" y="360" width="420" height="80" rx="12" fill="#1d4ed8"/>
     <text x="290" y="408" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">Quick Connect</text>`,
    "示意图 · 装官方 App 后一键连接",
  ),
  "surf-1": chrome(
    "surfshark.com",
    `<text x="80" y="140" fill="#0f766e" font-size="22" font-weight="800">Surfshark</text>
     ${btn(940, 112, 180, 40, "Get Surfshark", true, true)}
     <text x="600" y="340" text-anchor="middle" fill="#18181b" font-size="32" font-weight="800">VPN for unlimited devices</text>
     <text x="600" y="390" text-anchor="middle" fill="#71717a" font-size="16">一个账号不限设备数</text>`,
    "示意图 · 点 Get Surfshark",
  ),
  "surf-2": chrome(
    "surfshark.com/pricing",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Pick a plan</text>
     ${card(80, 190, 340, 180, "Monthly", "灵活")}
     ${card(440, 190, 340, 180, "1 year", "常用")}
     ${card(800, 190, 320, 180, "2 years", "最划算", true)}
     ${btn(800, 400, 200, 48, "Get deal", true, true)}`,
    "示意图 · 选订阅时长",
  ),
  "surf-3": chrome(
    "surfshark.com/checkout",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Account & payment</text>
     ${field(80, 200, 500, "Email")}
     ${field(80, 260, 500, "Password")}
     ${card(620, 200, 500, 160, "PayPal / Card", "按提示付款")}
     ${btn(80, 350, 240, 48, "Subscribe", true, true)}`,
    "示意图 · 创建账号并付款",
  ),
  "surf-4": chrome(
    "surfshark.com/download",
    `<text x="80" y="140" fill="#18181b" font-size="22" font-weight="800">Install Surfshark</text>
     ${btn(80, 200, 240, 56, "Windows", true, true)}
     ${btn(340, 200, 240, 56, "macOS", false)}
     ${btn(600, 200, 240, 56, "Mobile", false)}
     <text x="80" y="320" fill="#3f3f46" font-size="16">登录同一邮箱，打开开关即可连接</text>
     <rect x="80" y="360" width="280" height="72" rx="36" fill="#0f766e"/>
     <text x="220" y="404" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">ON</text>`,
    "示意图 · 装 App 后打开连接",
  ),
};

for (const [name, xml] of Object.entries(shots)) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), xml);
}
console.log("wrote", Object.keys(shots).length, "svgs");
