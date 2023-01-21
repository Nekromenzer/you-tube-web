import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'
import dynamic from 'next/dynamic'

// import SEO from 'components/seo'
// import Layout from 'components/layout'
// import Banner from '../sections/banner'
// import KeyFeature from '../sections/key-feature'
// import ServiceSection from '../sections/service-section'
// import Feature from '../sections/feature'
// import CoreFeature from '../sections/core-feature'
// import WorkFlow from '../sections/workflow'
// import Package from '../sections/package'
// import TeamSection from '../sections/team-section'
// import TestimonialCard from '../sections/testimonial'

const SEO = dynamic(() => import('../components/seo'), { ssr: false })
const Banner = dynamic(() => import('../sections/banner'), { ssr: false })
const Layout = dynamic(() => import('../components/layout'), { ssr: false })
const KeyFeature = dynamic(() => import('../sections/key-feature'), {
  ssr: false
})
const ServiceSection = dynamic(() => import('../sections/service-section'), {
  ssr: false
})
const Feature = dynamic(() => import('../sections/feature'), { ssr: false })
const CoreFeature = dynamic(() => import('../sections/core-feature'), { ssr: false })
const WorkFlow = dynamic(() => import('../sections/workflow'), { ssr: false })
const Package = dynamic(() => import('../sections/package'), { ssr: false })
const TeamSection = dynamic(() => import('../sections/team-section'), {
  ssr: false
})
const TestimonialCard = dynamic(() => import('../sections/testimonial'), {
  ssr: false
})

export default function IndexPage () {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title='Nekromenzer' />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  )
}
