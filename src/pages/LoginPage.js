import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginThunk } from "../redux/thunks/robotsThunk";

const LoginPage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    dispatch(getLoginThunk);
  }, [dispatch]);

  return <h1>{`YOUR TOKEN IS: ${token.token}`}</h1>;
};
export default LoginPage;
