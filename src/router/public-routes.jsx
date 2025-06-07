import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/login/login'; 
import Signup from '../components/signup/signup';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Redirect all other routes to login for unauthenticated users */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default PublicRoutes;
