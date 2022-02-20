import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RobotComponent from "../components/RobotComponent/RobotComponent";
import { getRobotByIdThunk } from "../redux/thunks/robotsThunk";

const RobotPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(getRobotByIdThunk(id));
  }, [dispatch, id]);

  return <RobotComponent robot={robots} />;
};

export default RobotPage;
