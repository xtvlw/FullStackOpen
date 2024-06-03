import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const a = 10;
  const b = 20;
  const now = new Date();

  console.log(now, a+b);
  return (
    <div>
      <h1>Hello, World!, it's {now.toString()}</h1>
      <p>{a} plus {b} is equal to {a + b}</p>
    </div>
  )
}

export default App
