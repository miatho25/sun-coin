import React from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../mock';
import Reveal from './Reveal';

const FAQ = () => (
  <section id="faq" className="bg-[#faf9f5]">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
      <div>
        <Reveal>
          <div className="flex items-center gap-3 text-[#0a0a0a]/60 text-[13px] tracking-[0.2em] uppercase mb-6">
            <span className="inline-block w-6 h-[2px] bg-[#0a0a0a]/30" />
            FAQ
          </div>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="font-display text-[#0a0a0a] text-[40px] sm:text-[52px] md:text-[60px] leading-[1]">
            Good to{' '}
            <span className="font-serif-italic font-normal">know.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 text-[#0a0a0a]/65 text-[16px] leading-[1.7] max-w-[380px]">
            Got more questions? Give us a call or stop by — we’re always happy to help.
          </p>
        </Reveal>
      </div>
      <div>
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="modern-acc">
              <summary>
                <span>{f.q}</span>
                <span className="acc-plus">
                  <Plus size={16} />
                </span>
              </summary>
              <div className="acc-body">{f.a}</div>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
