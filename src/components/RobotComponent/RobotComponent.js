import PropTypes from "prop-types";

const RobotComponent = (robot) => {
  return (
    <>
      <li>
        <div>
          <img src={robot.image} alt={robot.name} width="200" height="100" />
          <h2>Name: {robot.name}</h2>
          <p>Velocity: {robot.velocity}</p>
          <p>Resistance: {robot.resistance}</p>
          <p>Date of Creation: {robot.dateOfCreation}</p>
        </div>
      </li>
    </>
  );
};

export default RobotComponent;

RobotComponent.propTypes = {
  robot: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    velocity: PropTypes.string,
    resistance: PropTypes.string,
    dateOfCreation: PropTypes.string,
  }),
};
