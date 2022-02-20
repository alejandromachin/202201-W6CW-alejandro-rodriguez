import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateRobotForm = () => {
  const blankFields = { name: "", image: "", velocity: "", resistance: "" };
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(blankFields);
  const resetForm = () => {
    setFormData(blankFields);
  };
  const createRobot = (event) => {
    event.preventDefault();
    dispatch(createRobotThunk(formData));
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
          value={formData.name}
          onChange={changeData}
          placeholder="Image"
        />
        <label htmlFor="velocity">Velocity </label>
        <input
          type="number"
          max="10"
          min="0"
          id="velocity"
          value={formData.name}
          onChange={changeData}
          placeholder="Velocity"
        />
        <label htmlFor="resistance">Resistance </label>
        <input
          type="number"
          max="10"
          min="0"
          id="resistance"
          value={formData.name}
          onChange={changeData}
          placeholder="Resistance"
        />

        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default CreateRobotForm;
