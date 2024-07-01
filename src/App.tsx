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
        <div className='absolute bottom-0 left-10 h-[300px] w-[100px]'>
          <img src='images/discord.svg' className="h-[33px] absolute bottom-32 left-0 right-0 m-auto"></img>
          <img src='images/instagram.svg' className="h-[33px] absolute bottom-44 left-0 right-0 m-auto"></img>
          <img src='images/github.svg' className="h-[33px] absolute bottom-56 left-0 right-0 m-auto"></img>
          <img src='images/linkedin.svg' className="h-[33px] absolute bottom-68 left-0 right-0 m-auto"></img>

          <div className="h-[112px] bg-twhite w-[3px] absolute bottom-0 left-0 right-0 m-auto"></div>
        </div>

      </div>
    </>
  )
}

export default App
