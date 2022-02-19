import { loadAllRobotsAction } from "../actions/actionCreator";

export const loadAllRobotsThunk = async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_DEVURL}/`);

  const robots = await response.json();

  dispatch(loadAllRobotsAction(robots));
};

export const getRobotByThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_DEVURL}/${id}`);

  const robots = await response.json();

  dispatch(getRobotByIdAction(robots));
};
