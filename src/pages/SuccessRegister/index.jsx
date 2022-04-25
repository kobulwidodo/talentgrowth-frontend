import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import image from "../../assets/image/success.png";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

const SuccessRegister = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-3 sm:px-6 lg:px-8">
        <img src={image} className="mx-auto w-1/3" alt="" srcSet="" />
        <p className="text-[#31B380] text-center font-semibold text-md mt-10">
          WHAT A DAY
        </p>
        <p className="text-xl font-bold text-center mt-3 text-[#211B3D]">
          Berhasil Daftar
        </p>
        <div className="text-center mt-5">
          <Button
            label="Kembali"
            type="primary"
            isLink={true}
            to={<Navigate to={-1} />}
          />
        </div>
      </div>
    </>
  );
};

export default SuccessRegister;
