import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import TrainingPage from "../pages/TrainingPage";
import ProgressPage from "../pages/ProgressPage";
import Exit from "../pages/Exit";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/training" element={<TrainingPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/exit" element={<Exit />} />
    </Routes>
  );
}