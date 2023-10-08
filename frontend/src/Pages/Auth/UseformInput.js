import React from "react";

const UseformInput = ({id, label, placeholder, type, register, errorMessage}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label> <br />
      <input type={type} name="name" id={id} placeholder={placeholder} {...register}/> <br />
      <span>{errorMessage}</span>
    </div>
  );
};

export default UseformInput;
