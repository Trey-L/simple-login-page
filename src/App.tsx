import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Content */}
      {user ? <Dashboard /> : <LoginForm />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;