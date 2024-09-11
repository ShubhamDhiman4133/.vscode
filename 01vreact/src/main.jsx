import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp() {
  return (
    <h1>Chai aur React!| Shubham Dhiman</h1>
  )
}

/*const reactElement={
  type :'a',
 props: {
 href: 'https://google.com',
 target :'_blank'
 }, 
 Children:'Click me to visit page'
}*/

const another ="  Shubham Dhiman"
let reactElement = React.createElement(
  'a',
  {href: 'https://google.com' ,target: '_blank'},
    'Click me to visit google',
    another
)

const element= (
  <a href="https://google.com" target= '_blank'>Visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
   
  reactElement
  
)
