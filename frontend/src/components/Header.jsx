import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { nav, site } from '../mock';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const goToAnchor = (href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-6 px-6 md:px-10 lg:px-14 py-4">
        {/* Logo */}
        <Link to="/" aria-label="Sun Coin Laundry home" className="block">
          <Logo size={96} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {nav.map((item) => {
            const isActive =
              (item.href === '/' && location.pathname === '/') ||
              (item.href === '/contact' && location.pathname === '/contact');
            return (
              <button
                key={item.href}
                onClick={() => goToAnchor(item.href)}
                className={`nav-link text-[15px] font-medium tracking-[0.01em] text-[#0a0a0a] hover:text-[#0a0a0a] transition-colors ${
                  isActive ? 'active' : ''
                }`}
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <a
          href={site.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-[#0a0a0a] text-[#fdce21] btn-cta px-7 py-5 hover:bg-[#1a1a1a] transition-colors"
          style={{ letterSpacing: '0.18em' }}
        >
          Get Directions
        </a>

        {/* Mobile trigger */}
        <button
          className="lg:hidden text-[#0a0a0a] p-2"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-[#eee] bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => goToAnchor(item.href)}
                className="text-left text-[16px] text-[#0a0a0a] py-2"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center bg-[#0a0a0a] text-[#fdce21] btn-cta px-6 py-4"
            >
              Get Directions
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
