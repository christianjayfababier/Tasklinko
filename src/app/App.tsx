import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JobListings } from './components/JobListings';
import { FreelancerShowcase } from './components/FreelancerShowcase';
import { Categories } from './components/Categories';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { BrowseJobs } from './components/BrowseJobs';
import { FreelancerProfiles } from './components/FreelancerProfiles';
import { PostJob } from './components/PostJob';
import { JobDetails } from './components/JobDetails';

export type View = 'home' | 'browse-jobs' | 'freelancers' | 'post-job' | 'job-details';

export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  budget: string;
  budgetType: 'fixed' | 'hourly';
  skillsRequired: string[];
  experienceLevel: 'entry' | 'intermediate' | 'expert';
  timePosted: string;
  proposals: number;
  clientName: string;
  clientRating: number;
  clientReviews: number;
  clientLocation: string;
  clientSpent: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const handleViewJob = (jobId: string) => {
    setSelectedJobId(jobId);
    setCurrentView('job-details');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      {currentView === 'home' && (
        <>
          <Hero onNavigate={setCurrentView} />
          <Categories />
          <JobListings onViewJob={handleViewJob} />
          <FreelancerShowcase />
          <HowItWorks />
        </>
      )}

      {currentView === 'browse-jobs' && (
        <BrowseJobs onViewJob={handleViewJob} />
      )}

      {currentView === 'freelancers' && (
        <FreelancerProfiles />
      )}

      {currentView === 'post-job' && (
        <PostJob onNavigate={setCurrentView} />
      )}

      {currentView === 'job-details' && selectedJobId && (
        <JobDetails jobId={selectedJobId} onBack={() => setCurrentView('browse-jobs')} />
      )}

      <Footer onNavigate={setCurrentView} />
    </div>
  );
}
