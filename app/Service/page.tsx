import React from 'react';
import Button from '../components/Hero/button';
import Faq from '../components/Faq'
import Programs from '../components/Programs/index';
import Card from './index';
import LabelLogo from '@/components/LabelLogo';
import Head from './head';

const posts = [
    {
        id: 1,
        category: 'Job Connector Bootcamp Programs',
        title: 'Visual Design',
        description: 'Join our Visual Design bootcamp, a comprehensive 13-week program that equips you with the skills to become a professional graphic designer. Learn design principles, software tools like Adobe Creative Suite, and user experience design. Enjoy lifetime job connections to kickstart and advance your career.',
        imgSrc: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['On Campus', 'Full-time', '13 weeks']
    },
    {
        id: 2,
        category: 'Job Connector Bootcamp Programs',
        title: 'Digital Marketing',
        description: 'Our 14-week Digital Marketing bootcamp offers an intensive curriculum covering SEO, social media marketing, email campaigns, and data analytics. Gain hands-on experience with industry tools and strategies, and benefit from lifetime job connections to secure a role in the dynamic field of digital marketing.',
        imgSrc: 'https://plus.unsplash.com/premium_photo-1661962226606-514d1b28b183?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['On Campus', 'Full-time', '14 weeks']
    },
    {
        id: 3,
        category: 'Coding',
        title: 'Software Engineering',
        description: 'Enroll in our 12-week Software Engineering bootcamp to master coding languages such as Python, JavaScript, and SQL. Learn software development methodologies, database management, and web development. Leverage our lifetime job connection services to enter and thrive in the tech industry.',
        imgSrc: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['On Campus', 'Full-time', '12 weeks']
    }
];


const Service = () => {
    return (
        <div className='bg-abuSedang '>
            <Head />
            <Programs />
            <section className="pt-20">
                <p className='font-bold lg:text-base text-[13px] text-hijauTulisan text-center lg:px-[150px] lg:py-6 mx-auto'>FEATURED PROGRAM</p>
                <p className='text-black text-2xl font-semibold text-center pb-3 lg:text-[40px]'><span className='highlight'>Job Connector</span> Bootcamp Purwadhika</p>
                <p className='lg:text-base text-[13px] text-slate-600 flex text-center lg:px-[150px] lg:py-6'>Purwadhika has been an experienced and trusted digital technologi education education institution  </p>
                <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                    {posts.map((post) => (
                        <div key={post.id} className="h-90 col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
                            <a href="#" className="block h-full w-full">
                                <img className="max-h-40 w-full object-cover" alt="featured image" src={post.imgSrc} />
                                <div className="w-full bg-white p-4">
                                    <p className="text-sm lg:text-md font-medium text-hijauTulisan">{post.category}</p>
                                    <p className=" text-xl font-semibold text-black">{post.title}</p>
                                    <div className="justify-starts my-2 flex flex-wrap items-center">
                                        {post.tags.map((tag, index) => (
                                            <div key={index} className="mr-2 mt-1 rounded-2xl border border-black py-1.5 px-4 text-[10px] lg:text-xs text-black">{tag}</div>
                                        ))}
                                    </div>
                                    <p className="text-xs lg:text-md font-light text-gray-800">{post.description}</p>
                                    <br className='box' />
                                    <Button href='https://wa.link/zdtc2y' className='hover:bg-hijauMuda hover:text-black text-white text-base'>
                                        Contact Us
                                    </Button>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            <LabelLogo />
            <Faq />
            <Card />
        </div>
    );
}

export default Service;
