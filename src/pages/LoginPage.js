import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getLoginThunk } from "../redux/thunks/robotsThunk";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  & form {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 5px solid black;
    box-shadow: 2px 2px 31px 6px rgba(0, 0, 0, 0.48);
    border-radius: 10px;
    width: 200px;
    height: 300px;
    text-align: center;
    margin-top: 10px;
    list-style: none;
    align-items: center;
    background-image: url(https://img.freepik.com/vector-gratis/vector-fondo-tecnologia-digital-patron-hexagonal-tono-blanco_53876-110878.jpg?size=626&ext=jpg&ga=GA1.2.1514007440.1643328000);

    & input {
      margin: 15px;
      width: 100px;
    }
  }
`;

const LoginPage = () => {
  const blankFields = { username: "", password: "" };
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };
  const login = (event) => {
    event.preventDefault();
    dispatch(getLoginThunk(formData));
    resetForm();
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <LoginContainer>
        <form onSubmit={login} noValidate autoComplete="off">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={changeData}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={changeData}
          />

          <button type="submit">Add</button>
        </form>
      </LoginContainer>
    </>
  );
};
export default LoginPage;
