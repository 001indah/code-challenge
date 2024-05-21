import React from 'react'
import Teams from '../components/Teams/index'
import Card from './Card'
import Faq from '@/app/components/Faq'
import LabelLogo from '@/components/LabelLogo'
import Head from './head'


const OurTeam = () => {
    return (
        <div id='OurTeam' className=' bg-abuSedang'>
            <Head />
            <div >
                <Teams />
                <Card />
                <Faq />
                <LabelLogo />
            </div>

        </div>
    )
}

export default OurTeam
