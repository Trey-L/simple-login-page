import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 backdrop-blur-xl bg-black/30 rounded-2xl shadow-2xl border border-white/10">
      <div className="flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
          Welcome, {user?.username}!
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 text-center">You've successfully logged in.</p>
        
        <button
          onClick={logout}
          className="flex items-center gap-2 py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-accent to-secondary rounded-lg text-black font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-100"
        >
          <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};