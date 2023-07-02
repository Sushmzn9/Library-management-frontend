import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../custom-input/Custominput";
import { useDispatch, useSelector } from "react-redux";
import { UserLayout } from "../layout/UserLayout";
import { postBookAction } from "../../pages/Books/bookAction";
export const NewBookForm = () => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postBookAction(form));
    console.log(form);
  };
  const inputs = [
    {
      label: "Book title",
      name: "title",
      type: "text",
      placeholder: "How to become js pro",
      required: "true",
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      placeholder: "Uncle Bob.",
      required: "true",
    },
    {
      label: "Year",
      name: "year",
      type: "number",
      required: "true",
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      placeholder: "http://...",
      required: "true",
    },
    {
      label: "Summary",
      name: "summary",
      type: "text",
      as: "textarea",
      placeholder: "book summary......",
      required: "true",
    },
  ];

  return (
    <UserLayout title="Add New Book">
      {user?.role !== "admin" ? (
        <h1>Unauthorized access</h1>
      ) : (
        <div className="py-3">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((item, i) => (
              <CustomInput key={i} {...item} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </div>
          </Form>
        </div>
      )}
    </UserLayout>
  );
};
