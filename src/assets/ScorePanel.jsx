import { useContext } from "react"
import GameContext from "../game/GameContext"



export function ScorePanel(){
        const { score, time, stop } = useContext(GameContext)
        const value = useContext(GameContext);
        console.log("value", value)
    return(
        <>
        <section className="scoreboard">
            <div className="chip">
                Score <strong>{score}</strong>
            </div>
            <div className="chip">
                Time <strong>{time}</strong>
            </div>
            <button onClick={stop} className="btn-restart">RESTART</button>
        </section>
        </>
    )
}