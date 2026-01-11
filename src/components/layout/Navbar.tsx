import React from 'react';
import { NavLink } from 'react-router-dom';
import { Map, Users, Calendar, BarChart3, Settings, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-green-700">UgandaSafari</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => cn("inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium", isActive ? "border-green-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
              >
                Home
              </NavLink>
              <NavLink 
                to="/builder" 
                className={({ isActive }) => cn("inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium", isActive ? "border-green-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
              >
                Itinerary Builder
              </NavLink>
              <NavLink 
                to="/experts" 
                className={({ isActive }) => cn("inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium", isActive ? "border-green-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
              >
                Find an Expert
              </NavLink>
              
              {user?.role === 'consultant' && (
                 <NavLink 
                 to="/consultant/dashboard" 
                 className={({ isActive }) => cn("inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium", isActive ? "border-green-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
               >
                 Dashboard
               </NavLink>
              )}

              {user?.role === 'admin' && (
                 <NavLink 
                 to="/admin" 
                 className={({ isActive }) => cn("inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium", isActive ? "border-green-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
               >
                 Admin Hub
               </NavLink>
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="relative ml-3 flex items-center gap-4">
                 <span className="text-sm font-medium text-gray-700">{user.name}</span>
                 <button onClick={logout} className="p-1 text-gray-400 hover:text-gray-500">
                    <LogOut className="h-6 w-6" />
                 </button>
              </div>
            ) : (
                <NavLink to="/login" className="text-sm font-medium text-green-600 hover:text-green-500">
                    Log in
                </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
