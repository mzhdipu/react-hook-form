import React from "react";
import UseformInput from "../UseformInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Registration = () => {
  const schema = yup
    .object({
      name: yup.string().required(),
      //   email: yup.string().required().matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/, 'Email address not valid'),
      email: yup.string().required().email("Email address not valid"),
      password: yup.string().min(8),
      confirmPassword: yup
        .string()
        .oneOf(
          [yup.ref("password")],
          "Confirm Password Much be Match with Password"
        ),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <UseformInput
          register={{ ...register("name") }}
          type="text"
          id="name"
          label="Name"
          placeholder="Your Name"
          errorMessage={errors.name?.message}
        />
        <UseformInput
          register={{ ...register("email") }}
          type="email"
          id="email"
          label="email"
          placeholder="Your email"
          errorMessage={errors.email?.message}
        />
        <UseformInput
          register={{ ...register("password") }}
          type="password"
          id="password"
          label="password"
          placeholder="Your password"
          errorMessage={errors.password?.message}
        />
        <UseformInput
          register={{ ...register("confirmpassword") }}
          type="password"
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Your password"
          errorMessage={errors.confirmPassword?.message}
        />
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Registration;
