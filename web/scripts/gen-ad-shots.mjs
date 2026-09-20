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
};

for (const [name, xml] of Object.entries(shots)) {
  fs.writeFileSync(path.join(dir, `${name}.svg`), xml);
}
console.log("wrote", Object.keys(shots).length, "svgs");
