import useHerosAndVillians from "./useHeroesAndVillians";

describe("useHerosAndVillians hook", () => {
  const data = useHerosAndVillians();
  test("fetching heroes data from hook", () => {
    expect(data).toBeDefined();
  });
});
