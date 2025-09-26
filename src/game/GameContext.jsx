import { createContext, useState, useEffect, useRef } from "react";


const GameContext = createContext();
const NUM_BURROWS = 9;
const TIME_LIMIT = window.prompt("enter time limit")


export function GameProvider({children}){
    const [burrows, setBurrows] = useState();
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(TIME_LIMIT)
    const [playing, setPlaying] = useState(false)
    const timer = useRef();
    
    //Keeps track of game time (ends round by calling end/stop)
    useEffect(() => {
        if (time <= 0 && playing){
            stop();
        }
    }, [time, playing])

    const start = () => {
        setScore(0)
        setBurrows(MakeBurrows())
        setPlaying(true)
        timer.current = setInterval((

        ) => setTime((prevTime) => prevTime - 1 ), 1000);
    }

    const stop = () => {
        setPlaying(false)
        clearInterval(timer.current);
        setTime(TIME_LIMIT);
    }

    //change score and move WAbbit (game progression)
    const hop = () => {
        setScore((prevScore) => prevScore + 1)
        setBurrows(MakeBurrows(burrows))
    }

const value = {
    burrows,
    score,
    time,
    timeLimit: TIME_LIMIT,
    playing,
    start,
    stop,
    hop,
};


    return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}


export function MakeBurrows(prev=[]){
    const newField = Array(NUM_BURROWS).fill(false);
    let bunny = Math.floor(Math.random() * NUM_BURROWS)
    while (prev[bunny]){
        bunny = Math.floor(Math.random()) * NUM_BURROWS
    }
    newField[bunny] = true
    return newField;
}



export default GameContext;