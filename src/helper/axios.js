import axios from "axios";
const rootApi = "http://localhost:8000";
const userApi = rootApi + "/api/v1/user";
export const postUser = async (userData) => {
  try {
    const { data } = await axios.post(userApi, userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userApi + "/login", userData);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
