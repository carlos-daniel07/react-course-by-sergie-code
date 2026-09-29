import { useState } from "react";
import { useForm } from "./hooks/useForm";

const FormComponent = () => {
  const initialForm = {
    userName: "",
    email: "",
    password: "",
  };

  const { formState, userName, email, password, onInputChange } =
    useForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <h1>Formulario</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="Enter you username"
            value={userName}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter you email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter you password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormComponent;
