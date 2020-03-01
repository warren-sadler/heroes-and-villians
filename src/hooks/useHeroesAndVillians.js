import data from "../data/heroes-and-villains.json";

const useHeroesAndVillains = () => {
  return {
    data,
    /**
     * villain name in {[string]: [{}]}
     * @param {string} hero
     * @param {string} villain
     */
    hasHeroFoughtVillain(hero, villain) {
      if (data[hero] === undefined) {
        return false;
      }
      return data[hero].some(v => v.name === villain);
    },
    /**
     *
     *
     * @param {string} hero
     */
    getVillainsByHero(hero) {
      return data[hero];
    },
    /**
     *
     * @param {string} villain
     */
    getHerosByVillain(villain) {},
    /**
     * give list of heroes in order of number of encounters
     * include number of villain wins (numberFights - numberWins)
     * @param {string} villain
     */
    orderHeroesByNumberOfEncounters(villain) {},
    getMostLikelyToWin(villain) {},
    predictWinLoseProbability(hero, villain) {}
  };
};

export default useHeroesAndVillains;
