const Guest  = require("../lib/Guest");

describe("Guest Class", () => {
  it("Name based on heads of Household", () => {
      gparentsSchmit = new Guest("Ken and Shannon Schmit");
      expect(gparentsSchmit.name).toEqual("Ken and Shannon Schmit");
  });
  it("Has a total guests in party", () => {
      gparentsSchmit = new Guest("Ken and Shannon Schmit", 2);
      expect(gparentsSchmit.partySize).toEqual(2);
  });
  it("Has a default party size of 1", () => {
    expect(new Guest("Ken and Shannon Schmit").partysize).toEqual(1);
  });
  it("Will generate guest info string", () => {
    expect(new Guest("Ken and Shannon Schmit, 2").info).toEqual("Ken and Shannon Schmit will be in a party of 2");
  });
})