import React from 'react'
import Hero from './components/Hero'
import Faq from './components/Faq'
import AboutUs from './components/AboutUs'
import Testimonials from './components/Testimonials'
import Teams from './components/Teams'
import LabelLogo from '@/components/LabelLogo'

import Programs from './components/Programs'


const page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Teams />
      <Programs />
      <Testimonials />
      <Faq />
      <LabelLogo />


    </div>
  )
}

export default page
