import { postReview } from "../../helper/axios";
import { toast } from "react-toastify";
import { fetchBurrowAction } from "../BurrowHistory/BurrowAction";
import { setModalShow } from "../../system/systemSlice";
import { getReview } from "../../../../api/src/model/Review/ReviewModel";
import { setReviews } from "./reviewSlice";

export const postReviewAction = (obj) = async (dispatch) => {
  const { status, message } = await postReview(obj);

  toast[status](message);

  if (status === "success") {
    dispatch(setModalShow(false));
    dispatch(fetchBurrowAction());
  }
};
export const fetchReviewAction = () = async (dispatch) => {
  const { status, message, reviews } = await getReview();

  toast[status](message);

  if (status === "success") {
   dispatch(setReviews(reviews))
  }
};
