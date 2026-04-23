import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../mock';
import Reveal from './Reveal';

const Testimonials = () => (
  <section id="reviews" className="bg-[#faf9f5]">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32">
      <Reveal>
        <div className="flex items-center gap-3 text-[#0a0a0a]/60 text-[13px] tracking-[0.2em] uppercase mb-6">
          <span className="inline-block w-6 h-[2px] bg-[#0a0a0a]/30" />
          Reviews
        </div>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="font-display text-[#0a0a0a] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[76px] max-w-[960px]">
          Loved by neighbors all over{' '}
          <span className="font-serif-italic text-[#0a0a0a] font-normal">Forest Park.</span>
        </h2>
      </Reveal>

      <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <article className="group relative h-full bg-white rounded-[22px] p-7 md:p-8 border border-black/5 transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute top-6 right-6 text-[#fdce21]">
                <Quote size={28} />
              </div>
              <div className="flex items-center gap-1 text-[#fdce21] mb-5">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} size={16} fill="#fdce21" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[#0a0a0a] text-[16px] md:text-[17px] leading-[1.65] min-h-[140px]">
                “{t.quote}”
              </p>
              <div className="mt-7 pt-5 border-t border-black/5">
                <div
                  className="text-[#0a0a0a] text-[15px]"
                  style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
                >
                  {t.name}
                </div>
                <div className="text-[#0a0a0a]/55 text-[13px] mt-1">{t.role}</div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
