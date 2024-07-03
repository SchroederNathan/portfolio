import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-custom-dark">
        <div className="text-left ">
          <p className="text-blue-400 font-source-code-pro">Hi, My Name is</p>
          <h1 className="mt-5 mb-3 font-semibold text-mtext-white  text-8xl">Nathan<br/> Schroeder.</h1>
          <p className="text-5xl mb-5 text-mtext-white italic font-source-code-pro">Designer/Coder.</p>
          <button className="mt-4 w-[212px] h-[64px] text-2xl  font-semibold bg-accent text-custom-dark  rounded-lg">Download CV</button>
        </div>

        <div className='absolute bottom-0 left-10 h-[300px] w-[100px]'>
          <img src='images/discord.svg' className="h-[24px] absolute bottom-20 left-0 right-0 m-auto"></img>
          <img src='images/instagram.svg' className="h-[24px] absolute bottom-32 left-0 right-0 m-auto"></img>
          <img src='images/github.svg' className="h-[24px] absolute bottom-44 left-0 right-0 m-auto"></img>
          <img src='images/linkedin.svg' className="h-[24px] absolute bottom-56 left-0 right-0 m-auto"></img>

          <div className="h-[58px] bg-mtext-white w-[2px] absolute bottom-0 left-0 right-0 m-auto"></div>
        </div>

      </div>
    </>
  )
}

export default App
