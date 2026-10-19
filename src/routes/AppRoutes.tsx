import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import SignupPage from '../features/auth/SignupPage';
import HomePageLayout from '../layouts/HomePageLayout';
import UserFeeds from '../features/userfeeds/UserFeeds';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<HomePageLayout />}>
        <Route path="/home" element={<UserFeeds />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
