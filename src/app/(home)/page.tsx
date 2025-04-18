import FAQsSecrion from '@/components/home/faqs-section'
import FeaturesSection from '@/components/home/featuress-section'
import HeroSection from '@/components/home/hero-section'
import StorySection from '@/components/home/story-section'
import React from 'react'

const page = () => {
  return (
    <main className='size-full scroll-smooth'>
      <HeroSection/>
      <StorySection />
      <FeaturesSection />
      <FAQsSecrion />
    </main>
  )
}

export default page