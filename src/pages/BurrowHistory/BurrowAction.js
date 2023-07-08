import { fetchBurrow, postBurrow } from "../../helper/axios";
import { toast } from "react-toastify";
import { setBurrow } from "./BurrowSlice";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //need rto fetch data

    dispatch(fetchBurrowAction());
  }
};

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, burrow } = await fetchBurrow();

  if (status === "success") {
    dispatch(setBurrow(burrow));
  }
};
