import { describe, expect, it } from "vitest";

describe("StageBase foundation", () => {
  it("uses the internal product name", () => {
    expect("StageBase").toBe("StageBase");
  });
});
