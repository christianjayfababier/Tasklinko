import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { View } from '../App';

interface FooterProps {
  onNavigate: (view: View) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">TaskLinko</div>
            <p className="text-sm text-gray-400 mb-4">
              The world's largest freelance marketplace. Connect with talented professionals and get your work done.
            </p>
            <div className="flex gap-4">
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* For Clients */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Clients</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('browse-jobs')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  How to Hire
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Talent Marketplace</button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('post-job')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Post a Job
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Enterprise</button>
              </li>
            </ul>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Freelancers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('browse-jobs')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Find Work
                </button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">How to Work</button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Success Stories</button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Resources</button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button className="hover:text-emerald-400 transition-colors">About Us</button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Careers</button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Press</button>
              </li>
              <li>
                <button className="hover:text-emerald-400 transition-colors">Contact</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © 2026 TaskLinko. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-emerald-400 transition-colors">Terms of Service</button>
              <button className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-emerald-400 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
