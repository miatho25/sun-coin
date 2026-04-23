// Mock data for Sun Coin Laundry clone (modern refresh)

export const site = {
  name: 'Sun Coin Laundry',
  tagline: 'Clean, Fast & Reliable Laundromat in Forest Park',
  description:
    'Brand-new machines, large-capacity washers, and a clean, comfortable space to get your laundry done fast.',
  badge: 'Voted Top 3 Laundromat in Forest Park',
  address: '4195 Jonesboro Rd.',
  city: 'Forest Park, GA 30297',
  email: 'suncoin4195@icloud.com',
  phone: '(678)-555-5555',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=4195+Jonesboro+Rd,+Forest+Park,+GA+30297',
  hours: 'Open 7 Days',
  hoursDetail: '6:00 AM – 11:00 PM',
  perks: ['Clean Facility', 'Large-Capacity Machines'],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
];

export const marqueeItems = [
  'Open 7 Days',
  'Voted Top 3 in Forest Park',
  'Brand-new machines',
  'Wash • Dry • Fold',
  'Large-capacity washers',
  'Commercial laundry',
  'Drop-off service',
  'Clean & well-lit',
];

export const stats = [
  { value: '50+', label: 'Commercial machines' },
  { value: '4.9', label: 'Average rating', suffix: '★' },
  { value: '7', label: 'Days a week open' },
  { value: '15', label: 'Min wash cycles', suffix: 'min' },
];

export const heroImage =
  'https://images.unsplash.com/photo-1657064575960-efefbe831c2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwbGF1bmRyb21hdCUyMHdhc2hlcnN8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzc2OTEwNzg2fDA&ixlib=rb-4.1.0&q=85';

export const contactImage =
  'https://images.unsplash.com/photo-1580175767167-8cd2e8a992f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxsYXVuZHJvbWF0JTIwbmlnaHR8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzc2OTEwODAwfDA&ixlib=rb-4.1.0&q=85';

export const services = [
  {
    id: 'self-service',
    number: '01',
    title: 'Self-Service Laundry',
    image:
      'https://images.unsplash.com/photo-1765163076573-26499e530ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxsYXVuZHJvbWF0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc2OTEwNzkwfDA&ixlib=rb-4.1.0&q=85',
    blurb:
      'Wash and dry on your schedule using brand-new, large-capacity machines. Perfect for everyday, bulky items and families.',
    highlights: [
      'Brand-new commercial washers & dryers',
      'Large-capacity for comforters & bulk loads',
      'Clean, well-lit facility',
      'Open 7 days a week',
    ],
    cta: { label: 'Get Directions', kind: 'directions' },
  },
  {
    id: 'wash-and-fold',
    number: '02',
    title: 'Wash & Fold',
    image:
      'https://images.unsplash.com/photo-1630329273801-8f629dba0a72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxmb2xkZWQlMjBsYXVuZHJ5fGVufDB8fHx8MTc3NjkxMDc5NHww&ixlib=rb-4.1.0&q=85',
    blurb:
      'Short on time? Drop off your laundry and let us handle the rest. Convenient, reliable, perfect for busy families.',
    highlights: [
      'Convenient drop-off service',
      'Cleaned and neatly folded',
      'Ideal for busy schedules',
      'High-quality detergents',
    ],
    cta: { label: 'Book Now', kind: 'book' },
  },
  {
    id: 'commercial',
    number: '03',
    title: 'Commercial Laundry',
    image:
      'https://images.unsplash.com/photo-1765021690100-db6d6a28c1d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwaW5kdXN0cmlhbCUyMGxhdW5kcnl8ZW58MHx8fHwxNzc2OTEwNzk2fDA&ixlib=rb-4.1.0&q=85',
    blurb:
      'Reliable laundry solutions for restaurants, gyms, salons, and small businesses. Consistent, professional turnaround.',
    highlights: [
      'Restaurants, cafés & salons',
      'Gyms & fitness studios',
      'Flexible scheduling',
      'Dependable local service',
    ],
    cta: { label: 'Request Service', kind: 'contact' },
  },
];

export const howSteps = [
  {
    num: '01',
    title: 'Bring Your Laundry',
    desc: 'Walk in anytime between 6 AM and 11 PM — no appointment needed for self-service.',
  },
  {
    num: '02',
    title: 'Wash & Dry Fast',
    desc: 'Load our brand-new high-capacity machines. Most cycles finish in 15–30 minutes.',
  },
  {
    num: '03',
    title: 'Fold & Go',
    desc: 'Use our clean, well-lit folding stations — or drop off and let us do it for you.',
  },
];

export const testimonials = [
  {
    name: 'Jasmine R.',
    role: 'Regular customer',
    quote:
      'Hands down the cleanest laundromat in Forest Park. Machines are new, fast, and the space always feels safe.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    role: 'Restaurant owner',
    quote:
      'Their commercial service keeps our linens fresh every week. Reliable pickup and a spotless fold every time.',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Busy mom',
    quote:
      'Wash & fold has been a lifesaver. Clothes come back smelling amazing, folded perfectly. Worth every penny.',
    rating: 5,
  },
];

export const faqs = [
  {
    q: 'What are your hours?',
    a: 'We are open 7 days a week, from 6:00 AM to 11:00 PM. Last wash accepted one hour before closing.',
  },
  {
    q: 'Do you accept credit cards?',
    a: 'Yes — our machines accept coins, loadable laundry cards, and major credit/debit cards.',
  },
  {
    q: 'How long does wash & fold take?',
    a: 'Standard turnaround is 24 hours. Same-day service is available if dropped off before 10 AM.',
  },
  {
    q: 'Do you handle commercial accounts?',
    a: 'Absolutely. We partner with restaurants, salons, gyms, and small businesses. Contact us for pricing.',
  },
  {
    q: 'Is the facility safe and clean?',
    a: 'Yes — the facility is cleaned multiple times daily, well-lit, and monitored by security cameras.',
  },
];
