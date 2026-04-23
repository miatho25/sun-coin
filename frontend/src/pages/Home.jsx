import React from 'react';
import { Award } from 'lucide-react';
import { site, heroImage, services } from '../mock';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

const AwardRibbon = () => (
  // Stylized award ribbon matching the original gold/black rosette vibe
  <div className="relative w-16 h-20" aria-hidden="true">
    <svg viewBox="0 0 80 110" width="64" height="88">
      {/* rosette */}
      <circle cx="40" cy="38" r="26" fill="#111" />
      <circle cx="40" cy="38" r="22" fill="#E2B43A" />
      <circle cx="40" cy="38" r="17" fill="#111" />
      <circle cx="40" cy="38" r="13" fill="#E2B43A" />
      {/* star */}
      <polygon
        points="40,29 42,36 49,36 43,40 45,47 40,43 35,47 37,40 31,36 38,36"
        fill="#111"
      />
      {/* ribbons */}
      <polygon points="26,60 20,105 34,92 40,100 40,64" fill="#111" />
      <polygon points="54,60 60,105 46,92 40,100 40,64" fill="#E2B43A" />
    </svg>
  </div>
);

const Hero = () => (
  <section className="bg-[#fdce21]">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
      {/* Left column */}
      <div className="px-6 md:px-12 lg:px-20 xl:px-28 py-16 md:py-24 lg:py-28 flex flex-col justify-center">
        <div className="flex items-center gap-5 mb-8">
          <AwardRibbon />
          <p
            className="eyebrow text-[#0a0a0a] text-[15px] md:text-[16px]"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            {site.badge}
          </p>
        </div>

        <h1
          className="display-heading text-[#0a0a0a] text-[44px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
          style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
        >
          {site.tagline}
        </h1>

        <p className="mt-8 text-[#0a0a0a] text-[17px] md:text-[18px] leading-[1.65] max-w-[520px]">
          {site.description}
        </p>

        <div className="mt-10 space-y-4">
          <p
            className="text-[#0a0a0a] text-[20px] md:text-[22px]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
          >
            {site.hours}
          </p>
          <p
            className="text-[#0a0a0a] text-[17px] md:text-[18px]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
          >
            {site.perks.join(' \u2022 ')}
          </p>
        </div>

        <div className="mt-12">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-[#0a0a0a] text-[#fdce21] btn-cta px-10 py-5 hover:bg-[#1a1a1a] transition-colors"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-auto min-h-[500px]">
        <img
          src={heroImage}
          alt="Commercial laundromat washing machines"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.05)' }}
        />
      </div>
    </div>
  </section>
);

const ServiceBlock = ({ service, index, onCta }) => {
  const reverse = index % 2 === 1;
  return (
    <div
      id={service.id}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center py-14 md:py-20"
    >
      <div
        className={`order-1 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[300px] md:h-[420px] lg:h-[480px] object-cover"
          style={{ filter: 'grayscale(100%)' }}
        />
      </div>
      <div
        className={`order-2 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <h3
          className="display-heading text-[#0a0a0a] text-[34px] md:text-[44px] lg:text-[52px] mb-6"
          style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
        >
          {service.title}
        </h3>
        <p className="text-[#0a0a0a] text-[16px] md:text-[17px] leading-[1.7] max-w-[560px]">
          {service.blurb}
        </p>
        {service.sub && (
          <p className="mt-5 text-[#0a0a0a] text-[16px] md:text-[17px] leading-[1.7] max-w-[560px]">
            {service.sub}
          </p>
        )}

        {service.ideal && (
          <div className="mt-7">
            <p
              className="text-[#0a0a0a] mb-2 text-[16px]"
              style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
            >
              {service.idealTitle}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0a0a0a] text-[16px]">
              {service.ideal.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-7">
          <p
            className="text-[#0a0a0a] mb-2 text-[16px]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700 }}
          >
            {service.highlightsTitle}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[#0a0a0a] text-[16px]">
            {service.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="mt-9">
          <button
            onClick={() => onCta(service.cta)}
            className="inline-flex items-center justify-center bg-[#0a0a0a] text-[#fdce21] btn-cta px-9 py-5 hover:bg-[#1a1a1a] transition-colors"
          >
            {service.cta.label}
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCta = (cta) => {
    if (cta.kind === 'directions') {
      window.open(site.directionsUrl, '_blank');
    } else if (cta.kind === 'book') {
      document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cta.kind === 'contact') {
      navigate('/contact');
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <div className="mb-10 md:mb-16 max-w-[900px]">
          <h2
            className="display-heading text-[#0a0a0a] text-[44px] md:text-[64px] lg:text-[76px]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
          >
            Our Services
          </h2>
          <p className="mt-6 text-[#0a0a0a] text-[18px] md:text-[20px] leading-[1.5] max-w-[720px]">
            Everything you need to get your laundry done quickly and comfortably.
          </p>
        </div>

        <div className="divide-y divide-[#eee]">
          {services.map((s, i) => (
            <ServiceBlock key={s.id} service={s} index={i} onCta={handleCta} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookSection = () => {
  const { toast } = useToast();
  return (
    <section id="book" className="bg-[#f4f4f2]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2
            className="display-heading text-[#0a0a0a] text-[40px] md:text-[56px] lg:text-[64px]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
          >
            Book an Appointment Today!
          </h2>
          <p className="mt-8 text-[#0a0a0a] text-[17px] md:text-[18px] leading-[1.7] max-w-[560px]">
            Schedule your laundry service quickly and easily. Select the service you need below
            and we&apos;ll take care of the rest. For wash & fold or commercial laundry, booking helps
            us prepare your order and ensure fast turnaround.
          </p>
        </div>
        <div className="flex lg:justify-start">
          <button
            onClick={() =>
              toast({
                title: 'Appointment request received',
                description:
                  "Thanks! We'll follow up to confirm your booking shortly.",
              })
            }
            className="inline-flex items-center justify-center bg-[#0a0a0a] text-white btn-cta px-12 py-6 hover:bg-[#1a1a1a] transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

const ContactMini = () => {
  const { toast } = useToast();
  const [form, setForm] = React.useState({
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
    // Store locally (mock)
    try {
      const existing = JSON.parse(localStorage.getItem('suncoin_contacts') || '[]');
      existing.push({ ...form, ts: new Date().toISOString() });
      localStorage.setItem('suncoin_contacts', JSON.stringify(existing));
    } catch (e) {
      // ignore
    }
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out \u2014 we'll be in touch shortly.",
    });
    setForm({ firstName: '', lastName: '', email: '', message: '' });
  };

  return (
    <section className="bg-[#f4f4f2]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <h2
            className="display-heading text-[#0a0a0a] text-[44px] md:text-[64px] lg:text-[72px]"
            style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 800 }}
          >
            Contact Us
          </h2>
          <p className="mt-8 text-[#0a0a0a] text-[17px] md:text-[18px] leading-[1.7] max-w-[520px]">
            Interested in working together? Fill out some info and we will be in touch shortly.
            We can&apos;t wait to hear from you!
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
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
                  aria-label="First Name"
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
                  aria-label="Last Name"
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
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <BookSection />
      <ContactMini />
    </>
  );
};

export default Home;
