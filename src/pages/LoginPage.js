import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(loginTunk);
  }, [dispatch]);

  return;
};
export default LoginPage;
