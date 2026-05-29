import React from 'react';
import { ArrowUpRight, Calendar, CheckCircle2, Clock } from 'lucide-react';

const BOOKING_URL =
  'https://book.squareup.com/appointments/hu45eni7dsgf3z/location/LQV6PSHJ0D9VE';

const SquareLogo = () => (
  <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
    <rect x="6" y="6" width="52" height="52" rx="12" fill="#0a0a0a" />
    <rect x="22" y="22" width="20" height="20" rx="3" fill="none" stroke="#fdce21" strokeWidth="4" />
  </svg>
);

const BookingWidget = () => {
  return (
    <div className="bg-white rounded-[18px] p-7 md:p-8 text-[#0a0a0a]">
      <div className="flex items-center gap-4">
        <SquareLogo />
        <div>
          <div
            className="text-[11px] tracking-[0.18em] uppercase text-[#0a0a0a]/55"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
          >
            Powered by Square
          </div>
          <div
            className="text-[#0a0a0a] text-[18px] mt-0.5"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, letterSpacing: '-0.01em' }}
          >
            Online Appointments
          </div>
        </div>
      </div>

      <h3
        className="mt-6 text-[#0a0a0a] text-[26px] md:text-[30px] leading-tight"
        style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800, letterSpacing: '-0.015em' }}
      >
        Book your laundry service in just a few clicks.
      </h3>

      <ul className="mt-5 space-y-2.5 text-[15px] text-[#0a0a0a]/75">
        <li className="flex items-center gap-2.5">
          <CheckCircle2 size={18} className="text-[#0a0a0a] shrink-0" />
          Pick the service that fits your needs
        </li>
        <li className="flex items-center gap-2.5">
          <Calendar size={18} className="text-[#0a0a0a] shrink-0" />
          Choose a date &amp; time that works for you
        </li>
        <li className="flex items-center gap-2.5">
          <Clock size={18} className="text-[#0a0a0a] shrink-0" />
          Get instant confirmation by email
        </li>
      </ul>

      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-7 pill pill-dark btn-cta w-full justify-center text-[14px]"
        style={{ padding: '16px 26px' }}
      >
        Book on Square
        <ArrowUpRight size={16} />
      </a>

      <p className="mt-4 text-center text-[12px] text-[#0a0a0a]/50">
        Opens secure booking page in a new tab
      </p>
    </div>
  );
};

export default BookingWidget;
