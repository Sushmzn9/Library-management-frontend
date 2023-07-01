import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";

const Books = () => {
  const { user } = useSelector((state) => state.userInfo);

  return user?.role !== "admin" ? (
    <h1>unauthorized access</h1>
  ) : (
    <UserLayout title="Books">Books</UserLayout>
  );
};
export default Books;
