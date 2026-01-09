import { Star, MapPin, CheckCircle, Award } from 'lucide-react';
import { mockFreelancers } from '../data/mockFreelancers';

export function FreelancerShowcase() {
  const topFreelancers = mockFreelancers.filter(f => f.topRated).slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Rated Freelancers</h2>
            <p className="text-gray-600">Hire the best talent for your projects</p>
          </div>
          <button className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-emerald-500 transition-all duration-300 cursor-pointer"
            >
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={freelancer.imageUrl}
                  alt={freelancer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{freelancer.name}</h3>
                    {freelancer.verified && (
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{freelancer.title}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {freelancer.location}
                  </div>
                </div>
              </div>

              {/* Top Rated Badge */}
              {freelancer.topRated && (
                <div className="flex items-center gap-1 mb-3 px-3 py-1 bg-amber-50 text-amber-700 text-sm rounded-full w-fit">
                  <Award className="w-4 h-4" />
                  Top Rated
                </div>
              )}

              {/* Description */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                {freelancer.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {freelancer.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {freelancer.skills.length > 3 && (
                  <span className="px-3 py-1 text-gray-500 text-xs">
                    +{freelancer.skills.length - 3}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-gray-900">{freelancer.rating}</span>
                  <span className="text-sm text-gray-500">({freelancer.reviews})</span>
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  {freelancer.hourlyRate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
