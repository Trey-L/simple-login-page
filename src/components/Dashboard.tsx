import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="w-full max-w-md p-8 backdrop-blur-xl bg-black/30 rounded-2xl shadow-2xl border border-white/10">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome, {user?.username}!
        </h1>
        <p className="text-gray-400 mb-8">You've successfully logged in.</p>
        
        <button
          onClick={logout}
          className="flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-accent to-secondary rounded-lg text-black font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 transform hover:scale-[1.02]"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};