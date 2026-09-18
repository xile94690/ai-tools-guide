import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type Geo = {
  ip: string;
  countryCode: string;
  country: string;
  city: string;
  region: string;
  org: string;
  timezone: string;
  source: string;
};

function headerIp(request: Request): string {
  const h = request.headers;
  const forwarded = h.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "";
  return (
    h.get("cf-connecting-ip") ||
    h.get("x-real-ip") ||
    h.get("x-vercel-forwarded-for") ||
    ""
  );
}

function isPublicIp(ip: string): boolean {
  if (!ip) return false;
  const v = ip.replace(/^::ffff:/, "");
  if (v === "::1" || v === "127.0.0.1") return false;
  if (v.startsWith("10.") || v.startsWith("192.168.") || v.startsWith("127."))
    return false;
  const m = /^172\.(\d+)\./.exec(v);
  if (m) {
    const n = Number(m[1]);
    if (n >= 16 && n <= 31) return false;
  }
  return true;
}

async function fetchJson(url: string, ms = 3500): Promise<Record<string, unknown>> {
  const r = await fetch(url, {
    cache: "no-store",
    headers: { accept: "application/json" },
    signal: AbortSignal.timeout(ms),
  });
  if (!r.ok) throw new Error(`http ${r.status}`);
  return (await r.json()) as Record<string, unknown>;
}

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function fromIpsb(j: Record<string, unknown>, source: string): Geo {
  const ip = str(j.ip);
  if (!ip) throw new Error("no ip");
  return {
    ip,
    countryCode: str(j.country_code),
    country: str(j.country),
    city: str(j.city),
    region: str(j.region) || str(j.region_name),
    org: str(j.isp) || str(j.organization),
    timezone: str(j.timezone),
    source,
  };
}

function fromIpwho(j: Record<string, unknown>): Geo {
  if (j.success === false || !j.ip) throw new Error("ipwho");
  const conn = (j.connection as Record<string, unknown> | undefined) ?? {};
  const tz =
    typeof j.timezone === "object" && j.timezone
      ? str((j.timezone as Record<string, unknown>).id)
      : str(j.timezone);
  return {
    ip: str(j.ip),
    countryCode: str(j.country_code),
    country: str(j.country),
    city: str(j.city),
    region: str(j.region),
    org: str(conn.isp) || str(conn.org),
    timezone: tz,
    source: "ipwho.is",
  };
}

async function lookupSelf(): Promise<Geo> {
  try {
    return fromIpsb(await fetchJson("https://api.ip.sb/geoip"), "ip.sb");
  } catch {
    return fromIpwho(await fetchJson("https://ipwho.is/"));
  }
}

async function lookupByIp(ip: string): Promise<Geo> {
  try {
    return fromIpsb(
      await fetchJson(`https://api.ip.sb/geoip/${encodeURIComponent(ip)}`),
      "ip.sb",
    );
  } catch {
    const j = await fetchJson(`https://ipwho.is/${encodeURIComponent(ip)}`);
    return fromIpwho(j);
  }
}

export async function GET(request: Request) {
  const started = Date.now();
  try {
    const seen = headerIp(request);
    const geo = isPublicIp(seen) ? await lookupByIp(seen) : await lookupSelf();
    return NextResponse.json(
      { ...geo, latencyMs: Date.now() - started },
      { headers: { "cache-control": "no-store" } },
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: true,
        message: err instanceof Error ? err.message : "lookup failed",
        latencyMs: Date.now() - started,
      },
      { status: 200, headers: { "cache-control": "no-store" } },
    );
  }
}
