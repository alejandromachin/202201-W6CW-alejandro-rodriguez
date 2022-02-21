import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationCentered = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const NavigationDiv = styled.div`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
  & a {
    color: black;
    text-decoration: none;
    font-weight: 900;
  }
  & a:hover {
    color: red;
  }
`;

const Navigation = () => {
  return (
    <>
      <NavigationCentered>
        <NavigationDiv>
          <Link to="/home">Home</Link>
          <Link to="/login/">Login</Link>
          <Link to="/robots">Robots</Link>
          <Link to="/robots/create/">Create</Link>
        </NavigationDiv>
      </NavigationCentered>
    </>
  );
};

export default Navigation;
