import { Clock, MapPin, Star, DollarSign } from 'lucide-react';
import { mockJobs } from '../data/mockJobs';

interface JobListingsProps {
  onViewJob: (jobId: string) => void;
}

export function JobListings({ onViewJob }: JobListingsProps) {
  const featuredJobs = mockJobs.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Jobs</h2>
            <p className="text-gray-600">Top opportunities available now</p>
          </div>
          <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-500 transition-all duration-300 cursor-pointer"
              onClick={() => onViewJob(job.id)}
            >
              {/* Job Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.timePosted}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.clientLocation}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-emerald-600">{job.budget}</div>
                  <div className="text-xs text-gray-500 capitalize">{job.budgetType}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.skillsRequired.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {job.skillsRequired.length > 4 && (
                  <span className="px-3 py-1 text-gray-500 text-sm">
                    +{job.skillsRequired.length - 4} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{job.clientRating}</span>
                    <span className="text-sm text-gray-500">({job.clientReviews})</span>
                  </div>
                  <div className="text-sm text-gray-600">{job.clientSpent} spent</div>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">{job.proposals}</span> proposals
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
