import React from 'react'

interface propsButton {
    text: string
    icon: string
    link: string
}

const Button: React.FC<(propsButton)> = ({ text, icon, link }) => {
    return (
        <div>
            <a href={link} className='flex justify-center'>
                <button className=' my-4 px-6 py-3 w-[320px] bg-black rounded-lg flex align-center justify-center'>
                    <p className='text-white text-base lg:text-[18px]'>{text} </p>
                    <svg xmlns={icon} viewBox="0 0 384 512" className='ml-2 fill-white h-4 flex self-center'><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                </button>
            </a>
        </div>
    )
}

export default Button
