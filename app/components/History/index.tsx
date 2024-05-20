import React from 'react';

const History = () => {
    const historyData = [
        {
            date: "1987",
            event: "Establishment",
            description: "Purwadhika Digital Technology School was founded in 1987 as an educational institution focused on digital technology."
        },
        {
            date: "Vision",
            event: "Vision",
            description: "The world has undergone significant and rapid changes towards 'DIGITAL' since the advent of internet technology in 1980. Therefore, everything will change, including the business world, and especially the workforce needed must also have different skills."
        },
        {
            date: "Mission",
            event: "Mission",
            description: "As an educational institution oriented towards digital technology, Purwadhika provides educational facilities to produce a digitally intelligent generation to prevent being marginalized but to become a generation that reaches the best future."
        },
        {
            date: "2022",
            event: "Celebrating 35 Years of Excellence",
            description: "Purwadhika Digital Technology School celebrates 35 years of excellence, marking a journey of commitment to providing the best education in digital technology. Throughout its history, Purwadhika has been a pioneer in digital education in Indonesia, continuously striving to excel and adapt to the evolving digital landscape."
        }
    ];

    return (
        <div className='lg:grid lg:grid-cols-[1fr,2fr] lg:px-6 lg:py-10 p-5'>
            <div>
                <p className='text-black text-2xl font-semibold lg:text-3xl pb-5 text-center lg:text-left'>A Leading Institution in Digital Education
                    <span className='highlight'> since 1987</span>
                </p>

            </div>
            <ol className="relative border-s border-black ">
                {historyData.map((event, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-hijauTua rounded-full mt-1.5 -start-1.5 border border-white  "></div>
                        <time className="mb-1 text-xs lg:text-sm font-normal leading-none text-hijauTua ">{event.date}</time>
                        <h3 className="text-lg font-semibold text-black mb-3">{event.event}</h3>
                        <p className="mb-4 text-sm lg:text-base font-normal text-slate-700 ">{event.description}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default History;
