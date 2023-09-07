import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0);

  const addOne= ()=>{if(counter<22)setCounter(++counter)}
  const removeOne= ()=>{if(counter>0)setCounter(--counter)}

    return (
      <>
      <h1>Counter {counter}</h1>
      <button onClick={addOne}>Add</button>
      <button onClick={removeOne}>remove</button>
      </>
    )
}

export default App
