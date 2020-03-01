import useHerosAndVillains from "./useHeroesAndVillains";

describe("useHerosAndVillains hook", () => {
  const {
    hasHeroFoughtVillain,
    getVillainsByHero,
    getHeroesByVillain
  } = useHerosAndVillains();
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
