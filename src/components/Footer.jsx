// import React from 'react';

const Footer = () => {
    return (
        <div className='w-screen min-h-screen bg-zinc-100 py-10 px-4 sm:px-5 md:py-20 md:px-20 flex flex-col md:flex-row gap-10 md:gap-5 items-center md:items-start'>
            <div className='left w-full md:w-1/2 flex flex-col justify-between text-center md:text-left'>
                <div className='heading text-zinc-900 font-founders-grotesk font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.8] flex flex-col'>
                    <h1>Portfolio</h1>
                   
                </div>
                {/* <div className='ochi mt-6 md:mt-0'>
                    <img className='h-8 sm:h-10 w-20 sm:w-24 mx-auto md:mx-0' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div> */}
            </div>
            <div className='right w-full md:w-1/2'>
                <div>
                    <h1 className='heading text-zinc-900 font-founders-grotesk font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase tracking-wide text-center md:text-left'>Presentations</h1>
                    <div className='links text-zinc-900 px-2 sm:px-5 py-5 text-lg sm:text-xl md:text-2xl lg:text-3xl flex flex-col gap-4 sm:gap-6 underline text-center md:text-left'>
                        <a href='#' className='hover:text-zinc-600 transition'>INSTAGRAM</a>
                        <a href='#' className='hover:text-zinc-600 transition'>LINKEDIN</a>
                        <a href='#' className='hover:text-zinc-600 transition'>FACEBOOK</a>
                        <a href='#' className='hover:text-zinc-600 transition'>TWITTER</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
