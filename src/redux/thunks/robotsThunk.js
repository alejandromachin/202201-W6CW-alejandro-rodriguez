export const loadAllRobotsThunk = async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_PRODUCTIONURL}robots`);
  const robots = await response.json();
  dispatch(loadAllRobotsThunk(robots));
};
