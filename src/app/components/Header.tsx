import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center h-16">
  {/* Logo (Left) */}
  <div className="flex items-center shrink-0">
    <button
      onClick={() => onNavigate('home')}
      className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
    >
      TaskLinko
    </button>
  </div>

  {/* Desktop Navigation (Center) */}
  <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
    <button
      onClick={() => onNavigate('browse-jobs')}
      className={`text-sm font-medium transition-colors whitespace-nowrap ${
        currentView === 'browse-jobs'
          ? 'text-emerald-600'
          : 'text-gray-700 hover:text-emerald-600'
      }`}
    >
      Find Work
    </button>

    <button
      onClick={() => onNavigate('freelancers')}
      className={`text-sm font-medium transition-colors whitespace-nowrap ${
        currentView === 'freelancers'
          ? 'text-emerald-600'
          : 'text-gray-700 hover:text-emerald-600'
      }`}
    >
      Find Talent
    </button>

    <button className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap">
      Why TaskLinko
    </button>
  </nav>

  {/* Desktop Actions (Right) */}
  <div className="hidden md:flex items-center gap-4 shrink-0">
    <button className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors whitespace-nowrap">
      Log In
    </button>

    <button
      onClick={() => onNavigate('post-job')}
      className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap"
    >
      Post a Job
    </button>
  </div>

  {/* Mobile menu button (Right on mobile) */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="md:hidden ml-auto p-2 text-gray-700"
  >
    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
  </button>
</div>

      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => {
                onNavigate('browse-jobs');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              Find Work
            </button>
            <button
              onClick={() => {
                onNavigate('freelancers');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-emerald-600"
            >
              Find Talent
            </button>
            <button className="block w-full text-left text-sm font-medium text-gray-700 hover:text-emerald-600">
              Why WorkHub
            </button>
            <hr className="border-gray-200" />
            <button className="block w-full text-left text-sm font-medium text-gray-700 hover:text-emerald-600">
              Log In
            </button>
            <button
              onClick={() => {
                onNavigate('post-job');
                setMobileMenuOpen(false);
              }}
              className="block w-full px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700"
            >
              Post a Job
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
