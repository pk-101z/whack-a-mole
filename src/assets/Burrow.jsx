import { useContext } from "react"
import GameContext from "../game/GameContext"

export default function Burrow({ hasBunny }){
    const { hop } = useContext(GameContext)
    return hasBunny ? <li className="burrow bunny" onClick={hop}></li> : <li className="burrow"></li>
}