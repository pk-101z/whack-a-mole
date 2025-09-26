import { useContext } from "react";
import GameContext from "./game/GameContext";
import { ScorePanel } from "./assets/ScorePanel";
import { Welcome } from "./assets/Welcome";
import { BurrowField } from "./assets/BurrowField";

export default function App() {
  const { playing } = useContext(GameContext)
  return (
    <>
      <h1>Whack-A Creature</h1>
      {playing ? (<>
        <ScorePanel />
        <BurrowField /> </>) : ( <Welcome /> )}
    </>
  );
}
