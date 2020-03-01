import React from "react";
import BattleList from "./components/BattleList";
import useHeroesAndVillains from "./hooks/useHeroesAndVillains";

function App() {
  const { data } = useHeroesAndVillains();
  return (
    <div>
      <h3>Heroes And Villains</h3>
      <hr />
      <div className="flex">
        <div className="p-4">
          <BattleList heroName={"Captain America"} data={data} />
        </div>
        <div className="p-4">
          <BattleList villainName={"Sandman"} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
