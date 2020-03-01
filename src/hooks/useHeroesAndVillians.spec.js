import useHerosAndVillians from "./useHeroesAndVillians";

describe("useHerosAndVillians hook", () => {
  const { hasHeroFoughtVillain, getVillainsByHero } = useHerosAndVillians();
  test("getVillainsByHero", () => {
    expect(getVillainsByHero("Spiderman").length).toBe(5);
  });

  test("hasHeroFoughtVillain", () => {
    expect(hasHeroFoughtVillain("Spiderman", "Venom")).toBe(true);
  });
});
