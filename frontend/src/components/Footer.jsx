import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { site, nav } from '../mock';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 pt-20 md:pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 lg:gap-10">
          <div>
            <div className="flex items-center gap-4">
              <Logo size={70} />
              <div>
                <div
                  className="text-white text-[22px]"
                  style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
                >
                  {site.name}
                </div>
                <div className="text-white/55 text-[13px]">Forest Park, GA</div>
              </div>
            </div>
            <p className="mt-6 text-white/65 text-[15.5px] leading-[1.7] max-w-[360px]">
              Brand-new machines, large-capacity washers, and a spotless space — your
              neighborhood laundromat done right.
            </p>
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 pill pill-yellow btn-cta inline-flex"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h4
              className="text-[#fdce21] text-[13px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href.startsWith('/#') ? '/' : n.href}
                    className="text-white/75 hover:text-[#fdce21] transition-colors text-[15px]"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-[#fdce21] text-[13px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
            >
              Visit
            </h4>
            <p className="text-white/75 text-[15px] leading-[1.8]">
              {site.address}
              <br />
              {site.city}
              <br />
              <span className="text-white/50">{site.hoursDetail}</span>
            </p>
          </div>

          <div>
            <h4
              className="text-[#fdce21] text-[13px] tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
            >
              Contact
            </h4>
            <p className="text-white/75 text-[15px] leading-[1.8]">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-[#fdce21] transition-colors"
              >
                {site.email}
              </a>
              <br />
              <a
                href={`tel:${site.phone.replace(/[^0-9]/g, '')}`}
                className="hover:text-[#fdce21] transition-colors"
              >
                {site.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Huge brand display */}
        <div className="mt-20 md:mt-28 border-t border-white/10 pt-10">
          <div
            className="font-display text-[#fdce21] leading-[0.9] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] tracking-[-0.03em] select-none"
          >
            {site.name}
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white/45 text-[12px] tracking-[0.08em] uppercase">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Forest Park, Georgia</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
