import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './contexts/AuthContext.jsx';
import { SocketProvider } from './contexts/SocketContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import StudentLoginPage from './pages/StudentLoginPage.jsx';
import FacultyLoginPage from './pages/FacultyLoginPage.jsx';
import AdminLoginPage from './pages/AdminLoginPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NoticesPage from './pages/NoticesPage.jsx';
import CreateNoticePage from './pages/CreateNoticePage.jsx';
import NoticeDetailPage from './pages/NoticeDetailPage.jsx';

function App() {
  return (
    <AuthProvider>
      <SocketProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/student-login" element={<StudentLoginPage />} />
              <Route path="/faculty-login" element={<FacultyLoginPage />} />
              <Route path="/admin-login" element={<AdminLoginPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/notices" element={
                <ProtectedRoute>
                  <NoticesPage />
                </ProtectedRoute>
              } />
              
              <Route path="/notices/create" element={
                <ProtectedRoute roles={['admin', 'faculty']}>
                  <CreateNoticePage />
                </ProtectedRoute>
              } />
              
              <Route path="/notices/:id" element={
                <ProtectedRoute>
                  <NoticeDetailPage />
                </ProtectedRoute>
              } />
            </Routes>
            
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </Router>
      </SocketProvider>
    </AuthProvider>
  );
}

export default App;