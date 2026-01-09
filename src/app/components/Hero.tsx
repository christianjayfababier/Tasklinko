import { Search, ClipboardCheck, Wrench, ShieldCheck } from 'lucide-react';
import { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hire trusted
            <span className="text-emerald-600"> property service </span>
            professionals in Australia
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            From handyman repairs and plumbing to end-of-lease cleaning and compliance checks — find reliable pros for
            rentals, strata, and managed properties.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services (e.g., plumber, end-of-lease cleaning, electrician, pest control)"
                className="w-full pl-12 pr-28 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mb-12">
            <p className="text-sm text-gray-600 mb-3">Popular:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                'Handyman',
                'Plumber',
                'End-of-lease cleaning',
                'Electrician',
                'Gardening',
                'Pest control',
                'Smoke alarm compliance',
                'Routine maintenance',
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('browse-jobs')}
              className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Find Work
            </button>
            <button
              onClick={() => onNavigate('freelancers')}
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Find Professionals
            </button>
          </div>

          {/* Trust / Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <Wrench className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-600">Property Service Jobs</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <ClipboardCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5K+</div>
              <div className="text-sm text-gray-600">Verified Local Pros</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
