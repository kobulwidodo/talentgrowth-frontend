import { Link } from "react-router-dom";

const InternshipCard = ({
  srcLogo,
  position,
  company,
  isPaid,
  created,
  id,
}) => {
  const link = `/internship/${id}`;
  return (
    <Link
      to={link}
      className="bg-[#FAFAFA] hover:bg-[#f3f3f3] px-5 py-4 drop-shadow-sm rounded-xl"
    >
      <div className="flex flex-row">
        <img src={srcLogo} className="mr-5" alt="" srcSet="" />
        <div className="">
          <p className="text-base font-medium text-[#211B3D]">{position}</p>
          <p className="text-sm font-normal text-[#2E405C]">{company}</p>
          <p className="text-sm">{isPaid ? "Paid" : "Unpaid"} Internship</p>
        </div>
      </div>
      <p className="text-right mt-3">{created}</p>
    </Link>
  );
};

export default InternshipCard;
