import RobotComponent from "../RobotComponent/RobotComponent";

const RobotListComponent = ({ robots }) => {
  return (
    <>
      <ul>
        {robots.map((robot) => (
          <RobotComponent key={robot.id} robot={robot} />
        ))}
      </ul>
      ;
    </>
  );
};

export default RobotListComponent;
