import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import {
  deleteBookAction,
  postBookAction,
  updateBookAction,
} from "../../pages/Books/bookAction";
import { Link, useParams } from "react-router-dom";
export const EditBookForm = () => {
  const { user } = useSelector((state) => state.userInfo);
  const { books } = useSelector((state) => state.bookInfo);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { _id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((item) => item._id === _id);
      selectedBook?._id && setForm(selectedBook);
    }
  }, [_id, form._id, books]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookAction(form));
    console.log(form);
  };

  const handleOnDelete = async () => {
    if (window.confirm("Do you want to delete")) {
      const isDeleted = await dispatch(deleteBookAction(_id));
      isDeleted && navigate("/books");
    }
  };
  const inputs = [
    {
      label: "Book title",
      name: "title",
      type: "text",
      placeholder: "How to become js pro",
      required: "true",
      value: form.title,
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Uncle Bob.",
      required: "true",
      value: form.author,
    },
    {
      label: "Year",
      name: "year",
      type: "number",
      required: "true",
      value: form.year,
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "http://...",
      required: "true",
      value: form.thumbnail,
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "book summary......",
      required: "true",
      value: form.summary,
    },
  ];

  return (
    <UserLayout title="Edit New Book">
      {user?.role !== "admin" ? (
        <h1>Unauthorized access</h1>
      ) : (
        <div className="py-3">
          <Link to="/books">
            <Button variant="secondary">&lt; Back {_id}</Button>
          </Link>
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-flex">
              <Button variant="primary" type="submit">
                Update Book
              </Button>
            </div>
          </Form>
          <div className="text-end">
            <Button variant="danger" type="submit" onClick={handleOnDelete}>
              Delete Book
            </Button>
          </div>
        </div>
      )}
    </UserLayout>
  );
};
