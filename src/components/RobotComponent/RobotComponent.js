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
