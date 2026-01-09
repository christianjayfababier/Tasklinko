import { FileText, Search, MessageSquare, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Post a Job',
    description: 'Tell us about your project and what skills are needed',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Search,
    title: 'Find Talent',
    description: 'Review proposals and hire the perfect freelancer',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: MessageSquare,
    title: 'Collaborate',
    description: 'Work together seamlessly with built-in tools',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: CheckCircle,
    title: 'Pay Safely',
    description: 'Only pay when you approve the completed work',
    color: 'bg-emerald-100 text-emerald-600',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">Get your project done in four simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2 z-0" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-white rounded-xl p-6 text-center z-10">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
