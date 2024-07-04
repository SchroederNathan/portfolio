import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const lineActive = (title: string) => {
  return (
    <div className='flex items-center'>
      <div className='w-[64px] h-[0px] border-solid border border-mtext-white/90'></div>
      <p className='text-mtext-white/90 font-medium ml-4'>{title}</p>
    </div>
  )
}

const line = (title: string) => {
  return (
    <div className='flex items-center'>
      <div className='w-[32px] h-[0px] border-solid border border-mtext-white/40'></div>
      <p className='text-mtext-white/40 font-medium ml-4'>{title}</p>
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-[url("/images/dotsbg.png")] bg-no-repeat fixed top-0 left-0 right-0 bottom-0'>
        <div className="min-h-screen flex flex-row items-center overflow-hidden ">
          <div className="text-left ml-52 flex-1 relative">
            <p className="text-accent/75 text-2xl italic font-source-code-pro ">Hi, My Name is</p>
            <h1 className="mt-3 mb-3 font-semibold text-mtext-white  text-8xl">Nathan<br /> Schroeder.</h1>
            <p className="text-5xl mb-5 text-mtext-white italic font-source-code-pro">Designer/Coder.</p>
            <button className="mt-4 w-[212px] h-[64px] text-2xl  font-semibold bg-accent text-custom-dark  rounded-lg">Download CV</button>
            {/* <img src='images/dotshero.png' className="absolute -top-32 left-0 z-0"></img> */}

            {/* Nav headers */}

            <div className='flex flex-col gap-4 mt-12'>
              {lineActive('HOME')}
              {line('ABOUT')}
              {line('EXPERIENCE')}
              {line('PROJECTS')}


            </div>
          </div>
          <div className='flex-1 '>
            Hello
          </div>

          <div className='fixed bottom-0 left-0 h-[100%] w-[100px]'>
            <p className='absolute left-5 right-0 m-auto text-4xl font-semibold mt-6 text-accent'>&lt;/&gt;</p>
            <img src='images/discord.svg' className="h-[24px] absolute bottom-20 left-0 right-0 m-auto"></img>
            <img src='images/instagram.svg' className="h-[24px] absolute bottom-32 left-0 right-0 m-auto"></img>
            <img src='images/github.svg' className="h-[24px] absolute bottom-44 left-0 right-0 m-auto"></img>
            <img src='images/linkedin.svg' className="h-[24px] absolute bottom-56 left-0 right-0 m-auto"></img>

            <div className="h-[58px] bg-mtext-white w-[2px] absolute bottom-0 left-0 right-0 m-auto"></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
