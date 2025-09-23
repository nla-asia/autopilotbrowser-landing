'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id?: string;
  name?: string;
  email?: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (userData: User) => void;
  logout: () => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
  loginWithGoogle: (code: string, redirectUri: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const userString = localStorage.getItem('user');
        if (userString) {
          const userData = JSON.parse(userString);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        // Clear corrupted data
        localStorage.removeItem('user');
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);



  const login = (userData: User) => {
    setUser(userData);
    if(userData){
        localStorage.setItem('user', JSON.stringify(userData));
    } else {
        localStorage.removeItem('user');
    }
  };

  const logout = async () => {
    try {
      // Call the logout API to clear HTTP-only cookies
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error during logout:', error);
      // Continue with local logout even if API call fails
    }

    // Clear user state (this will also clear localStorage via useEffect)
    setUser(null);

    // Redirect to login page to ensure middleware checks
    window.location.href = '/auth/login';
  };

  const updateUser = (userData: Partial<User>) => {
    setUser(prevUser => prevUser ? { ...prevUser, ...userData } : null);
  };

  const loginWithGoogle = async (code: string, redirectUri: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, redirectUri }),
      });
      const data = await res.json();
      if (!res.ok || (data as { error?: string }).error) {
        return { success: false, error: (data as { error?: string }).error || 'Google login failed' };
      }
      setUser((data as { user: User }).user);
      return { success: true };
    } catch (_error) { // eslint-disable-line @typescript-eslint/no-unused-vars
      return { success: false, error: 'Google login failed' };
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    updateUser,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
