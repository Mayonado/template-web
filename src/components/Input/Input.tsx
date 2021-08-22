import React, { InputHTMLAttributes } from "react";
import { useField, Field, useFormik, FormikTouched } from "formik";
// import { validEmail } from "../../utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  touched: FormikTouched<{
    email: string;
    password: string;
  }>;
  submitCount: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  touched,
  submitCount,
  ...props
}) => {
  const [field, { error }] = useField(props);
  console.log("submitCOunter", submitCount);
  return (
    <>
      <label className="font-medium">{label}</label>
      <Field className="p-3 rounded border border-blueGray-800" {...props} />
      {error ? (
        <div className="bg-red-100 text-red-800 my-2 p-4 rounded text-sm">
          {error}
        </div>
      ) : null}
    </>
  );
};
