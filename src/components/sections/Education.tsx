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
        <li className='mb-12 group/education'>
            <a href={link} >
                <div className='group flex flex-row flex-basis relative pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />
                    <header className='basis-1/4 text-mtext-white/60 z-10'>
                        {date}
                    </header>
                    <main className='basis-3/4 z-10'>
                        <p className='text-mtext-white font-semibold flex items-center'>{program}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1 text-mtext-white hidden lg:group-hover/education:block icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </p>
                        <p className='text-mtext-white/60 font-semibold'>{school}</p>
                        <p className='text-mtext-white mt-3'>{description}</p>

                    </main>
                </div >
            </a>
        </li>
    )
}

export default Education