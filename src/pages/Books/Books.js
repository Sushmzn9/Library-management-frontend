import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { BookTable } from "../../components/book-com/BookTable";
import { Link } from "react-router-dom";
import { NeBookForm } from "../../components/book-com/NewBookForm";

const Books = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1>unauthorized access</h1>
  ) : (
    <UserLayout title="Books">
      <div className="text-end">
        <Link to="/book/new">
          <Button>Add New Book</Button>
        </Link>
      </div>

      <div className="mt-3">
        {/* table */}
        {<BookTable />}
      </div>
    </UserLayout>
  );
};
export default Books;
