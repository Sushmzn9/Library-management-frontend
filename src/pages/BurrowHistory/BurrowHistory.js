import React, { useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { updateBurrowAction } from "./BurrowAction";
import { ReviewForm } from "../../components/review/ReviewForm";
import { setModalShow } from "../../system/systemSlice";
import { CustomModal } from "../../components/modal/CustomModal";

export const BurrowHistory = () => {
  const [selectedReview, setSelectedReview] = useState({});
  const { burrow } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  const handleOnReturn = ({ bookId, _id }) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      const obj = { bookId, burrowId: _id };

      dispatch(updateBurrowAction(obj));
    }
  };
  const handleOnReview = (burrowBook) => {
    setSelectedReview(burrowBook);
    dispatch(setModalShow(true));
  };
  return (
    <UserLayout title="BurrowHistory">
      {selectedReview?._id && (
        <CustomModal
          modalTitle={`Leave your review ${selectedReview.bookName}`}
        >
          <ReviewForm selectedReview={selectedReview} />
        </CustomModal>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Book Title</th>
            <th>Burrowed by Name</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrow?.map((item, i) => (
            <tr key={item?._id}>
              <td>{i + 1}</td>

              <td>
                <img src={item.thumbnail} width="100px" alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td>
                {item.userId === user._id && !item.isRetured ? (
                  <Button onClick={() => handleOnReturn(item)}>Return</Button>
                ) : item?.reviewGiven ? (
                  "review Given"
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleOnReview(item)}
                  >
                    Leave review
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BurrowHistory;
