import React from 'react';
import Marquee from "react-fast-marquee";

const Label = () => {
    const messages = [
        "Limited seats and valid only until 10 May 2024 📣 Get Exclusive On Campus Promo",
        "Limited seats and valid only until 10 May 2024 📣 Get Exclusive On Campus Promo",
        "Limited seats and valid only until 10 May 2024 📣 Get Exclusive On Campus Promo"
    ];

    return (
        <div className='z-50 slide-text fixed top-16 lg:top-0 w-full h-8 p-2 bg-orangeMuda'>
            <Marquee pauseOnHover={true}>
                {messages.map((message, index) => (
                    <p key={index} className='text-xs text-black'>{message} <span className='font-bold text-red-900 mx-1'>UP TO 50% OFF!</span></p>
                ))}
            </Marquee>
        </div>
    );
};

export default Label;
