import Axios from "./axios";

export const login = (data) => {
  return Axios.post("/api/login", data);
};

export const otpverify = (data) => {
  return Axios.post("/api/otpverify", data);
};

export const forgotPassword = (data) => {
  return Axios.post("/api/forgotPassword", data);
};

export const sendOtp = (data) => {
  return Axios.post("/api/sendOtp", data);
};

export const getJobField = () => {
  return Axios.get("/api/getJobField");
};

export const updateJobfields = (data) => {
  return Axios.post("/api/updateJobfields", data);
};

export const createJobFields = (data) => {
  return Axios.post("/api/createJobFields", data);
};

export const createOneApplication = (data) => {
  return Axios.post("/api/createOneApplication", data);
};

export const updateOneApplication = (data) => {
    return Axios.post("/api/updateOneApplication", data);
  };

export const getOneAppForm = (data) => {
  return Axios.post("/api/getOneAppForm", data);
};

export const createApplicationStatus = (data) => {
  return Axios.post("/api/createApplicationStatus", data);
};

export const updateOneApplicationStatus = (data) => {
  return Axios.post("/api/updateOneApplicationStatus", data);
};

export const getApplication = (data) => {
  return Axios.post("/api/getApplication", data);
};

export const getAllApplicationStatus = (data) => {
  return Axios.post("/api/getAllApplicationStatus", data);
};

export const createResume = (data) => {
  return Axios.post("/api/createResume", data);
};
