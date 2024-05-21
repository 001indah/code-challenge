import React from 'react'
import Marquee from "react-fast-marquee";

const messages = [
    "BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · ",
    "BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · ",
    "BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · ",
    "BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · BELIEF · VALUE · ACTION · ",
];

const Card = () => {
    return (
        <div className='slide-text'>
            <Marquee pauseOnHover={true}>
                {messages.map((message, index) => (
                    <div key={index} className='border-t-2 border-b-2 border-black'>
                        <p key={index} className='text:4xl lg:text-5xl font-bold m-4 text-black'>{message}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Card
