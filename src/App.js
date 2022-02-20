import { Navigate, Route, Routes } from "react-router-dom";
import CreateRobotFormPage from "./pages/CreateRobotFormPage";
import NotFoundPage from "./pages/NotFoundPage";
import RobotPage from "./pages/RobotPage";

import RobotsPage from "./pages/RobotsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/robots" element={<RobotsPage />} />

      <Route path="/robots/create/:id" element={<CreateRobotFormPage />} />
      <Route path="/robots/:id" element={<RobotPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
