import React, { useState } from 'react';
import { contactImage } from '../mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
      existing.push({ ...form, ts: new Date().toISOString(), page: 'contact' });
      localStorage.setItem('suncoin_contacts', JSON.stringify(existing));
    } catch (_e) {
      // noop
    }
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out \u2014 we'll be in touch shortly.",
    });
    setForm({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className="bg-[#f4f4f2]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: form */}
        <div>
          <h1
            className="display-heading text-[#0a0a0a] text-[56px] md:text-[84px] lg:text-[112px] leading-[0.95]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
          >
            Contact Us
          </h1>
          <p className="mt-8 text-[#0a0a0a] text-[17px] md:text-[18px] leading-[1.6] max-w-[520px]">
            Let people know what to reach out about and what to expect after contacting you.
          </p>

          <div className="mt-6 text-[#0a0a0a] text-[16px] leading-[1.9]">
            <a
              href="mailto:suncoin4195@icloud.com"
              className="underline underline-offset-4 hover:text-black"
            >
              suncoin4195@icloud.com
            </a>
            <br />
            <a href="tel:6785555555" className="hover:underline">
              (678)-555-5555
            </a>
          </div>

          <form onSubmit={onSubmit} className="mt-10 space-y-6 max-w-[620px]">
            <div>
              <label
                className="block text-[#0a0a0a] text-[15px] mb-4"
                style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}
              >
                Name
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    className="scp-input"
                    required
                  />
                  <p className="mt-2 text-[12px] text-[#0a0a0a]">
                    <span style={{ fontWeight: 600 }}>First Name</span>{' '}
                    <span className="text-[#0a0a0a]/70">(required)</span>
                  </p>
                </div>
                <div>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    className="scp-input"
                    required
                  />
                  <p className="mt-2 text-[12px] text-[#0a0a0a]">
                    <span style={{ fontWeight: 600 }}>Last Name</span>{' '}
                    <span className="text-[#0a0a0a]/70">(required)</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label
                className="block text-[#0a0a0a] text-[15px] mb-3"
                style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}
              >
                Email <span className="text-[#0a0a0a]/70 font-normal">(required)</span>
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                className="scp-input"
                required
              />
            </div>

            <div>
              <label
                className="block text-[#0a0a0a] text-[15px] mb-3"
                style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600 }}
              >
                Message <span className="text-[#0a0a0a]/70 font-normal">(required)</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                className="scp-textarea"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#0a0a0a] text-white btn-cta px-10 py-4 hover:bg-[#1a1a1a] transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right: image */}
        <div className="lg:sticky lg:top-6">
          <img
            src={contactImage}
            alt="Laundromat interior"
            className="w-full h-[360px] md:h-[520px] lg:h-[720px] object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
