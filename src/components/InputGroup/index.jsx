import classNames from "classnames";
import React from "react";

const InputGroup = ({
  label,
  type,
  name,
  placeholder,
  errorText,
  ...other
}) => {
  return (
    <>
      <div className="mb-5">
        <p>{label}</p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={classNames(
            "w-full border border-[#E7E5F4] rounded-full text-[#211B3D] font-medium text-base px-5 py-2.5 mt-3",
            { "border-red-600": errorText }
          )}
          autoComplete="off"
          {...other}
        />
        {errorText ? (
          <span className="text-xs text-red-600">{errorText}</span>
        ) : null}
      </div>
    </>
  );
};

export default InputGroup;
