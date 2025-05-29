import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  let [countr, addcount] = useState(0);
  const  addNumber = () => {

    addcount(countr + 1)

  }
  const remove = ( ) => {
    addcount(countr - 1)
  }

  return (
    <>
      <h1>Counter|React</h1>
      <h2>Count Value : {countr} </h2>
      <button onClick={addNumber}>Add Count</button>
      <button onClick={remove}>remove count</button>
    </>
  )
}

export default App
