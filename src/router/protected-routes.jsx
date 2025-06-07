// AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Excercise from "../pages/excercise";
import AiScreen from "../pages/ai-screen";
import Dashboard from "../layout/layout";
import DashboardScreen from "../pages/dashboard";
import AuthProtection from './auth-protection';
import Login from "../components/login/login";
import Courses from '../pages/courses'
import CourseDetail from "../components/dashboard-components/course-details";
import ExcerciseDetails from '../components/dashboard-components/excercise-detail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthProtection />}>
        <Route element={<Dashboard />}>
          <Route index element={<DashboardScreen />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/ai-screen" element={<AiScreen />} />
          <Route path="/excercise-detail" element={<ExcerciseDetails />} />
          <Route path="/course/:courseId/:subCourseId" element={<CourseDetail />} />
          <Route path="/courses/:courseId/:subCourseId/video/:videoId" element={<CourseDetail />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
