import PropTypes from "prop-types";
import styled from "styled-components";

const RobotContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  width: 200px;
  height: 300px;
  text-align: center;
  margin-top: 10px;
  list-style: none;
  align-items: center;
  & img {
    border: 5px solid black;
  }
`;
const RobotComponent = ({ robot }) => {
  return (
    <RobotContainer>
      <li>
        <div>
          <img src={robot.image} alt={robot.name} width="200" height="100" />
          <h2>Name: {robot.name}</h2>
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
