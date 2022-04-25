import { coreApi } from "..";

export const getUser = () => {
  return coreApi.get(`/me`);
};

export const loginUser = (email, password) => {
  const param = {
    email: email,
    password: password,
  };
  return coreApi.post("/auth/signin", param);
};

export const registerUser = (name, email, password, occupation) => {
  const param = {
    name: name,
    email: email,
    password: password,
    occupation: occupation,
  };
  return coreApi.post("/auth/signup", param);
};
