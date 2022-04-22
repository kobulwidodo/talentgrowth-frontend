import { Link } from "react-router-dom";
import cover from "../../assets/image/cover.png";
import ButtonPrimary from "../../components/ButtonPrimary";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-x-6 max-w-6xl mx-auto py-10 px-3 sm:px-6 lg:px-8 sm:mt-20 mt-10">
        <div className="">
          <div className="text-base font-semibold sm:text-left text-center text-[#31B380]">
            LEARN FROM EXPERTS
          </div>
          <div className="text-[#211B3D] text-4xl mt-5 text-xl sm:text-left text-center font-semibold">
            Start Your <span className="text-[#7839F3]">Career</span> <br />{" "}
            Today
          </div>
          <p className="font-normal md:max-w-lg text-base text-[#5B5575] sm:text-left text-center mt-5 mb-8">
            Talent Growth is a platform that bridges education and future
            workforce through virtual internships
          </p>
          <ButtonPrimary isLink={true} label="Get Started" to="/internship" />
        </div>
        <div className="mx-auto hidden md:block md:w-1/2 lg:w-1/3">
          <img src={cover} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
