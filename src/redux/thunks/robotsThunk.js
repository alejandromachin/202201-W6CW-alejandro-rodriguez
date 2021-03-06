import {
  createRobotAction,
  getLoginAction,
  getRobotByIdAction,
  loadAllRobotsAction,
  logedInAction,
  wrongLoginAction,
} from "../actions/actionCreator";

export const loadAllRobotsThunk = async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_DEVURL}/`);

  const robots = await response.json();

  dispatch(loadAllRobotsAction(robots));
};

export const getRobotByIdThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_DEVURL}/${id}`);
  const robot = await response.json();

  dispatch(getRobotByIdAction(robot));
};

export const createRobotThunk = (robot, token) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_DEVURL}/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(robot),
  });
  const newRobot = await response.json();
  dispatch(createRobotAction(newRobot));
};

export const getLoginThunk = (userData) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    const error = new Error("Wrong username or password");

    dispatch(wrongLoginAction(error.message));
    return;
  }

  const token = await response.json();

  dispatch(logedInAction());
  dispatch(getLoginAction(token));
};
