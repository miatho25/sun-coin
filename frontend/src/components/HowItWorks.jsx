import React from 'react';
import { howSteps } from '../mock';
import Reveal from './Reveal';

const HowItWorks = () => (
  <section id="how" className="bg-[#0a0a0a] text-white">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32">
      <Reveal>
        <div className="flex items-center gap-3 text-[#fdce21] text-[13px] tracking-[0.2em] uppercase mb-6">
          <span className="inline-block w-6 h-[2px] bg-[#fdce21]" />
          How It Works
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display text-white text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] max-w-[920px]">
          Three simple steps to fresh, folded laundry.
        </h2>
      </Reveal>

      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {howSteps.map((step, i) => (
          <Reveal key={step.num} delay={i * 120}>
            <div className="relative pl-0 md:pr-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 rounded-full bg-[#fdce21] text-[#0a0a0a] inline-flex items-center justify-center font-display text-[18px]">
                  {step.num}
                </span>
                <span className="h-[1px] flex-1 bg-white/15" />
              </div>
              <h3
                className="text-white text-[26px] md:text-[30px] mb-4"
                style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                {step.title}
              </h3>
              <p className="text-white/70 text-[15.5px] leading-[1.7] max-w-[340px]">
                {step.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
