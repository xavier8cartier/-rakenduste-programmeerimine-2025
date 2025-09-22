import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function increaseCounter(amount: number){
    setCount(count => count + amount)
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increaseCounter(100)}>+100
        </button>
        <button onClick={() => increaseCounter(50)}>+50
        </button>
        <button onClick={() => increaseCounter(25)}>+25
        </button>
        <button onClick={() => increaseCounter(1)}>+1
        </button>
        <button onClick={() => increaseCounter(-1)}>-1
        </button>
        <button onClick={() => increaseCounter(-25)}>-25
        </button>
        <button onClick={() => increaseCounter(-50)}>-50 
        </button>
        <button onClick={() => increaseCounter(-100)}>-100 
        </button>
      </div>
      <h2>count is {count}</h2>
    </>
  )
}

export default Counter