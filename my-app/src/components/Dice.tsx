import {useState} from "react"
import "./Dice.css"

function Dice() {
    const [number, setNumber] = useState(1)

    function rollDice() {
        const newNumber = Math.floor(Math.random() * 6) + 1
        setNumber(newNumber)
    }

    return(
        <div className="container">
            <h1>Dice: {number}</h1>
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    )
}

export default Dice