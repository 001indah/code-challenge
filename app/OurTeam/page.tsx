import React from 'react'
import Teams from '../components/Teams/index'
import Card from './Card'
import Faq from '@/app/components/Faq'
import LabelLogo from '@/components/LabelLogo'

const OurTeam = () => {
    return (
        <div id='OurTeam' className=' bg-abuSedang pt-[150px]'>

            <Teams className='bg-black' />
            <Card />
            {/* <LabelLogo /> */}
            <Faq />

        </div>
    )
}

export default OurTeam
