import { describe, expect, it } from "vitest";
import { isNetworkEnvLabel, networkCurlCommand } from "./network";

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
