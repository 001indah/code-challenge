import React from 'react';
import Image from 'next/image';

interface cardProps {
    photo: any
    label: string
    name: string
    desc: string
    company: string

}
const Card: React.FC<(cardProps)> = ({ photo, label, name, desc, company }) => {
    return (
        <div className='bg-gray-50 w-[283px] lg:w-full  rounded-lg p-4 my-16'>
            <Image
                alt="photo"
                src={photo}
                className="rounded-full w-16 lg:w-18 -translate-y-[55px]"
            />
            <div className='-translate-y-[50px]'>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-lg mb-2 text-black text-[12px] lg:text-[18px]'>{name}</p>
                    <p className='bg-orangeMuda rounded-sm text-[9px] lg:text-[12px] text-orange px-2 py-1 font-bold text-center'>{label}</p>
                </div>
                <p className='text-gray-400 mb-4 text-[12px] lg:text-[14px]'>{company}</p>
                <p className='lg:text-base text-black text-[13px] lg:text-[16px]'>{desc}</p>
            </div>
        </div>
    );
}

export default Card;

