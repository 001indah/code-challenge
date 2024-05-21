import React from 'react'
import Card from './Card'
import Button from './../Hero/button'
import Bag from '@/public/bag.svg'
import People from '@/public/people.svg'
import PeopleSit from '@/public/peopleSit.svg'
import Hand from '@/public/hands.svg'
import Link from 'next/link'


const Programs: React.FC = () => {
    return (
        <div className=' w-full relative bg-abuSedang items-center justify-center  lg:p-16 p-6 pt-7'>
            <p className='font-bold lg:text-base text-[13px] text-hijauTulisan text-center lg:px-[150px] lg:py-6 mx-auto'>FEATURED PROGRAM</p>
            <p className='text-black text-2xl font-semibold text-center pb-3 lg:text-[40px]'>Job Connector Bootcamp Purwadhika</p>
            <p className='lg:text-base text-[13px] text-slate-600 flex text-center lg:px-[150px] lg:py-6'>Purwadhika has been an experienced and trusted digital technologi education education institution  </p>
            <div className='lg:grid-cols-[1fr,1fr,1fr,1fr] gap-4 md:grid md:grid-cols-[1fr,1fr]'>
                <Card icon={Bag} firstText="Lifetime access to" span="jobs with limitless income potential" endText="" />
                <Card icon={People} firstText="Acquire " span=" skills always in demand across industries" endText="no matter the circumstances." />
                <Card icon={PeopleSit} firstText="Options available for" span="full-time, freelance, remote, or project-based work." endText="" />
                <Card icon={Hand} firstText="Lifetime" span="Career Support" endText="" />
            </div>
            {/* import Button from './../Hero/button' */}
            {/* import Link from 'next/link' */}

        </div>
    )
}

export default Programs
