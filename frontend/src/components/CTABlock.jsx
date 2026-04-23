import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { site } from '../mock';

const CTABlock = () => (
  <section id="book" className="bg-[#faf9f5] pb-24 md:pb-32">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
      <Reveal>
        <div className="relative overflow-hidden rounded-[28px] bg-[#0a0a0a] text-white px-7 md:px-16 py-16 md:py-24">
          {/* decorative yellow blob */}
          <div
            className="absolute -right-32 -bottom-32 w-[520px] h-[520px] rounded-full"
            style={{
              background: 'radial-gradient(circle at center, rgba(253,206,33,0.5) 0%, rgba(253,206,33,0) 70%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" aria-hidden="true" />

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-[#fdce21] text-[13px] tracking-[0.2em] uppercase mb-6">
                <span className="inline-block w-6 h-[2px] bg-[#fdce21]" />
                Book today
              </div>
              <h2 className="font-display text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px]">
                Schedule your laundry in{' '}
                <span className="font-serif-italic font-normal text-[#fdce21]">60 seconds.</span>
              </h2>
              <p className="mt-7 text-white/70 text-[16px] md:text-[17px] leading-[1.7] max-w-[560px]">
                For wash &amp; fold and commercial laundry, booking helps us prepare your
                order and guarantees fast turnaround.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <Link to="/contact" className="pill pill-yellow btn-cta justify-center">
                Book Appointment
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={`tel:${site.phone.replace(/[^0-9]/g, '')}`}
                className="pill btn-cta border border-white/15 text-white hover:bg-white hover:text-[#0a0a0a] justify-center transition-colors"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const VisitSection = () => (
  <section className="bg-[#faf9f5]">
    <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 pb-24 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            icon: <MapPin size={18} />,
            title: 'Visit',
            lines: [site.address, site.city],
          },
          {
            icon: <Clock size={18} />,
            title: 'Hours',
            lines: [site.hours, site.hoursDetail],
          },
          {
            icon: <Phone size={18} />,
            title: 'Call',
            lines: [site.phone, 'Mon–Sun'],
          },
          {
            icon: <Mail size={18} />,
            title: 'Email',
            lines: [site.email, 'We reply within a day'],
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <div className="h-full bg-white rounded-[22px] p-7 border border-black/5 transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)]">
              <div className="w-11 h-11 rounded-full bg-[#fdce21] inline-flex items-center justify-center text-[#0a0a0a] mb-5">
                {c.icon}
              </div>
              <div
                className="text-[#0a0a0a] text-[13px] tracking-[0.18em] uppercase mb-2"
                style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
              >
                {c.title}
              </div>
              <div className="text-[#0a0a0a] text-[15.5px] leading-[1.6]">
                {c.lines.map((l, k) => (
                  <div key={k} className={k > 0 ? 'text-[#0a0a0a]/55 text-[13.5px] mt-1' : ''}>
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export { CTABlock, VisitSection };
