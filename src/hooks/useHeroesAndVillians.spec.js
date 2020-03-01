import useHerosAndVillians from "./useHeroesAndVillians";

describe("useHerosAndVillians hook", () => {
  const {
    hasHeroFoughtVillain,
    getVillainsByHero,
    getHeroesByVillain
  } = useHerosAndVillians();
  test("getVillainsByHero", () => {
    expect(getVillainsByHero("Spiderman").length).toBe(5);
  });

  test("hasHeroFoughtVillain", () => {
    expect(hasHeroFoughtVillain("Spiderman", "Venom")).toBe(true);
  });

  test("getHerosByVillain", () => {
    expect(getHeroesByVillain("Kingpin").length).toBe(3);
  });
});
