import React from "react";
import useHeroesAndVillains from "../hooks/useHeroesAndVillains";

function BattleList({ heroName, data, villainName }) {
  const { getHeroesByVillain } = useHeroesAndVillains();
  if (villainName) {
    return (
      <div>
        <h2>{villainName}</h2>
        <ul>
          {getHeroesByVillain(villainName).map(b => (
            <li key={b.name}>{JSON.stringify(b, null, 4)}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{heroName}</h2>
        <ul>
          {data[heroName].map(b => (
            <li key={b.name}>{b.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BattleList;
