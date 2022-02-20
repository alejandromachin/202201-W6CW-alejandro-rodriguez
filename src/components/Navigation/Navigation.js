import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Link to="/login/">Login</Link>
      <Link to="/robots">Robots</Link>
      <Link to="/robots/create/">Create</Link>
    </>
  );
};

export default Navigation;
