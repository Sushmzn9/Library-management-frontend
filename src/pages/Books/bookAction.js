import {
  deleteBook,
  fetchBook,
  postBook,
  updateBook,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setBooks } from "./bookSlice";
export const postBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBook(bookObj);

  toast.promise(dataPending, {
    pending: "Please Wait ....",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    //need rto fetch data
    dispatch(fetchBookAction());
  }
};
export const fetchBookAction = () => async (dispatch) => {
  const { status, books } = await fetchBook();

  if (status === "success") {
    dispatch(setBooks(books));
  }
};

export const updateBookAction = (bookObj) => async (dispatch) => {
  const dataPending = updateBook(bookObj);

  toast.promise(dataPending, {
    pending: "Please Wait ....",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    //need rto fetch data
    dispatch(fetchBookAction());
  }
};

export const deleteBookAction = (_id) => async (dispatch) => {
  const dataPending = deleteBook(_id);

  toast.promise(dataPending, {
    pending: "Please Wait ....",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    //need rto fetch data
    dispatch(fetchBookAction());
    return true;
  }
};
