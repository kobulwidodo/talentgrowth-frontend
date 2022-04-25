import classNames from "classnames";
import React from "react";

const Alert = ({ label, type, icon }) => {
  return (
    <div
      className={classNames("flex px-3 py-2 border rounded-lg", {
        "bg-green-200": type === "success",
        "bg-red-200": type === "danger",
      })}
    >
      {icon}
      <p className="ml-3 text-slate-800">{label}</p>
    </div>
  );
};

export default Alert;
