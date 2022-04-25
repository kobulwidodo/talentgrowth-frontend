import React, { useState } from "react";
import { loginUser } from "../../api/models/user";
import Button from "../../components/Button";
import InputGroup from "../../components/InputGroup";
import Navbar from "../../components/Navbar";
import { useUserContext } from "../../context/userContext";
import useSnackbar from "../../hooks/useSnackbar";

const formData = {
  email: {
    value: "",
    required: true,
  },
  password: {
    value: "",
    required: true,
  },
};

const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState({});
  const snackbar = useSnackbar();
  const { login } = useUserContext();

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
        const res = await loginUser(data.email.value, data.password.value);
        login(res.data.data.token);
        snackbar.success(res.data.message);
      } catch (error) {
        snackbar.error(error.response?.data.message);
      } finally {
        setIsSubmit(false);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto py-10 px-3 sm:px-6 lg:px-8">
        <h3 className="text-base font-semibold text-[#31B380] text-center">
          YOUR FUTURE CAREER
        </h3>
        <h2 className="text-3xl font-semibold text-[#211B3D] text-center mt-2">
          Masuk ke Akun Anda
        </h2>
        <form className="mt-10" onSubmit={handleSubmit}>
          <InputGroup
            label="Email Address"
            name="email"
            type="email"
            value={data.email.value}
            onChange={handleChange}
            errorText={errors.email}
            placeholder="example@domain.com"
          />
          <InputGroup
            label="Password"
            name="password"
            type="password"
            value={data.password.value}
            onChange={handleChange}
            errorText={errors.password}
            placeholder="password"
          />
          <Button
            submitting={isSubmit}
            isLink={false}
            label="Masuk"
            className="w-full"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
