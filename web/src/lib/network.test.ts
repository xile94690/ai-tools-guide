import { describe, expect, it } from "vitest";
import { isNetworkEnvLabel, networkCurlCommand, networkVerdict } from "./network";

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
  it("matches network environment rows", () => {
    expect(isNetworkEnvLabel("网络")).toBe(true);
    expect(isNetworkEnvLabel("Network")).toBe(true);
    expect(isNetworkEnvLabel("Git")).toBe(false);
  });
});

describe("networkCurlCommand", () => {
  it("HEAD-requests the site origin with a short timeout", () => {
    expect(networkCurlCommand("chatgpt.com")).toBe(
      "curl -I --max-time 10 https://chatgpt.com",
    );
    expect(networkCurlCommand("https://tongyi.aliyun.com/wanxiang")).toBe(
      "curl -I --max-time 10 https://tongyi.aliyun.com",
    );
  });
});
