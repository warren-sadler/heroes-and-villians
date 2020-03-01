import useHerosAndVillians from "./useHeroesAndVillians";

describe("useHerosAndVillians hook", () => {
  const { heroWins } = useHerosAndVillians();
  test("fetching heroes data from hook", () => {
    expect(heroWins).toBeDefined();
  });
});
