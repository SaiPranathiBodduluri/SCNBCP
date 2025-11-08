import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { storage } from '../utils/storage';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(storage.getToken());

  useEffect(() => {
    const savedToken = storage.getToken();
    if (savedToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
      fetchUser();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/api/auth/me');
      setUser(response.data.user);
    } catch (error) {
      console.error("⚠️ Failed to fetch user:", error.response?.data?.message || error.message);
      storage.removeToken();
      setToken(null);
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  const login = async (loginId, password) => {
    try {
      console.log('🔐 Attempting login for:', loginId);
      const response = await axios.post('/api/auth/login', { loginId, password });

      console.log("📦 Login response data:", response.data);

      const { token, user } = response.data;

      // Check if response contains both token and user
      if (!user || !token) {
        console.warn("⚠️ Missing user or token in login response:", response.data);
        return { success: false, message: 'Invalid response from server' };
      }

      console.log('✅ Login successful!');
      console.log('User:', user.name, user.role);

      // Save token
      storage.setToken(token);

      const hasToken = storage.hasToken();
      console.log('Token saved and verified:', hasToken ? 'YES ✅' : 'NO ❌');

      setToken(token);
      setUser(user);

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return { success: true };
    } catch (error) {
      console.error('❌ Login failed:', error.response?.data?.message || error.message);
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const logout = () => {
    storage.removeToken();
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    console.log("👋 Logged out successfully.");
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
