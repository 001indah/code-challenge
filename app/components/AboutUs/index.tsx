import React from 'react';
import Card from './Card';
import bgGreen from '@/public/green.webp';
import bgPurple from '@/public/purple.webp';
import bgOrange from '@/public/orange.webp';
import companyProfile from '@/public/company-profile.webp';
import hiringPartner from '@/public/hiring-partner.webp';
import careerNetwork from '@/public/career-network.webp';
import iconGreen from '@/public/iconGreen.webp';
import iconOrenge from '@/public/iconOrange.webp';
import iconPurple from '@/public/iconPurple.webp';
import History from '../History';
import playButton from '@/public/ic_play.svg'
import Image, { StaticImageData } from 'next/image';
import jokowi from '@/public/jokowi.webp'


interface CardData {
    title: string;
    icon: string | StaticImageData;
    background: string;
    picture: string | StaticImageData;
    desc: string;
}


const cardData: CardData[] = [
    {
        title: "Purwadhika is a life changer",
        icon: iconGreen,
        background: "green.webp",
        picture: companyProfile,
        desc: "Join our 30.000+ alumni who have achieved dream careers in the digital industry from various backgrounds."
    },
    {
        title: "Proven by industry",
        icon: iconPurple,
        background: "purple.webp",
        picture: hiringPartner,
        desc: "Purwadhika has become the talent pool for 1.000+ hiring partner companies from various industries across Asia."
    },
    {
        title: "Lifetime career support",
        icon: iconOrenge,
        background: "orange.webp",
        picture: careerNetwork,
        desc: "From building CV to interview preparation and career coaching, Purwadhika is ready to assist you become top digital talent!"
    }
];

const AboutUs: React.FC = () => {
    return (
        <div className='w-full relative bg-abuSedang items-center justify-center lg:pt-[150px] lg:p-16 p-6 '>
            <p className='text-black text-2xl font-bold lg:font-semibold text-center pb-3 lg:text-[40px]'>
                <span className='highlight'>Why</span> Purwadhika?
            </p>
            <p className='lg:text-base text-[13px] text-slate-600 flex text-center decoration-solid lg:px-[150px] lg:py-6'>
                Purwadhika has been an experienced and trusted digital technology education institution for more than 36 years since 1987.
            </p>
            {/* start */}
            {/* <div className="group relative w-full overflow-hidden rounded-xl bg-teal-600 shadow-lg md:block ">
                <div className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center duration-500  hover:text-white">

                    <Image
                        alt="playButton"
                        src={playButton}
                        className="absolute inset-0 m-auto w-[50px] lg:w-[70px]"
                    />
                </div>
                <Image
                    alt="tubnailVideo"
                    src={jokowi}
                    className='group-hover:opacity-80 group-hover:scale-110 h-full w-full opacity-100 duration-500 object-cover'
                />

            </div> */}
            {/* end */}
            <div className='mb-20 lg:mx-9 my-6 grid lg:grid-cols-[1fr,1fr,1fr] md:grid-cols-[1fr,1fr] sm:grid-cols-[1fr] gap-9'>
                {cardData.map((card, index) => (
                    <Card
                        index={index}
                        key={index}
                        title={card.title}
                        icon={card.icon}
                        background={card.background}
                        picture={card.picture}
                        desc={card.desc}
                    />
                ))}
            </div>
            <div>
                <div>
                    <div className="mb-16">

                    </div>
                </div>
            </div>
            <History />
        </div>
    );
}

export default AboutUs;

