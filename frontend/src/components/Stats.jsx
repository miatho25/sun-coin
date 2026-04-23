import React from 'react';
import { stats } from '../mock';
import Reveal from './Reveal';

const Stats = () => (
  <section className="bg-[#faf9f5]">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="flex flex-col items-start border-t border-black/10 pt-6">
              <div
                className="text-[#0a0a0a] text-[48px] md:text-[64px] leading-none font-display flex items-baseline gap-2"
              >
                {s.value}
                {s.suffix && (
                  <span className="text-[20px] md:text-[22px] font-medium text-[#0a0a0a]/60">
                    {s.suffix}
                  </span>
                )}
              </div>
              <div className="mt-4 text-[14px] md:text-[15px] text-[#0a0a0a]/65 max-w-[180px] leading-snug">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
