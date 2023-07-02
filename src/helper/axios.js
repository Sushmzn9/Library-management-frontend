import axios from "axios";
const rootApi = "http://localhost:8000";
const userApi = rootApi + "/api/v1/user";
const bookApi = rootApi + "/api/v1/book";
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

// ===== books

export const postBook = async (obj) => {
  try {
    const { data } = await axios.post(bookApi, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchBook = async () => {
  try {
    const { data } = await axios.get(bookApi);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateBook = async (obj) => {
  try {
    const { data } = await axios.put(bookApi, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteBook = async (_id) => {
  try {
    const { data } = await axios.delete(bookApi + "/" + _id);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
