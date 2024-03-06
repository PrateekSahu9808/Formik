import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";
import React from "react";

const CheckBox = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>

      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default CheckBox;
