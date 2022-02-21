import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createRobotThunk } from "../../redux/thunks/robotsThunk";

const CreateRobotContainer = styled.div`
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
      margin: 5px;
      width: 100px;
    }
  }
`;
const CreateRobotForm = ({ token }) => {
  const blankFields = { name: "", image: "", velocity: "", resistance: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };
  const createRobot = (event) => {
    event.preventDefault();
    dispatch(createRobotThunk(formData, token));

    resetForm();
    navigate("/robots");
  };
  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <>
      <CreateRobotContainer>
        <form onSubmit={createRobot} noValidate autoComplete="off">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={changeData}
            placeholder="Name"
          />
          <label htmlFor="image">Image </label>
          <input
            type="text"
            id="image"
            value={formData.image}
            onChange={changeData}
            placeholder="Image"
          />
          <label htmlFor="velocity">Velocity </label>
          <input
            type="number"
            max="10"
            min="0"
            id="velocity"
            value={formData.velocity}
            onChange={changeData}
            placeholder="Velocity"
          />
          <label htmlFor="resistance">Resistance </label>
          <input
            type="number"
            max="10"
            min="0"
            id="resistance"
            value={formData.resistance}
            onChange={changeData}
            placeholder="Resistance"
          />

          <button type="submit">Add</button>
        </form>
      </CreateRobotContainer>
    </>
  );
};
export default CreateRobotForm;
