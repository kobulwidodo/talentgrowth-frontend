import React from "react";

const InputFile = ({ label, name, errorText, ...other }) => {
  return (
    <div className="mb-5">
      <p>{label}</p>
      <input
        type="file"
        name={name}
        className="block mb-5 w-full mt-3 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        {...other}
      />
      {errorText ? (
        <span className="text-xs text-red-600">{errorText}</span>
      ) : null}
    </div>
  );
};

export default InputFile;
