import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import coverImage from "../../assets/image/webinar-detail.png";
import InputGroup from "../../components/InputGroup";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigate, useParams } from "react-router-dom";
import {
  getEvent,
  getEventStatus,
  registerEvent,
} from "../../api/models/event";
import { useUserContext } from "../../context/userContext";
import useSnackbar from "../../hooks/useSnackbar";
import { InformationCircleIcon } from "@heroicons/react/outline";
import Alert from "../../components/Alert";

const formData = {
  university: {
    value: "",
    required: true,
  },
};

const EventRegister = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const [isRegistered, setIsRegistered] = useState({});
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { userInfo } = useUserContext();
  const snackbar = useSnackbar();

  const fetchWebinar = async () => {
    try {
      const res = await getEvent(id);
      setEvent(res.data.data);
    } catch (error) {
      snackbar.error(error.response?.data.message);
      navigate("/");
    }
  };

  const fetchStatus = async () => {
    try {
      const res = await getEventStatus(id);
      setIsRegistered(res.data.data);
    } catch (error) {
      snackbar.error(error.response?.data.message);
      navigate("/");
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
        const res = await registerEvent(data.university.value, id);
        snackbar.success(res.data.message);
      } catch (error) {
        snackbar.error(error.response?.data.message);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  useEffect(() => {
    fetchWebinar();
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
          Daftar {type === "webinar" ? "Webinar" : "Course"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-x-20 mt-16">
          <div className="">
            <img src={coverImage} alt="" className="mx-auto sm:mx-0" />
            <h3 className="text-[#31B380] text-center sm:text-left font-semibold text-xl mt-5">
              {event.title}
            </h3>
            <p className="text-light text-[#211B3D] text-base mt-2 text-center sm:text-left">
              {event.description}
            </p>
          </div>
          <div className="mt-10 sm:mt-0">
            {isRegistered.is_registered ? (
              <Alert
                label="Anda sudah terdaftar di acara ini"
                type="success"
                icon={<InformationCircleIcon width={25} />}
              />
            ) : null}
            <form onSubmit={handleSubmit} className="mt-5">
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
                label="University"
                name="university"
                type="text"
                name="university"
                value={
                  isRegistered.university
                    ? isRegistered.university
                    : data.university.value
                }
                onChange={handleChange}
                errorText={errors.university}
                placeholder="Universitas Brawijaya"
                disabled={isRegistered.is_registered}
              />
              <ButtonPrimary
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

export default EventRegister;
