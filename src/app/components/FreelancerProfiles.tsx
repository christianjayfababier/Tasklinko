import { useMemo, useState } from 'react';
import { Search, Filter, Star, MapPin, CheckCircle, Award, Briefcase, ChevronDown } from 'lucide-react';
import { mockFreelancers } from '../data/mockFreelancers';

export function FreelancerProfiles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Aligned with your property / real-estate service marketplace
  const categories = [
    'All',
    'Property Maintenance',
    'Handyman Services',
    'Plumbing Services',
    'Housekeeping & Cleaning',
    'Electrical Services',
    'Gardening & Landscaping',
    'Pest Control',
    'Safety & Compliance',
  ];

  const filteredFreelancers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return mockFreelancers.filter((freelancer) => {
      const matchesSearch =
        q.length === 0 ||
        freelancer.name.toLowerCase().includes(q) ||
        freelancer.title.toLowerCase().includes(q) ||
        freelancer.location.toLowerCase().includes(q) ||
        freelancer.skills.some((skill) => skill.toLowerCase().includes(q));

      // Category match based on title/skills (since your Freelancer model has no "category" field)
      const c = selectedCategory.toLowerCase();
      const haystack = `${freelancer.title} ${freelancer.skills.join(' ')}`.toLowerCase();

      const matchesCategory =
        selectedCategory === 'All' ||
        (c.includes('property maintenance') && (haystack.includes('maintenance') || haystack.includes('inspection') || haystack.includes('repairs'))) ||
        (c.includes('handyman') && (haystack.includes('handyman') || haystack.includes('repairs') || haystack.includes('carpentry') || haystack.includes('drywall'))) ||
        (c.includes('plumbing') && (haystack.includes('plumb') || haystack.includes('leak') || haystack.includes('drain') || haystack.includes('hot water'))) ||
        (c.includes('housekeeping') && (haystack.includes('clean') || haystack.includes('end-of-lease') || haystack.includes('deep cleaning'))) ||
        (c.includes('electrical') && (haystack.includes('electric') || haystack.includes('smoke alarm') || haystack.includes('safety'))) ||
        (c.includes('gardening') && (haystack.includes('lawn') || haystack.includes('garden') || haystack.includes('pruning') || haystack.includes('landscap'))) ||
        (c.includes('pest') && (haystack.includes('pest') || haystack.includes('inspection') || haystack.includes('treatment'))) ||
        (c.includes('safety') && (haystack.includes('compliance') || haystack.includes('safety') || haystack.includes('smoke alarm') || haystack.includes('report')));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Local Professionals</h1>
         

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, skill, service, or location (e.g., plumber, end-of-lease, Sydney)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors md:hidden"
          >
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mt-4`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick Clear */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Clear filters
              </button>

              {(selectedCategory !== 'All' || searchQuery.trim().length > 0) && (
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium text-gray-900">{selectedCategory}</span>
                  {searchQuery.trim().length > 0 ? (
                    <>
                      {' '}
                      • Search: <span className="font-medium text-gray-900">“{searchQuery.trim()}”</span>
                    </>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredFreelancers.length}{' '}
            {filteredFreelancers.length === 1 ? 'professional' : 'professionals'} found
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-500 transition-all duration-300 cursor-pointer"
            >
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={freelancer.imageUrl}
                  alt={freelancer.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-gray-900">{freelancer.name}</h3>
                    {freelancer.verified && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <p className="text-gray-600 mb-2">{freelancer.title}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {freelancer.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-600">{freelancer.hourlyRate}</div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.topRated && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full">
                    <Award className="w-4 h-4" />
                    Top Rated
                  </div>
                )}
                <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                  <Briefcase className="w-4 h-4" />
                  {freelancer.completedJobs} Jobs
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4">{freelancer.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-lg font-medium text-gray-900">{freelancer.rating}</span>
                  <span className="text-sm text-gray-500">({freelancer.reviews} reviews)</span>
                </div>
                <button className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                  Hire Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredFreelancers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No professionals found matching your criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
