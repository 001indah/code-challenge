import React from 'react'
import About from '../components/AboutUs/index'
import Card from './Card'

const AboutUs = () => {
    return (
        <div className='bg-abuSedang pt-[100px]'>

            <div id='AboutUs' className='flex justify-center items-center'>
                <About />
            </div>
            <Card />
            <div className='flex items-center justify-center p-5'>

                <img src="logo.webp" alt="" />
            </div>
            <p className='p-4 lg:p-10 text-sm lg:text-base mb-4 border-b-2 border-black lg:mx-10'>This motto serves as inspiration and motivation for our work—to be the best and provide the best for you. Our goal is to help you become the best version of yourself. "Be the best you can be at Purwadhika.</p>
            <div className='overflow-x-auto'>
                <div className='grid grid-cols-[300px,300px,300px] lg:p-10 lg:grid-cols-[1fr,1fr,1fr]'>
                    <div className='p-5 '>
                        <h1 className='text-base font-bold mb-4'>Purwadhika Process</h1>
                        <p className='text-sm lg:text-base'>The Purwadhika logo shows one of the most important processes with three stages depicted by three lines to be successful in a world depicted by circles.</p>
                        <br />
                        <ol className='list-decimal ml-5 text-sm lg:text-base'>
                            <li className='mb-2'>
                                <p><b>“Belief”</b> or <b>“What we believe”</b> which is the beginning and the basis that affects;</p>
                            </li>
                            <li className='mb-2'>
                                <p><b>“Value”</b> or <b>“The way we judge everything”</b> and which in the end will bear fruit into;</p>
                            </li>
                            <li className='mb-2'>
                                <p><b>“Action”</b> or <b>“Deeds”</b> that will determine results to be achieved.</p>
                            </li>
                        </ol>
                    </div>
                    <div className='p-5 border-x-2 border-black'>
                        <h1 className='text-sm lg:text-base font-bold mb-4'>Purwa</h1>
                        <p className='text-sm lg:text-base'>The Purwadhika logo shows one of the most important processes with three stages depicted by three lines to be successful in a world depicted by circles.</p>
                        <br />
                    </div>
                    <div className='p-5 border-black'>
                        <h1 className='text-sm lg:text-base font-bold mb-4'>Dhika</h1>
                        <p className='text-sm lg:text-base'>The Purwadhika logo shows one of the most important processes with three stages depicted by three lines to be successful in a world depicted by circles.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
