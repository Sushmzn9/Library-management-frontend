import { fetchBurrow, postBurrow, returnBurrow } from "../../helper/axios";
import { toast } from "react-toastify";
import { setBurrow } from "./BurrowSlice";
import { fetchBookAction } from "../Books/bookAction.js";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //need rto fetch data
    dispatch(fetchBookAction());
    dispatch(fetchBurrowAction());
  }
};

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, burrowHistory } = await fetchBurrow();

  if (status === "success") {
    dispatch(setBurrow(burrowHistory));
  }
};

export const updateBurrowAction = (bookObj) => async (dispatch) => {
  const dataPending = returnBurrow(bookObj);

  toast.promise(dataPending, {
    pending: "Please Wait ....",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    //need rto fetch data
    dispatch(fetchBurrowAction());
    dispatch(fetchBookAction());
  }
};
