import React from 'react'
import Card from './Card'
import contactBanner from '@/public/contactBanner.webp'
import willy from '@/public/Willy.webp'
import bayu from '@/public/bayu.webp'
import ibnu from '@/public/ibnu.webp'
import Image from 'next/image'
import ButtonPolos from './../Hero/buttonPolos'


const Testimonials = () => {
    return (
        <div className='bg-black lg:pt-20 pt-6'>
            <p className='text-white lg:text-5xl lg:mx-28 text-2xl font-bold text-center pb-3 lg:text-[40px] mx-6'>What do <span className=' text-hijauMuda mx-1'>Job Connector Bootcamp alumni</span> say about Purwadhika?</p>
            <Image
                alt="contactBanner"
                src={contactBanner}
                className="lg:p-6"
            />

            <div className=' w-full relative bg-abuSedang items-center justify-center lg:pt-[30px] pt-[20px] overflow-hidden lg:p-16 p-5 rounded-t-[24px]'>
                <div className='slide-text text-headdisplay gap-6 overflow-hidden'>
                    <div className='grid grid-cols-[3fr,2fr] lg:grid-cols-[2fr,6fr]'>
                        <p className='border-b-4 highlight font-bold text-lg lg:text-2xl'>Software Engginering</p>
                    </div>

                    <div className=' overflow-x-auto overflow-hidden'>
                        <div className='gap-6 grid grid-cols-[1fr,1fr,1fr] '>
                            <Card photo={willy} name="Willy Bernardus" label="Hired less than a month!" company="Software Engineer di Mazecare, Hongkong" desc="“Purwadhika's value exceeded my expectations, particularly in terms of learning and mentoring systems, as well as work connections.”" />
                            <Card photo={bayu} name="Bayu Darmawan" label="Hired a month!" company="JDeveloper at Vantsing International" desc="“What is learned in class is not much different from the workplace, though it is more complex, and the knowledge" />
                            <Card photo={ibnu} name="Ibnu Sina" label="Hired two month!" company="Jr. Solutions Developer at Werkdone, Singapore" desc="“Having a mentor in the final project is very helpful! After graduation, the Purwadhika team actively offered us the positions needed by hiring partners.”" />
                        </div>
                    </div>

                    {/* import Link from 'next/link' */}
                    <ButtonPolos href='https://wa.link/zdtc2y' className='bg-black text-white hover:bg-hijauMuda'>
                        Hubungi Kami
                    </ButtonPolos>

                </div>
            </div>
        </div>
    )
}

export default Testimonials
