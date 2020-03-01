import React from "react";
import InputComponent from "./components/input";
import data from "./data/heroes-and-villains.json";
const oppositePlayers_ = [1,2,3,4];
const heros = Object.keys(data).sort();
const villians = heros.map(hero => data[hero])
.reduce((acc, villians) => [...acc,...villians], [])
.map(v => v.name)
.filter((name, i, arr) => arr.indexOf(name) === i)
.sort();

function App() {
  const [selectedHero, setSelectedHero] = React.useState(undefined);
  const [selectedVillian, setSelectedVillian] = React.useState(undefined);
  return (
    <div className="w-screen h-screen bg-blue-400 flex items-center justify-center">
     <main className="card">
       <h2>{selectedHero || 'Select a Hero'}</h2>
       {!selectedHero && <InputComponent list={heros} select={setSelectedHero}/>}
       <h2>{selectedVillian || "Select a villian"}</h2>
       {!selectedVillian && <InputComponent list={villians} select={setSelectedVillian}/>}
     </main>
    </div>
  );
}

export default App;
