import Navbar from "../../components/Navbar";
import rglogo from "../../assets/partner/ruangguru.svg";
import InternshipCard from "../../components/InternshipCard";

const Internship = () => {
  return (
    <>
      <Navbar />
      <div class="max-w-7xl mx-auto py-10 px-3 sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold text-[#31B380] text-center">
          YOUR FUTURE CAREER
        </h3>
        <h2 className="text-3xl font-semibold text-[#211B3D] text-center mt-2">
          Bangun karier impianmu disini
        </h2>
        <div class="grid gap-x-8 gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">
          {[...Array(10).keys()].map((item) => (
            <InternshipCard
              srcLogo={rglogo}
              position="Backend Engineering"
              company="RuangGuru"
              isPaid={true}
              created="20 Februaru 2022"
              id={1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Internship;
