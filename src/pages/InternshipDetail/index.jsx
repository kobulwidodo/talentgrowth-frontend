import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  applyInternship,
  getInternship,
  getStatusApplicant,
  uploadCv,
} from "../../api/models/internship";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import InputGroup from "../../components/InputGroup";
import Navbar from "../../components/Navbar";
import coverImage from "../../assets/partner/ruangguru.svg";
import useSnackbar from "../../hooks/useSnackbar";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useUserContext } from "../../context/userContext";
import InputFile from "../../components/InputFile";

const formData = {
  age: {
    value: 0,
    required: true,
  },
  college: {
    value: "",
    required: true,
  },
  major: {
    value: "",
    required: true,
  },
  cv_link: {
    value: "",
    required: true,
  },
};

const InternshipDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(formData);
  const [internship, setInternship] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const snackbar = useSnackbar();
  const navigate = useNavigate();
  const { userInfo } = useUserContext();

  const fetchInternship = async () => {
    try {
      const res = await getInternship(id);
      setInternship(res.data.data);
    } catch (error) {
      snackbar.error(error.response?.data.message);
    }
  };

  const fetchStatus = async () => {
    try {
      const res = await getStatusApplicant(id);
      setIsRegistered(res.data.data);
    } catch (error) {
      snackbar.error("something wrong");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.value,
      },
    });
  };

  const handlerChangeFile = (e) => {
    setData({
      ...data,
      [e.target.name]: {
        ...data[e.target.name],
        value: e.target.files[0],
      },
    });
  };

  const validateData = () => {
    let errorsData = {};
    Object.keys(data).forEach((key) => {
      const dataCheck = data[key];
      if (dataCheck.required) {
        if (!dataCheck.value) {
          errorsData = {
            ...errorsData,
            [key]: `${key + " tidak boleh kosong"}`,
          };
        }
      }
    });
    setErrors(errorsData);
    return Object.keys(errorsData).length < 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateData()) {
      try {
        setIsSubmit(true);
        const res = await applyInternship(
          data.age.value,
          data.college.value,
          data.major.value,
          id
        );
        const resCv = await uploadCv(data.cv_link.value, res.data.data.id);
        snackbar.success(res.data.message);
        navigate(`/success`);
      } catch (error) {
        console.log(error);
        snackbar.error(error.response?.data.message);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  useEffect(() => {
    fetchInternship();
    fetchStatus();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-10 px-3 sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold text-[#31B380] text-center">
          YOUR FUTURE CAREER
        </h3>
        <h2 className="text-3xl font-semibold text-[#211B3D] text-center mt-2">
          Daftar Internship
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-x-20 mt-16">
          <div className="">
            <img src={coverImage} alt="" className="mx-auto w-1/2 sm:mx-0" />
            <h3 className="text-[#31B380] text-center sm:text-left font-semibold text-xl mt-5">
              {internship.position}
            </h3>
            <p className="text-light text-[#211B3D] text-base mt-2 text-center sm:text-left">
              {internship.description}
            </p>
          </div>
          <div className="mt-10 sm:mt-0">
            {isRegistered.is_registered ? (
              <Alert
                label="Anda sudah terdaftar di lowongan ini"
                type="success"
                icon={<InformationCircleIcon width={25} />}
              />
            ) : null}
            <form
              onSubmit={handleSubmit}
              className={isRegistered.is_registered ? "mt-5" : "mt-0"}
            >
              <InputGroup
                label="Email Address"
                name="email"
                type="email"
                placeholder="example@domain.com"
                disabled={true}
                value={userInfo?.email || ""}
              />
              <InputGroup
                label="Full Name"
                name="name"
                type="text"
                placeholder="John Doe"
                disabled={true}
                value={userInfo?.name || ""}
              />
              <InputGroup
                label="Age"
                name="age"
                type="number"
                value={isRegistered.age ? isRegistered.age : data.age.value}
                onChange={handleChange}
                errorText={errors.age}
                placeholder="17"
                disabled={isRegistered.is_registered}
              />
              <InputGroup
                label="University"
                name="college"
                type="text"
                value={
                  isRegistered.college
                    ? isRegistered.college
                    : data.college.value
                }
                onChange={handleChange}
                errorText={errors.college}
                placeholder="Universitas Brawijaya"
                disabled={isRegistered.is_registered}
              />
              <InputGroup
                label="Major"
                name="major"
                type="text"
                value={
                  isRegistered.major ? isRegistered.major : data.major.value
                }
                onChange={handleChange}
                errorText={errors.major}
                placeholder="Information Technology"
                disabled={isRegistered.is_registered}
              />
              <InputFile
                label="CV Upload"
                name="cv_link"
                errorText={errors.cv_link}
                onChange={handlerChangeFile}
                disabled={isRegistered.is_registered}
              />
              <Button
                submitting={isSubmit}
                isLink={false}
                label="Daftar"
                className="w-full"
                disabled={isRegistered.is_registered}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternshipDetail;
