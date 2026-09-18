export type Region = "domestic" | "global" | "both";

export interface NetworkInfo {
  ip: string;
  countryCode: string;
  country: string;
  city: string;
  region: string;
  org: string;
  timezone: string;
  latencyMs: number;
  source: string;
  siteProbe?: "ok" | "timeout" | "fail";
  siteProbeMs?: number;
}

export type NetworkVerdict = "ok" | "warn" | "bad";

export function networkVerdict(
  toolRegion: Region,
  countryCode: string,
): NetworkVerdict {
  const code = countryCode.toUpperCase();
  const inCn = code === "CN";
  if (toolRegion === "global") return inCn ? "bad" : "ok";
  if (toolRegion === "domestic") return inCn ? "ok" : "warn";
  return "ok";
}

export function isNetworkEnvLabel(label: string): boolean {
  return /网络|network/i.test(label);
}

/** HEAD-request the site origin so the reader can test reachability in a terminal. */
export function networkCurlCommand(website: string): string {
  const raw = website.trim();
  try {
    const href = raw.includes("://") ? raw : `https://${raw}`;
    return `curl -I --max-time 10 ${new URL(href).origin}`;
  } catch {
    return `curl -I --max-time 10 ${raw}`;
  }
}
