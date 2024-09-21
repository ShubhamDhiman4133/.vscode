import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

    let [Counter, setCounter]=useState(7)

  //let counter =7
  const addValue = () =>{
    if(Counter < 20) setCounter(Counter+1)
  }

  const removeValue = () =>{
    if(Counter > 0)
    setCounter(Counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value :{Counter}</h2>
      <button
      onClick ={addValue}>Add Value:{Counter}</button><br/>
      <button
       onClick ={removeValue}>remove Value:{Counter}</button>
    </>
  )
}

export default App
