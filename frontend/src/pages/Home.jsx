import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Stats from '../components/Stats';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { CTABlock, VisitSection } from '../components/CTABlock';

const Home = () => (
  <>
    <Hero />
    <Marquee />
    <Stats />
    <Services />
    <HowItWorks />
    <Testimonials />
    <FAQ />
    <CTABlock />
    <VisitSection />
  </>
);

export default Home;
