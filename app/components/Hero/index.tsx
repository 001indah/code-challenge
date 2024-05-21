import React from 'react'
import FactNum from '../FactNum';
import tubnailVideo from '@/public/thumbnailVideo.webp'
import playButton from '@/public/ic_play.svg'
import Image from 'next/image';
import Button from './button';
import ButtonPolos from './buttonPolos'
import Link from 'next/link';

const Programs = [
    { program: "Software development" },
    { program: "Digital Marketing" },
    { program: "Data Science" },
    { program: "Visual Design" },
]

interface Program {
    program: string;
}

const Hero: React.FC = () => {

    return (
        <div>
            <div className=' w-full relative bg-black items-center justify-center lg:pt-[150px] pt-[120px] overflow-hidden lg:p-16'>
                <div>
                    <div className='lg:grid lg:grid-cols-[3fr,4fr] gap-4 px-5'>
                        <div>
                            <p className=' text-4xl lg:text-[40px] lg:leading-[55px] text-white mb-3'>Achieve a <span className='font-bold text-hijauMuda'>career</span> and <span className='font-bold text-hijauMuda'>digital expertise</span> with endless job possibilities. </p>
                            <p className='text-white text-sm lg:text-base my-6 leading-6'>Purwadhika has been trusted since 1987 and has transformed more than 30.000 high-quality digital talents to over 1.000+ Purwadhika hiring partners globally.</p>
                            <div className='flex flex-wrap gap-2 text-sm lg:text-[14px] font-semibold'>
                                {Programs.map((program: Program, index: number) => (
                                    <p key={index} className='text-white p-2 border border-green-300 border-solid rounded-full'>{program.program}</p>
                                ))}

                            </div>
                            <div className='lg:flex md:flex gap-3 my-9'>
                                <Link href="/Service">
                                    <Button href="/Service" className='border border-hijauMuda hover:border-none hover:text-black hover:bg-hijauMuda'>
                                        Lihat Program
                                    </Button>
                                </Link>
                                <ButtonPolos href='https://wa.link/zdtc2y' className='bg-white text-black hover:bg-hijauMuda'>
                                    Hubungi Kami
                                </ButtonPolos>
                            </div>
                        </div>
                        <div className="group relative w-full overflow-hidden rounded-xl bg-teal-600 shadow-lg md:block">
                            <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center duration-500  hover:text-white">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="white">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                </svg> */}
                                <a href="https://www.youtube.com/@PurwadhikaTV">
                                    <Image
                                        alt="playButton"
                                        src={playButton}
                                        className="absolute inset-0 m-auto w-[50px] lg:w-[70px]"
                                    />
                                </a>
                            </div>
                            <Image
                                alt="tubnailVideo"
                                src={tubnailVideo}
                                className='group-hover:opacity-80 group-hover:scale-110 h-full w-full opacity-100 duration-500 object-cover'
                            />
                            {/* <img className="group-hover:opacity-60 group-hover:scale-110 h-full w-full opacity-100 duration-500 object-cover" src="company-profile.webp" alt="" /> */}
                        </div>

                        {/* <div className="relative overflow-hidden rounded-lg">
                            <Image
                                alt="tubnailVideo"
                                src={tubnailVideo}
                                className='hover:scale-110 ease-in-out duration-500 object-cover rounded-lg'
                            />
                            <Image
                                alt="playButton"
                                src={playButton}
                                className="absolute inset-0 m-auto w-[50px]"
                            />

                        </div> */}
                    </div>
                    <FactNum />
                </div>

            </div>

        </div >
    )
}

export default Hero
