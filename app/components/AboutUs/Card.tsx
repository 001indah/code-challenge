import React from 'react';
import Image from 'next/image';
import playButton from '@/public/ic_play.svg';

interface CardProps {
    title: string;
    background: string;
    icon: string;
    picture: string;
    desc: string;
}

const Card: React.FC<CardProps> = ({ title, background, icon, picture, desc }) => {
    return (
        <div>
            <section >
                <div className='card__container block '>
                    <div className="card__content inline rounded-[1.25rem] overflow-hidden ">
                        <div>
                            <div className="card__article max-w-full rounded-[1.25rem] overflow-hidden">
                                <div
                                    className="mb-[-.75rem] card__data py-[1.5rem] px-[2rem] align-center relative bg-cover bg-center"
                                    style={{ backgroundImage: `url(${background})` }}
                                >
                                    <h3 className="card__name">
                                        <div>
                                            <div className='flex items-center'>
                                                <Image
                                                    alt="icon"
                                                    src={icon}
                                                    width={48}
                                                    height={48}
                                                    className="w-12 mr-2"
                                                />
                                                <p className='text-[24px] font-bold leading-8'>{title}</p>
                                            </div>
                                            <p className='text-sm text-slate-600 flex justify-center my-5'>{desc}</p>
                                        </div>
                                    </h3>
                                </div>
                                <div className="card__image relative z-10">
                                    <div className="group relative w-full overflow-hidden rounded-xl bg-black shadow-lg md:block border-t-4 border-white">
                                        <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center duration-500 hover:text-white">
                                            <Image
                                                alt="playButton"
                                                src={playButton}
                                                width={70}
                                                height={70}
                                                className="absolute inset-0 m-auto w-[50px] lg:w-[70px]"
                                            />
                                        </div>
                                        <Image
                                            alt="thumbnailVideo"
                                            src={picture}
                                            width={300}
                                            height={300}
                                            className=' group-hover:opacity-80 group-hover:scale-110 h-full w-full opacity-100 duration-500 object-cover'
                                        />
                                    </div>
                                    <div className="card__shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Card;
