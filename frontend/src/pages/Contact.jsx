import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { contactImage, site } from '../mock';
import { useToast } from '../hooks/use-toast';
import Reveal from '../components/Reveal';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'Wash & Fold',
    message: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      toast({ title: 'Please fill out all required fields.', variant: 'destructive' });
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem('suncoin_contacts') || '[]');
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem('suncoin_contacts', JSON.stringify(existing));
    } catch (_err) {
      // ignore
    }
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out \u2014 we'll follow up shortly.",
    });
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: 'Wash & Fold',
      message: '',
    });
  };

  return (
    <section className="bg-[#faf9f5]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12 pt-16 md:pt-20 pb-24 md:pb-32">
        <Reveal>
          <div className="flex items-center gap-3 text-[#0a0a0a]/60 text-[13px] tracking-[0.2em] uppercase mb-6">
            <span className="inline-block w-6 h-[2px] bg-[#0a0a0a]/30" />
            Contact
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="font-display text-[#0a0a0a] text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] leading-[0.95]">
            Let&apos;s talk{' '}
            <span className="font-serif-italic font-normal">laundry.</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 text-[#0a0a0a]/70 text-[17px] md:text-[19px] leading-[1.6] max-w-[560px]">
            Questions about wash &amp; fold, commercial pickup, or hours? Fill out the form
            and we&apos;ll be in touch shortly.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* Left: form */}
          <Reveal>
            <div className="bg-white border border-black/5 rounded-[24px] p-7 md:p-10 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] mb-2 text-[#0a0a0a]/70" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                      First name <span className="text-[#0a0a0a]/40">(required)</span>
                    </label>
                    <input name="firstName" value={form.firstName} onChange={onChange} className="m-input" required />
                  </div>
                  <div>
                    <label className="block text-[13px] mb-2 text-[#0a0a0a]/70" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                      Last name <span className="text-[#0a0a0a]/40">(required)</span>
                    </label>
                    <input name="lastName" value={form.lastName} onChange={onChange} className="m-input" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] mb-2 text-[#0a0a0a]/70" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                      Email <span className="text-[#0a0a0a]/40">(required)</span>
                    </label>
                    <input name="email" type="email" value={form.email} onChange={onChange} className="m-input" required />
                  </div>
                  <div>
                    <label className="block text-[13px] mb-2 text-[#0a0a0a]/70" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                      Phone
                    </label>
                    <input name="phone" value={form.phone} onChange={onChange} className="m-input" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] mb-2 text-[#0a0a0a]/70" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                    Service
                  </label>
                  <select name="service" value={form.service} onChange={onChange} className="m-input">
                    <option>Self-Service Laundry</option>
                    <option>Wash &amp; Fold</option>
                    <option>Commercial Laundry</option>
                    <option>Other / General question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] mb-2 text-[#0a0a0a]/70" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}>
                    Message <span className="text-[#0a0a0a]/40">(required)</span>
                  </label>
                  <textarea name="message" value={form.message} onChange={onChange} className="m-input m-textarea" required />
                </div>

                <div className="pt-2">
                  <button type="submit" className="pill pill-dark btn-cta w-full md:w-auto justify-center">
                    Send message
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          {/* Right: image + quick info */}
          <Reveal delay={120}>
            <div className="flex flex-col gap-6">
              <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[4/3] lg:aspect-[4/5] img-zoom">
                <img
                  src={contactImage}
                  alt="Laundromat interior"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: <MapPin size={16} />, top: 'Visit', line: `${site.address}, ${site.city}` },
                  { icon: <Phone size={16} />, top: 'Call', line: site.phone },
                  { icon: <Mail size={16} />, top: 'Email', line: site.email },
                ].map((b) => (
                  <div
                    key={b.top}
                    className="bg-white border border-black/5 rounded-2xl p-5 flex items-start gap-3"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#fdce21] text-[#0a0a0a] inline-flex items-center justify-center shrink-0">
                      {b.icon}
                    </span>
                    <div>
                      <div
                        className="text-[11px] tracking-[0.18em] uppercase text-[#0a0a0a]/55"
                        style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
                      >
                        {b.top}
                      </div>
                      <div className="text-[#0a0a0a] text-[14px] mt-1 leading-snug">
                        {b.line}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
