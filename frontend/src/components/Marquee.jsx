import React from 'react';
import { marqueeItems } from '../mock';

const Dot = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-[#fdce21] mx-5" aria-hidden="true" />
);

const Marquee = () => {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="bg-[#0a0a0a] py-4 overflow-hidden border-y border-black/40">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center text-white text-[13px] md:text-[14px] tracking-[0.02em]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500 }}
          >
            <span className="uppercase">{item}</span>
            <Dot />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
