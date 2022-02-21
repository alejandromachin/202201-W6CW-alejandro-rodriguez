import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import CreateRobotFormPage from "./pages/CreateRobotFormPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RobotPage from "./pages/RobotPage";

import RobotsPage from "./pages/RobotsPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/robots" element={<RobotsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/robots/create/:id" element={<CreateRobotFormPage />} />
        <Route path="/robots/:id" element={<RobotPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
