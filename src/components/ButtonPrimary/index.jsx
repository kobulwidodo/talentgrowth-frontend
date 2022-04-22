import { Link } from "react-router-dom";

const ButtonPrimary = ({ isLink, label, to }) => {
  return (
    <>
      {isLink ? (
        <Link to={to} className="rounded-3xl bg-[#7839F3] text-white px-7 py-3">
          {label}
        </Link>
      ) : (
        <button
          type="submit"
          name="submit"
          className="rounded-3xl bg-[#7839F3] text-white px-7 py-3"
        >
          {label}
        </button>
      )}
    </>
  );
};

export default ButtonPrimary;
