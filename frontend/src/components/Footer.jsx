import React from 'react';
import { site } from '../mock';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <h2
          className="display-heading text-[#fdce21] text-[40px] md:text-[56px] lg:text-[68px] mb-14"
          style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
        >
          {site.name}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div />
          <div>
            <h3
              className="text-[#fdce21] text-[22px] mb-5"
              style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
            >
              Location
            </h3>
            <p className="text-white text-[15px] leading-[1.8]">
              {site.address}
              <br />
              {site.city}
            </p>
          </div>
          <div>
            <h3
              className="text-[#fdce21] text-[22px] mb-5"
              style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
            >
              Contact
            </h3>
            <p className="text-white text-[15px] leading-[1.8]">
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

        <div className="mt-16 pt-8 border-t border-white/10 text-white/50 text-[12px] tracking-wider uppercase">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
