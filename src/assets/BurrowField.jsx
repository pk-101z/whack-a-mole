import { useContext } from "react"
import GameContext from "../game/GameContext"
import Burrow from "./burrow"


export function BurrowField(){
    const { burrows } = useContext(GameContext)
    return (
        <>
        <ul className="field">
            {burrows.map((hasBunny, index) => 
            <Burrow key={index} hasBunny={hasBunny} />)}
        </ul>
        </>
    );
}