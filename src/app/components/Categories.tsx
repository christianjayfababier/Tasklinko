import {
  Home,
  Wrench,
  Droplets,
  Sparkles,
  Zap,
  Trees,
  Bug,
  ClipboardCheck,
} from 'lucide-react';

const categories = [
  {
    name: 'Property Maintenance',
    icon: Home,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Handyman Services',
    icon: Wrench,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Plumbing Services',
    icon: Droplets,
    color: 'bg-sky-100 text-sky-600',
  },
  {
    name: 'Housekeeping & Cleaning',
    icon: Sparkles,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    name: 'Electrical Services',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'Gardening & Landscaping',
    icon: Trees,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Pest Control',
    icon: Bug,
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Safety & Compliance',
    icon: ClipboardCheck,
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600">
            Find trusted professionals for property and real estate services
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
