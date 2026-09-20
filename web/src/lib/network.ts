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
