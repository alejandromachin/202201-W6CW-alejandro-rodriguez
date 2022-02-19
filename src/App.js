import { Navigate, Route, Routes } from "react-router-dom";

import RobotsPage from "./pages/RobotsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<RobotsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
