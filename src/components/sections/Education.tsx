import React from 'react'

interface Props {
    date?: string,
    program?: string,
    school?: string,
    description?: string
    link?: string

}

const Education = ({ date, program, school, description, link }: Props) => {
    return (
        <li className='mb-12'>
            <a href={link} >
                <div className='group flex flex-row flex-basis relative pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />
                    <header className='basis-1/4 text-mtext-white/60 z-10'>
                        {date}
                    </header>
                    <main className='basis-3/4 z-10'>
                        <p className='text-mtext-white font-semibold'>{program}</p>
                        <p className='text-mtext-white/60 font-semibold'>{school}</p>
                        <p className='text-mtext-white mt-3'>{description}</p>
                        <p className='text-mtext-white/60 mt-5 float-right hidden lg:group-hover/list:block'>Visit Program Webiste
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="inline-block h-4 w-4 ml-1" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd">
                                </path>
                            </svg>
                        </p>

                    </main>
                </div >
            </a>
        </li>
    )
}

export default Education