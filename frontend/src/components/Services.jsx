import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../mock';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import { site } from '../mock';

const ServiceCard = ({ service, onCta }) => (
  <article className="group relative flex flex-col h-full bg-white rounded-[24px] overflow-hidden border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]">
    <div className="relative img-zoom aspect-[4/3] bg-black">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(100%)' }}
      />
      <div className="absolute top-4 left-4 text-[#fdce21]">
        <span
          className="bg-[#0a0a0a] text-[#fdce21] px-3 py-1.5 rounded-full text-[12px] tracking-[0.18em]"
          style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
        >
          {service.number}
        </span>
      </div>
    </div>

    <div className="flex flex-col flex-1 p-7 md:p-8">
      <h3
        className="text-[#0a0a0a] text-[26px] md:text-[28px] leading-tight"
        style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, letterSpacing: '-0.015em' }}
      >
        {service.title}
      </h3>
      <p className="mt-4 text-[#0a0a0a]/70 text-[15.5px] leading-[1.65]">
        {service.blurb}
      </p>

      <ul className="mt-5 space-y-2 text-[14.5px] text-[#0a0a0a]/80">
        {service.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5">
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#fdce21] shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <button
          onClick={() => onCta(service.cta)}
          className="inline-flex items-center gap-2 text-[#0a0a0a] font-semibold group/link"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          <span className="relative">
            {service.cta.label}
            <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-[#0a0a0a] origin-left scale-x-100 transition-transform duration-300 group-hover/link:scale-x-0" />
          </span>
          <span className="w-8 h-8 rounded-full bg-[#fdce21] inline-flex items-center justify-center transition-transform duration-300 group-hover/link:translate-x-1">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>
    </div>
  </article>
);

const Services = () => {
  const navigate = useNavigate();
  const handleCta = (cta) => {
    if (cta.kind === 'directions') window.open(site.directionsUrl, '_blank');
    else if (cta.kind === 'book') document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    else if (cta.kind === 'contact') navigate('/contact');
  };

  return (
    <section id="services" className="bg-[#faf9f5]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <Reveal>
              <div className="flex items-center gap-3 text-[#0a0a0a]/60 text-[13px] tracking-[0.2em] uppercase mb-6">
                <span className="inline-block w-6 h-[2px] bg-[#0a0a0a]/30" />
                Services
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-[#0a0a0a] text-[44px] sm:text-[60px] md:text-[76px] lg:text-[92px] max-w-[880px]">
                Everything you need for a{' '}
                <span className="font-serif-italic font-normal">perfect</span> laundry day.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-[#0a0a0a]/65 text-[16px] leading-[1.7] max-w-[320px]">
              Choose self-service, drop-off wash &amp; fold, or let us handle your business laundry needs.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <ServiceCard service={s} onCta={handleCta} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
