import RobotComponent from "../RobotComponent/RobotComponent";

const RobotListComponent = ({ robots }) => {
  return (
    <>
      <ul>
        {robots.map((robot) => (
          <RobotComponent robot={robot} key={robot._id} />
        ))}
      </ul>
      ;
    </>
  );
};

export default RobotListComponent;
