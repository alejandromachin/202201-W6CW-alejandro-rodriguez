export const loadAllRobotsThunk = async (dispatch) => {
  const response = await fetch(
    process.env.REACT_APP_PRODUCTIONURL
      ? `${process.env.REACT_APP_PRODUCTIONURL}robots`
      : `${process.env.REACT_APP_DEVURL}robots`
  );

  const robots = await response.json();

  dispatch(loadAllRobotsThunk(robots));
};
