import React from 'react';
import Button from '../Hero/button';

const faq = [
    {
        question: "What is the difference between Job Connector Bootcamp and Skill Accelerator Bootcamp?",
        answer: "The <strong>Job Connector</strong> Bootcamp program is designed for those of you who want to learn digital skills that are in demand in the industry and launch a new career in the digital industry after graduation, with job connections to 1.000+ companies hiring partners in Purwadhika.\n\nMeanwhile, the <strong>Skill Accelerator</strong> Bootcamp program is a training program to increase self-potential by mastering digital skills that are relevant to industry needs."
    },
    {
        question: "Where is the Purwadhika campus located?",
        answer: "Purwadhika currently has 5 campus locations spread across several cities in Indonesia:\n\n<strong>BSD:</strong> Purwadhika Campus BSD is located at BSD Green Office Park, GOP 9 - G Floor, BSD City, Tangerang Banten.\n<strong>Jakarta:</strong> Purwadhika Campus Jakarta is located at Sinarmas MSIG Tower 12th Floor, Sudirman, Jakarta Selatan.\n<strong>Batam:</strong> Purwadhika Campus Batam is located at Digital Park, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau.\n<strong>Bandung: </strong>Purwadhika Campus Bandung is located at Menara Asia Afrika, Jl. Asia Afrika No.133-137, Kebon Pisang, Sumurbandung, Bandung City, West Java.\n<strong>Jogja:</strong> Purwadhika Campus Jogja is located at Pacific Building Yogyakarta, Jl. Laksda Adisucipto No.157, Demangan Baru, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta."
    },
    {
        question: "Am I guaranteed to get a job after joining this program?",
        answer: "<strong>Purwadhika guarantees</strong>  to provide job connection facilities to +1.000 Purwadhika's hiring partner companies through the Purwadhika Career Network once a student has been announced as a graduate of the Job Connector Bootcamp program.\n\nHowever, keep in mind that Purwadhika is only performing as a mediator between the graduates and the hiring partner company in this case. All matters regarding salary and other policies are not our responsibility because this is the full right of the hiring partner companies. You also have full rights to choose the job in the hiring partner company that you want."
    }
];


const Nav = () => {
    return (
        <div>
            <div className="lg:grid lg:grid-cols-[1fr,2fr] relative w-full py-16 px-6 text-black sm:px-20 lg:gap-[50px] lg:py-24">
                <div>
                    <p className="leading-10 mb-5 lg:text-left text-center lg:text-[40px] text-2xl font-semibold">Frequently <span className='highlight'>Asked</span> Questions</p>
                    <p className="mb-5 lg:text-left text-center text-sm lg:text-base text-gray-600">We have written down answers to some of the frequently asked questions. But, if you still have any queries, feel free to ping us on chat.</p>
                </div>
                <ul className="space-y-4">
                    {faq.map((item, index) => (
                        <li key={index} className="text-left">
                            <label htmlFor={`accordion-${index}`} className="box relative flex flex-col ">
                                <input className="peer hidden" type="checkbox" id={`accordion-${index}`} />
                                <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-4 ml-auto h-4 text-gray-500 transition peer-checked:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                                <div className="relative cursor-pointer select-none items-center py-4 pr-12">
                                    <h3 className="lg:text-xl text-sm text-black font-bold">{item.question}</h3>
                                </div>
                                <div className="max-h-0 overflow-hidden transition-all duration-500 peer-checked:max-h-96">
                                    <div className="py-3">
                                        <p className="lg:text-base text-xs whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                                    </div>
                                </div>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pb-20 flex justify-center">
                <Button href='#'>
                    Still have questions
                </Button>
            </div>
        </div>
    );
}

export default Nav;
