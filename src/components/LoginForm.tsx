import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { LoginFormData } from '../types/auth';

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (formData.username === validUsername && formData.password === validPassword) {
      login(formData.username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="w-full max-w-md p-8 backdrop-blur-xl bg-black/30 rounded-2xl shadow-2xl border border-white/10">
      <div className="flex flex-col items-center mb-8">
        <div className="p-3 rounded-full bg-secondary/20 mb-4">
          <LogIn className="w-8 h-8 text-secondary" />
        </div>
        <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
        <p className="text-gray-400 mt-2">Please sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            placeholder="Enter your password"
            required
          />
        </div>

        {error && (
          <div className="text-accent text-sm font-medium text-center">{error}</div>
        )}

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-secondary to-accent rounded-lg text-black font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-300 transform hover:scale-[1.02]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};