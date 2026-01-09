import { ArrowLeft, Clock, MapPin, Star, DollarSign, Briefcase, Award } from 'lucide-react';
import { mockJobs } from '../data/mockJobs';

interface JobDetailsProps {
  jobId: string;
  onBack: () => void;
}

export function JobDetails({ jobId, onBack }: JobDetailsProps) {
  const job = mockJobs.find(j => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">Job not found</p>
          <button
            onClick={onBack}
            className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to jobs
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Posted {job.timePosted}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.clientLocation}
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium capitalize">
                  {job.experienceLevel} Level
                </span>
              </div>

              <div className="flex items-center gap-6 pb-4 border-b border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-emerald-600">{job.budget}</div>
                  <div className="text-sm text-gray-500 capitalize">{job.budgetType} Price</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{job.proposals}</div>
                  <div className="text-sm text-gray-500">Proposals</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
            </div>

            {/* Skills Required */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills Required</h2>
              <div className="flex flex-wrap gap-3">
                {job.skillsRequired.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Activity on this Job</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Proposals:</span>
                  <span className="font-medium text-gray-900">{job.proposals}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last viewed by client:</span>
                  <span className="font-medium text-gray-900">1 hour ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interviewing:</span>
                  <span className="font-medium text-gray-900">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Invites sent:</span>
                  <span className="font-medium text-gray-900">5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <button className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors mb-4">
                Apply Now
              </button>
              <button className="w-full px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-colors">
                Save Job
              </button>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500 mb-2">Send a proposal for:</div>
                <div className="text-xl font-bold text-emerald-600">{job.budget}</div>
              </div>
            </div>

            {/* Client Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">About the Client</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium text-gray-900">{job.clientRating}</span>
                    <span className="text-sm text-gray-500">({job.clientReviews} reviews)</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="flex items-center gap-1 text-gray-900">
                    <MapPin className="w-4 h-4" />
                    {job.clientLocation}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Total Spent</div>
                  <div className="flex items-center gap-1 text-gray-900 font-medium">
                    <DollarSign className="w-4 h-4" />
                    {job.clientSpent}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Jobs Posted</div>
                  <div className="flex items-center gap-1 text-gray-900">
                    <Briefcase className="w-4 h-4" />
                    23 jobs
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Hire Rate</div>
                  <div className="text-gray-900">87%</div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span className="text-gray-700">Payment verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
