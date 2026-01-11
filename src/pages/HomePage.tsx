import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { Map, Users, ShieldCheck } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-green-900 text-center shadow-xl lg:px-8">
        <div className="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1547471080-7541fc6a7a30?q=80&w=2000&auto=format&fit=crop" alt="Uganda Safari" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Design Your Dream Uganda Safari
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto">
            Plan your adventure with our interactive builder, then connect with top-rated local experts to make it happen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/builder">
               <Button size="lg">Start Planning</Button>
            </Link>
            <Link to="/experts">
               <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white">
                  Find an Expert
               </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-600">
                    <Map className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Custom Itineraries</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">Drag and drop destinations, lodges, and activities to build a trip that fits your style and budget.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-600">
                    <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Local Experts</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">Connect with vetted Ugandan consultants who know the terrain, the animals, and the hidden gems.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-lg bg-green-100 p-3 text-green-600">
                    <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Secure Booking</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">Transparent pricing and secure payments. We ensure your funds are safe until your trip is confirmed.</p>
            </div>
        </div>
      </div>
    </div>
  );
};
