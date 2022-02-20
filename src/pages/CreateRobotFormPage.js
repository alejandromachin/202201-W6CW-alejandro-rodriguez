import { useParams } from "react-router-dom";
import CreateRobotForm from "../components/CreateRobotForm/CreateRobotForm";

const CreateRobotFormPage = () => {
  const { id } = useParams();
  const token = id.split(" ")[1];
  console.log(token);

  return <CreateRobotForm />;
};

export default CreateRobotFormPage;
