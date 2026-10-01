import { describe, expect, it } from "vitest";
import { getVehicleBySlug, vehicles } from "../lib/vehicles";

describe("getVehicleBySlug", () => {
  it("returns a vehicle matching its slug", () => {
    expect(getVehicleBySlug("mercedes-classe-s")).toEqual(vehicles[0]);
  });

  it("returns undefined when the slug is unknown", () => {
    expect(getVehicleBySlug("unknown-vehicle")).toBeUndefined();
  });
});