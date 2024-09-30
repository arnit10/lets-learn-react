import { useState } from 'react'

import './App.css'

function App() {

  let [counter , setCounter] = useState(5)

  //let counter = 5

  function addValue(){
    //counter += 1
    if(counter == 20){
      return;
    }
    setCounter(counter + 1)
    
  }

  const removeValue = () =>{
    if(counter == 0){
      return;
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick= {addValue}>Add value</button>
      <button onClick = {removeValue}>Remove value</button>
    </>
  )
}

export default App
