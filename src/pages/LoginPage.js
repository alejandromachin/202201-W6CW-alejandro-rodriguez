import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(loginTunk);
  }, [dispatch]);

  return;
};
export default LoginPage;
