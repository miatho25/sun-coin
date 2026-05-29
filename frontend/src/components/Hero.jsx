import React from 'react';
import { ArrowUpRight, Sparkles, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site, heroImage, ribbonImage } from '../mock';
import Reveal from './Reveal';

const Hero = () => (
  <section className="relative overflow-hidden bg-[#fdce21]">
    {/* soft background layers */}
    <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
    <div
      className="absolute -top-32 -left-32 w-[520px] h-[520px] glow-yellow blur-2xl"
      aria-hidden="true"
    />

    <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
        {/* Left content */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-3 bg-[#0a0a0a] text-[#fdce21] pl-2 pr-5 py-1.5 rounded-full text-[12px] tracking-[0.14em] uppercase">
              <img
                src={ribbonImage}
                alt=""
                className="w-7 h-7 rounded-full object-cover"
                draggable={false}
              />
              {site.badge}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 md:mt-8 font-display text-[#0a0a0a] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[104px] xl:text-[118px]">
              Clean, fast &amp;{' '}
              <span className="font-serif-italic font-normal">reliable</span>{' '}
              laundry in Forest Park.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 md:mt-9 text-[#0a0a0a]/80 text-[17px] md:text-[19px] leading-[1.55] max-w-[560px]">
              {site.description}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="pill pill-dark btn-cta"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
              <Link to="/contact" className="pill pill-outline btn-cta">
                Book wash &amp; fold
              </Link>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 md:mt-14 flex flex-wrap gap-8 md:gap-10 text-[#0a0a0a]/85">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#fdce21] inline-flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <div>
                  <div className="text-[14px] font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    {site.hours}
                  </div>
                  <div className="text-[12px] text-[#0a0a0a]/60">{site.hoursDetail}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#fdce21] inline-flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="text-[14px] font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Clean &amp; well-lit
                  </div>
                  <div className="text-[12px] text-[#0a0a0a]/60">Sanitized daily</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a0a0a] text-[#fdce21] inline-flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[14px] font-semibold" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    Forest Park, GA
                  </div>
                  <div className="text-[12px] text-[#0a0a0a]/60">4195 Jonesboro Rd</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right image card */}
        <div className="lg:col-span-5">
          <Reveal delay={160}>
            <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[4/5] md:aspect-[4/5] lg:aspect-[4/5.3] shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
              <img
                src={heroImage}
                alt="Commercial laundromat washing machines"
                className="w-full h-full object-cover"
              />
              {/* Floating review card */}
              <div className="absolute left-5 bottom-5 right-5 md:left-6 md:right-auto md:bottom-6 bg-white/95 backdrop-blur rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="w-12 h-12 rounded-full bg-[#fdce21] inline-flex items-center justify-center">
                  <Star size={20} fill="#0a0a0a" strokeWidth={0} />
                </div>
                <div>
                  <div
                    className="text-[#0a0a0a] text-[20px] leading-none"
                    style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
                  >
                    4.9 / 5.0
                  </div>
                  <div className="text-[#0a0a0a]/65 text-[12px] mt-1">
                    From 300+ happy customers
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
