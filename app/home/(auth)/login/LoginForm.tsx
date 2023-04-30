"use client";

import { FormWrapper, Password, Textfield } from "@components/form";
import { useForm } from "@hooks";
import * as y from "yup";

export default function LoginForm() {
  const loginForm = useForm({
    schema,
  });

  return (
    <FormWrapper id="login" form={loginForm} onSubmit={() => undefined}>
      <Textfield id="username" label="Username" required />
      <Password id="password" label="Password" icon />
    </FormWrapper>
  );
}

const schema = y.object({
  username: y.string().required("Username is required"),
  password: y
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(99, "Password must be at most 99 characters")
    .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
    .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
    .matches(/^(?=.*[0-9])/, "Must contain at least one number")
    .matches(
      /^(?=.*[\^$*.[\]{}()?\-“!@#%&/,><`:;|_~`])/,
      "Must contain at least one special character"
    )
    .required("Password is required"),
});
