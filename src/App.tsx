import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-pattern">
        <div className="text-left ">
          <p className="text-blue-400">Hi, My Name is</p>
          <h1 className="text-5xl mt-2 font-bold text-white">Nathan Schroeder</h1>
          <p className="text-2xl text-blue-400 italic">Designer/Coder</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Download CV</button>
        </div>
      </div>
    </>
  )
}

export default App
