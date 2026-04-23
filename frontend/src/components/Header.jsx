import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { nav, site } from '../mock';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToAnchor = (href) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6 px-5 md:px-8 lg:px-12 py-3 md:py-4">
        <Link to="/" aria-label="Sun Coin Laundry home" className="block">
          <Logo size={68} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {nav.map((item) => {
            const isActive =
              (item.href === '/' && location.pathname === '/') ||
              (item.href === '/contact' && location.pathname === '/contact');
            return (
              <button
                key={item.href}
                onClick={() => goToAnchor(item.href)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${site.phone.replace(/[^0-9]/g, '')}`} className="nav-link hidden xl:inline">
            {site.phone}
          </a>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="pill pill-dark btn-cta"
          >
            Get Directions
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-full hover:bg-black/5"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white/95 backdrop-blur">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => goToAnchor(item.href)}
                className="text-left text-[16px] text-[#0a0a0a] py-3 border-b border-black/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href={site.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="pill pill-dark btn-cta justify-center mt-4"
            >
              Get Directions
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
