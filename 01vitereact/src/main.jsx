import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>returning from main file</h1>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'Hey this is custom element',
   anotherElement
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    reactElement
    // {/* <MyApp/> */}
  // </StrictMode>,
)
