import classNames from "classnames";
import { Link } from "react-router-dom";

const ButtonPrimary = ({
  submitting,
  isLink,
  label,
  to,
  className,
  type = "primary",
  disabled,
  ...other
}) => {
  const classname = classNames(className, "rounded-3xl px-7 py-3", {
    "bg-[#7839F3] text-white hover:bg-[#8750f7]": type === "primary",
    "bg-white text-[#7839F3] border border-[#E7E5F4] hover:bg-[#e7e4f5]":
      type === "secondary",
    "bg-[#b090f0] hover:bg-[#b090f0]": submitting || disabled,
  });
  return (
    <>
      {isLink ? (
        <Link to={to} className={classname}>
          {label}
        </Link>
      ) : (
        <button
          type="submit"
          name="submit"
          className={classname}
          {...other}
          disabled={submitting || disabled}
        >
          {submitting ? "Loading..." : label}
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
