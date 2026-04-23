// Mock data for Sun Coin Laundry clone

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
  perks: ['Clean Facility', 'Large-Capacity Machines'],
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Self-Service Laundry', href: '/#self-service' },
  { label: 'Wash & Fold', href: '/#wash-and-fold' },
  { label: 'Commercial Laundry', href: '/#commercial' },
  { label: 'Contact', href: '/contact' },
];

export const heroImage =
  'https://images.unsplash.com/photo-1657064575960-efefbe831c2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxjb21tZXJjaWFsJTIwbGF1bmRyb21hdCUyMHdhc2hlcnN8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzc2OTEwNzg2fDA&ixlib=rb-4.1.0&q=85';

export const contactImage =
  'https://images.unsplash.com/photo-1580175767167-8cd2e8a992f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwxfHxsYXVuZHJvbWF0JTIwbmlnaHR8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzc2OTEwODAwfDA&ixlib=rb-4.1.0&q=85';

export const services = [
  {
    id: 'self-service',
    title: 'Self-Service Laundry',
    image:
      'https://images.unsplash.com/photo-1765163076573-26499e530ec8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxsYXVuZHJvbWF0JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc2OTEwNzkwfDA&ixlib=rb-4.1.0&q=85',
    blurb:
      'Wash and dry your clothes on your schedule using our brand-new, large-capacity machines. Perfect for everyday laundry, bulky items, and families who want fast results in a clean, comfortable space.',
    highlightsTitle: 'Highlights:',
    highlights: [
      'Brand-new commercial washers & dryers',
      'Large-capacity machines for comforters & bulk loads',
      'Clean, well-lit facility',
      'Open 7 days a week',
    ],
    cta: { label: 'GET DIRECTIONS', kind: 'directions' },
  },
  {
    id: 'wash-and-fold',
    title: 'Wash and Fold',
    image:
      'https://images.unsplash.com/photo-1630329273801-8f629dba0a72?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxmb2xkZWQlMjBsYXVuZHJ5fGVufDB8fHx8MTc3NjkxMDc5NHww&ixlib=rb-4.1.0&q=85',
    blurb:
      "Short on time? Drop off your laundry and let us handle the rest. Our wash & fold service is convenient, reliable, and perfect for busy individuals and families.",
    sub: 'Simply drop off your laundry and we’ll wash, dry, and neatly fold it for you. Your clothes are handled with care using high-quality detergents and professional equipment.',
    highlightsTitle: 'Highlights:',
    highlights: [
      'Convenient drop-off service',
      'Clean, neatly folded laundry',
      'Ideal for busy schedules',
      'Great for everyday clothing',
    ],
    cta: { label: 'BOOK NOW', kind: 'book' },
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    image:
      'https://images.unsplash.com/photo-1765021690100-db6d6a28c1d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwaW5kdXN0cmlhbCUyMGxhdW5kcnl8ZW58MHx8fHwxNzc2OTEwNzk2fDA&ixlib=rb-4.1.0&q=85',
    blurb:
      'Reliable laundry solutions for local businesses that need consistent, professional results.',
    sub: 'We provide commercial laundry services for businesses that require clean, dependable turnaround. Whether you operate a salon, restaurant, gym, or small business, we can help keep your linens fresh and ready.',
    idealTitle: 'Ideal For:',
    ideal: [
      'Restaurants & cafés',
      'Salons & barbershops',
      'Gyms & fitness studios',
      'Small businesses & offices',
    ],
    highlightsTitle: 'Highlights:',
    highlights: [
      'Large-capacity commercial machines',
      'Flexible scheduling',
      'Reliable, consistent service',
      'Local, dependable operation',
    ],
    cta: { label: 'REQUEST SERVICES', kind: 'contact' },
  },
];
