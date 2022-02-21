import styled from "styled-components";
import RobotComponent from "../RobotComponent/RobotComponent";
const RobotListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;
const RobotListComponent = ({ robots }) => {
  return (
    <>
      <ul>
        <RobotListContainer>
          {robots.map((robot) => (
            <RobotComponent robot={robot} key={robot._id} />
          ))}
        </RobotListContainer>
      </ul>
      ;
    </>
  );
};

export default RobotListComponent;
