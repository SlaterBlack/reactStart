import React, { FormEvent, useRef } from "react";
import Button from "./Button/Button";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h2>Name and Age Form</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          <b>Name</b>
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb3">
        <label htmlFor="age" className="form-label">
          <b>Age</b>
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <br />
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <br />
    </form>
  );
};

export default Form;
