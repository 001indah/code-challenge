import React from 'react'
import Image from 'next/image';

interface CardProps {
    icon: string;
    firstText: string;
    span: string;
    endText: string;

}

const CardList: React.FC<CardProps> = ({ icon, firstText, span, endText }) => {
    return (
        <div className='my-6 lg:text-center lg:block grid grid-cols-[1fr,5fr]'>
            <div className='flex justify-center'>
                <Image
                    alt="icon"
                    src={icon}
                    className="md:w-[72px] lg:w-[124px] rounded-full w-[55px] mr-2"
                />
            </div>
            <div className='flex items-center lg:justify-center'>
                <p className='items-center lg:text-lg md:text-base text-[14px] text-black lg:py-6 inline-block'>{firstText}<span className='font-bold text-hijauTulisan mx-1'>{span}</span>{endText}</p>
            </div>
        </div>
    )
}




export default CardList
