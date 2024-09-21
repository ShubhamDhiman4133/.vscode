import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
    let myObj={
      username:"Shubham Dhiman",
      age:21
    }
  return (
    <>
     <h1 className ='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <Card channelName="Shubham Dhiman" btText='visit me'/>
    <Card channelName ='SD'/>
    </>
  )
}

export default App
