import PropTypes from "prop-types";
import styled from "styled-components";

const RobotContainer = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
  border-radius: 10px;
  width: 200px;
  height: 300px;
  text-align: center;
  margin-top: 10px;
  list-style: none;
  align-items: center;
  background-image: url(https://img.freepik.com/vector-gratis/vector-fondo-tecnologia-digital-patron-hexagonal-tono-blanco_53876-110878.jpg?size=626&ext=jpg&ga=GA1.2.1514007440.1643328000);

  & img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 5px solid black;
  }
`;
const RobotComponent = ({ robot }) => {
  return (
    <RobotContainer>
      <li>
        <div>
          <img src={robot.image} alt={robot.name} width="200" height="100" />
          <h2>{robot.name}</h2>
          <p>Velocity: {robot.velocity}</p>
          <p>Resistance: {robot.resistency}</p>
          <p>Date of Creation: {robot.dateOfCreation}</p>
        </div>
      </li>
    </RobotContainer>
  );
};

export default RobotComponent;

RobotComponent.propTypes = {
  robot: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    velocity: PropTypes.number,
    resistance: PropTypes.number,
    dateOfCreation: PropTypes.string,
  }),
};
