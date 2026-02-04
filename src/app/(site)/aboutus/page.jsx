import React from 'react'
import LeadershipHighlight from '../components/LeadershipHighlight'
import WhatWeDo from '../components/WhatWeDo'
import BrandTrust from '../components/BrandTrust'
import AboutUsSection from '../components/AboutUsSection'
import LeadershipSection from '../components/LeadershipSection'
import HeroBanner from '../components/HeroBanner'
import OurKeyExcellence from '../components/OurKeyExcellence'
import IntroductionLS from '../components/IntroductionLS'

export default function AboutUsPage() {
  return (
    <main className=''>
      <HeroBanner />
      <BrandTrust />
      <OurKeyExcellence/>
      {/* <IntroductionLS/> */}
      <AboutUsSection />
      <LeadershipSection />
      <WhatWeDo />
      <LeadershipHighlight />
    </main>
  )
}
