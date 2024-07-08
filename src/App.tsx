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

      <div className='dotted-background'>
      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-74 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72"
        >
          <div
            style={{
              clipPath:
                'polygon(0% 100%, 100% 100%, 100.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 60.5% 58.3%, 45.2% 34.5%, 97.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-10rem)]  -top-72 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[35deg] bg-gradient-to-tr from-[#74C6FF] to-[#4a449e49] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[102.1875rem]"
          />
        </div>

      {/* <div aria-hidden="true" className="absolute left-1/3 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 67.5% 30.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#74C6FF] to-[#9089fc] opacity-30"
        />
      </div>   */}
      <div className='bg-[url("/images/navdots.png")] bg-no-repeat fixed top-0 right-0 w-[33%] h-full'/>

        <div className="min-h-screen flex flex-row items-center ">
          <div className="text-left ml-52 flex-1 relative">
            <p className="text-accent/75 text-2xl italic font-source-code-pro bg-gradient-to-tr from-sky-300 via-blue-500 to-blue-900 bg-clip-text text-transparent">Hi, My Name is</p>
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
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#74C6FF] to-[#9189fc00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      </div>  

    </>
  )
}

export default App
