import Navbar from "../../components/Navbar";
import rglogo from "../../assets/partner/ruangguru.svg";
import InternshipCard from "../../components/InternshipCard";
import { useState } from "react";
import { getInternships } from "../../api/models/internship";
import useEffectOnce from "../../hooks/useEffectOnce";

const Internship = () => {
  const [internships, setInternships] = useState([]);

  const fetchInternships = async () => {
    try {
      const res = await getInternships();
      setInternships(res.data.data);
    } catch (error) {}
  };

  useEffectOnce(() => {
    fetchInternships();
  });

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-3 sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold text-[#31B380] text-center">
          YOUR FUTURE CAREER
        </h3>
        <h2 className="text-3xl font-semibold text-[#211B3D] text-center mt-2">
          Bangun karier impianmu disini
        </h2>
        <div className="grid gap-x-8 gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
          {internships.map((item, key) => {
            const date = new Date(Date.parse(item.CreatedAt));
            return (
              <InternshipCard
                key={key}
                srcLogo={rglogo}
                position={item.position}
                company={item.company}
                isPaid={true}
                created={`${date.toDateString()}`}
                id={item.ID}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Internship;
