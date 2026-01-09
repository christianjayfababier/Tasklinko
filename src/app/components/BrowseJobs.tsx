import { useMemo, useState } from 'react';
import { Search, Filter, Clock, MapPin, Star, ChevronDown } from 'lucide-react';
import { mockJobs } from '../data/mockJobs';

interface BrowseJobsProps {
  onViewJob: (jobId: string) => void;
}

export function BrowseJobs({ onViewJob }: BrowseJobsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedExperience, setSelectedExperience] = useState('All');
  const [selectedBudgetType, setSelectedBudgetType] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // ✅ Aligned with your new property-services categories
  const categories = [
    'All',
    'Property Maintenance',
    'Handyman Services',
    'Plumbing Services',
    'Housekeeping',
    'Electrical Services',
    'Gardening & Landscaping',
    'Pest Control',
    'Safety & Compliance',
  ];

  // ✅ Match your data (job.experienceLevel = 'entry' | 'intermediate' | 'expert')
  const experienceLevels = ['All', 'Entry', 'Intermediate', 'Expert'];

  // ✅ Match your data (job.budgetType = 'fixed' | 'hourly')
  const budgetTypes = ['All', 'Fixed', 'Hourly'];

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const q = searchQuery.trim().toLowerCase();

      const matchesSearch =
        q.length === 0 ||
        job.title.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        job.skillsRequired.some((s) => s.toLowerCase().includes(q)) ||
        job.clientLocation.toLowerCase().includes(q);

      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;

      const matchesExperience =
        selectedExperience === 'All' || job.experienceLevel === selectedExperience.toLowerCase();

      const matchesBudgetType =
        selectedBudgetType === 'All' || job.budgetType === selectedBudgetType.toLowerCase();

      return matchesSearch && matchesCategory && matchesExperience && matchesBudgetType;
    });
  }, [searchQuery, selectedCategory, selectedExperience, selectedBudgetType]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Property Service Jobs</h1>
        

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search (e.g., plumber, end-of-lease, smoke alarm, Sydney, pest control)..."
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Experience Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Type</label>
                <select
                  value={selectedBudgetType}
                  onChange={(e) => setSelectedBudgetType(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {budgetTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Clear */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedExperience('All');
                  setSelectedBudgetType('All');
                }}
                className="text-sm font-medium text-emerald-700 hover:text-emerald-800"
              >
                Clear filters
              </button>

              {(selectedCategory !== 'All' || selectedExperience !== 'All' || selectedBudgetType !== 'All') && (
                <div className="text-sm text-gray-500">
                  Showing{' '}
                  <span className="font-medium text-gray-900">{selectedCategory}</span>
                  {selectedExperience !== 'All' ? (
                    <>
                      {' '}
                      • <span className="font-medium text-gray-900">{selectedExperience}</span>
                    </>
                  ) : null}
                  {selectedBudgetType !== 'All' ? (
                    <>
                      {' '}
                      • <span className="font-medium text-gray-900">{selectedBudgetType}</span>
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
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
          </p>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-500 transition-all duration-300 cursor-pointer"
              onClick={() => onViewJob(job.id)}
            >
              {/* Job Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                    {job.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.timePosted}
                    </span>

                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.clientLocation}
                    </span>

                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {job.category}
                    </span>

                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs capitalize">
                      {job.experienceLevel} level
                    </span>
                  </div>
                </div>

                <div className="text-left lg:text-right">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{job.budget}</div>
                  <div className="text-sm text-gray-500 capitalize">{job.budgetType} price</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4">{job.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skillsRequired.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-200 gap-4">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium text-gray-900">{job.clientRating}</span>
                    <span className="text-gray-500">({job.clientReviews} reviews)</span>
                  </div>
                  <div className="text-gray-600">{job.clientSpent} spent</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{job.proposals}</span> proposals
                  </div>
                  <button className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedExperience('All');
                  setSelectedBudgetType('All');
                }}
                className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
