import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import type { LoginFormData } from '../types/auth';
import { compareCredential, ADMIN_USERNAME_HASH, ADMIN_PASSWORD_HASH } from '../utils/crypto';

export const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const isValidUsername = await compareCredential(formData.username, ADMIN_USERNAME_HASH);
      const isValidPassword = await compareCredential(formData.password, ADMIN_PASSWORD_HASH);

      if (isValidUsername && isValidPassword) {
        login(formData.username);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 backdrop-blur-xl bg-black/30 rounded-2xl shadow-2xl border border-white/10">
      <div className="flex flex-col items-center mb-6 sm:mb-8">
        <div className="p-3 rounded-full bg-secondary/20 mb-4">
          <LogIn className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white">Welcome Back</h1>
        <p className="text-sm sm:text-base text-gray-400 mt-2">Please sign in to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-colors"
            placeholder="Enter your username"
            required
            disabled={isLoading}
            autoComplete="username"
            spellCheck="false"
            autoCapitalize="none"
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
            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-colors"
            placeholder="Enter your password"
            required
            disabled={isLoading}
            autoComplete="current-password"
            spellCheck="false"
          />
        </div>

        {error && (
          <div role="alert" className="text-accent text-sm font-medium text-center">{error}</div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 sm:py-3 px-4 bg-gradient-to-r from-secondary to-accent rounded-lg text-black font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};