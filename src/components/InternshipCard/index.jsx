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
        <img src={srcLogo} className="mr-5" alt="" srcset="" />
        <div className="">
          <p className="text-xl font-medium text-[#211B3D]">{position}</p>
          <p className="text-base font-normal text-[#2E405C]">{company}</p>
          <p>{isPaid ? "Paid" : "Unpaid"} Internship</p>
        </div>
      </div>
      <p className="text-right mt-2">{created}</p>
    </Link>
  );
};

export default InternshipCard;
