export interface Freelancer {
  id: string;
  name: string;
  title: string;
  description: string;
  hourlyRate: string;
  rating: number;
  reviews: number;
  completedJobs: number;
  skills: string[];
  location: string;
  imageUrl: string;
  verified: boolean;
  topRated: boolean;
}

export const mockFreelancers: Freelancer[] = [
  {
    id: '1',
    name: 'Daniel Wright',
    title: 'Licensed Handyman & Property Maintenance Specialist',
    description:
      'Reliable handyman with 10+ years of experience maintaining residential and strata properties. Skilled in general repairs, carpentry, fixture replacements, and preventative maintenance for long-term property care.',
    hourlyRate: '$65/hr',
    rating: 4.9,
    reviews: 142,
    completedJobs: 318,
    skills: ['General Repairs', 'Carpentry', 'Drywall Repair', 'Preventative Maintenance', 'Property Inspections'],
    location: 'Sydney, NSW',
    imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400',
    verified: true,
    topRated: true,
  },
  {
    id: '2',
    name: 'Liam O’Connor',
    title: 'Licensed Residential Plumber',
    description:
      'Fully licensed plumber specializing in residential and rental properties. Experienced in leak detection, tap and valve replacement, hot water systems, and emergency call-outs for property managers.',
    hourlyRate: '$90/hr',
    rating: 5.0,
    reviews: 96,
    completedJobs: 211,
    skills: ['Leak Detection', 'Tap Replacement', 'Hot Water Systems', 'Blocked Drains', 'Compliance Work'],
    location: 'Melbourne, VIC',
    imageUrl: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400',
    verified: true,
    topRated: true,
  },
  {
    id: '3',
    name: 'Emily Carter',
    title: 'Professional Housekeeping & End-of-Lease Cleaner',
    description:
      'Detail-oriented cleaner providing end-of-lease, inspection, and routine cleaning services. Known for thorough work, reliable scheduling, and consistent results for property managers and landlords.',
    hourlyRate: '$45/hr',
    rating: 4.8,
    reviews: 118,
    completedJobs: 402,
    skills: ['End-of-Lease Cleaning', 'Deep Cleaning', 'Inspection Cleaning', 'Time Management', 'Detail-Oriented'],
    location: 'Brisbane, QLD',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400',
    verified: true,
    topRated: false,
  },
  {
    id: '4',
    name: 'Mark Sullivan',
    title: 'Qualified Electrician & Safety Compliance Technician',
    description:
      'Certified electrician focused on residential safety checks, smoke alarm compliance, and fault finding. Experienced working with property managers to ensure all homes meet legal requirements.',
    hourlyRate: '$110/hr',
    rating: 4.9,
    reviews: 73,
    completedJobs: 165,
    skills: ['Electrical Safety Checks', 'Smoke Alarm Compliance', 'Fault Finding', 'Testing & Tagging', 'Reporting'],
    location: 'Perth, WA',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    verified: true,
    topRated: false,
  },
  {
    id: '5',
    name: 'Olivia Bennett',
    title: 'Gardener & Landscaping Maintenance Specialist',
    description:
      'Experienced gardener providing ongoing lawn care, pruning, and seasonal clean-ups for rental homes and strata properties. Known for consistency, punctuality, and neat presentation.',
    hourlyRate: '$50/hr',
    rating: 4.7,
    reviews: 89,
    completedJobs: 274,
    skills: ['Lawn Mowing', 'Pruning', 'Weed Control', 'Garden Clean-Ups', 'Seasonal Maintenance'],
    location: 'Adelaide, SA',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    verified: true,
    topRated: false,
  },
  {
    id: '6',
    name: 'Nathan Brooks',
    title: 'Licensed Pest Control Technician',
    description:
      'Professional pest control technician specializing in residential and rental properties. Provides safe, effective treatments with detailed reports and prevention advice for tenants and property managers.',
    hourlyRate: '$75/hr',
    rating: 5.0,
    reviews: 61,
    completedJobs: 143,
    skills: ['Pest Inspections', 'Treatment Plans', 'Preventative Solutions', 'Safe Chemical Use', 'Documentation'],
    location: 'Gold Coast, QLD',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    verified: true,
    topRated: true,
  },
];
