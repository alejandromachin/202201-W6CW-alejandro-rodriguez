import { useParams } from "react-router-dom";
import CreateRobotForm from "../components/CreateRobotForm/CreateRobotForm";

const CreateRobotFormPage = () => {
  const { id } = useParams();

  return <CreateRobotForm token={id} />;
};

export default CreateRobotFormPage;
