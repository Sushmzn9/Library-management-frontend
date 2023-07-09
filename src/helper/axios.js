import axios from "axios";
const rootApi = "http://localhost:8000";
const userApi = rootApi + "/api/v1/user";
const bookApi = rootApi + "/api/v1/book";
const burrowApi = rootApi + "/api/v1/burrow";

const getUserIdFromLocalStorage = () => {
  const str = localStorage.getItem("persist:userInfo");
  if (str) {
    const userInfo = JSON.parse(str);
    if (userInfo.user) {
      const user = JSON.parse(userInfo.user);
      console.log(user);
      return user?._id;
    }
    return null;
  }
};

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
    const { data } = await axios.post(bookApi, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
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
    const { data } = await axios.put(bookApi, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
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
    const { data } = await axios.delete(bookApi + "/" + _id, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// ===== burrow

export const postBurrow = async (obj) => {
  try {
    const { data } = await axios.post(burrowApi, obj, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchBurrow = async () => {
  try {
    const { data } = await axios.get(burrowApi, {
      headers: {
        Authorization: getUserIdFromLocalStorage(),
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
