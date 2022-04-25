import { coreApi } from "..";

export const getInternships = () => {
  return coreApi.get(`/internship/`);
};

export const getInternship = (id) => {
  return coreApi.get(`/internship/${id}`);
};

export const applyInternship = (age, college, major, id) => {
  const param = {
    age: parseInt(age),
    college: college,
    major: major,
  };
  return coreApi.post(`/internship-applicant/create/${id}`, param);
};

export const uploadCv = (file, id) => {
  const formData = new FormData();
  formData.append("file", file);
  return coreApi.post(`/internship-applicant/create/cv/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getStatusApplicant = (id) => {
  return coreApi.get(`/internship-applicant/status/${id}`);
};
