import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BurrowHistory = () => {
  const { burrow } = useSelector((state) => state.burrowInfo);

  return (
    <UserLayout title="BurrowHistory">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Book Title</th>
            <th>Burrowed by Name</th>
            <th> Burrow Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrow.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>

              <td>
                <img src={item.thumbnail} width="150px" alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate.slice(0, 10)}</td>
              <td>
                {burrow?._id ? (
                  <Link>
                    <Button variant="danger">Return</Button>
                  </Link>
                ) : (
                  <Button variant="warning" disabled>
                    Return
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
