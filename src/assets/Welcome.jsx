import { useContext } from "react"
import GameContext from "../game/GameContext"

export function Welcome(){
    const {start} = useContext(GameContext)
    return <section className="welcome">
        <h2>Welcome to the wacking game</h2>
        <p>Whack the critters with your mouse to get points!</p>
        <button onClick={start}>Start</button>
        </section>
}