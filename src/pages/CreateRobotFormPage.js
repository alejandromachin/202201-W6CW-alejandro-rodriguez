import { useSelector } from "react-redux";
import CreateRobotForm from "../components/CreateRobotForm/CreateRobotForm";

const CreateRobotFormPage = () => {
  const { token } = useSelector((state) => state.token);

  return <CreateRobotForm token={token} />;
};

export default CreateRobotFormPage;
