import React from 'react'
import Image from 'next/image'
import playButton from '@/public/ic_play.svg'
import tubnailVideo from '@/public/team.webp'


const head = () => {
    return (
        <div>
            <div className=' w-full relative bg-hijauCakep items-center justify-center lg:pt-[150px] pt-[120px] overflow-hidden lg:p-16 mb-6'>
                <div>
                    <div className='lg:grid lg:grid-cols-[3fr,4fr] gap-4 px-5'>
                        <div>
                            <p className=' text-4xl lg:text-[40px] lg:leading-[55px] text-white mb-3'>Build a career with <span className='font-bold text-hijauMuda'>limitless potential</span> and <span className='font-bold text-hijauMuda'>digital expertise</span> in digital innovation.</p>
                            <p className='text-white text-sm lg:text-base my-6 leading-6'>TechMasters has been a trusted name since 1990, nurturing over 25,000 top-tier digital professionals who have successfully joined more than 800 TechMasters hiring partners worldwide.</p>
                        </div>
                        <div className="group relative w-full overflow-hidden rounded-xl bg-teal-600 shadow-lg md:block mb-5">
                            <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center duration-500  hover:text-white">

                                <Image
                                    alt="playButton"
                                    src={playButton}
                                    className="absolute inset-0 m-auto w-[50px] lg:w-[70px]"
                                />
                            </div>
                            <Image
                                alt="tubnailVideo"
                                src={tubnailVideo}
                                className='group-hover:opacity-80 group-hover:scale-110 h-full w-full opacity-100 duration-500 object-cover'
                            />

                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default head

