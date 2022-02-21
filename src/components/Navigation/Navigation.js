import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
  & a {
    color: black;
    text-decoration: none;
    font-weight: 900;
  }
`;

const Navigation = () => {
  return (
    <>
      <NavigationDiv>
        <Link to="/home">Home</Link>
        <Link to="/login/">Login</Link>
        <Link to="/robots">Robots</Link>
        <Link to="/robots/create/">Create</Link>
      </NavigationDiv>
    </>
  );
};

export default Navigation;
