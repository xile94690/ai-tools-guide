import { describe, expect, it } from "vitest";
import { isNetworkEnvLabel, networkVerdict } from "./network";

describe("networkVerdict", () => {
  it("flags a China exit for tools that need a global network", () => {
    expect(networkVerdict("global", "CN")).toBe("bad");
    expect(networkVerdict("global", "US")).toBe("ok");
    expect(networkVerdict("global", "HK")).toBe("ok");
  });

  it("treats China-direct tools as fine on a CN exit", () => {
    expect(networkVerdict("domestic", "CN")).toBe("ok");
    expect(networkVerdict("both", "CN")).toBe("ok");
    expect(networkVerdict("domestic", "JP")).toBe("warn");
  });
});

describe("isNetworkEnvLabel", () => {
  it("matches the static network rows we replace with the live probe", () => {
    expect(isNetworkEnvLabel("网络")).toBe(true);
    expect(isNetworkEnvLabel("Network")).toBe(true);
    expect(isNetworkEnvLabel("Git")).toBe(false);
  });
});
