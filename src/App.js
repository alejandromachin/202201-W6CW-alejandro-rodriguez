import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import RobotListComponent from "./components/RobotListComponent/RobotListComponent";
import { loadAllRobotsThunk } from "./redux/thunks/robotsThunk";

function App() {
  const dispatch = useDispatch();
  const robotsAPI = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(loadAllRobotsThunk);
  }, [dispatch]);

  return (
    <>
      <h1>ROBOTS:</h1>
      <RobotListComponent robots={robotsAPI} />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Robots />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
