import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  // const [status, setStatus] = useState("");
  const [isDelete, setIsDelete] = useState("");

  // const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch("https://car-sales-server-site.vercel.app/totalOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isDelete]);

  const handleDelete = (id) => {
    fetch(`https://car-sales-server-site.vercel.app/deleteBuy/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setIsDelete(true);
        } else {
          setIsDelete(false);
        }
      });
  };

  return (
    <div>
      <h2>Total Orders : {allOrders.length}</h2>
      <Table class="table table-dark table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th> status update</th>
            <th> Delete</th>
          </tr>
        </thead>
        {allOrders?.map((order, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.date}</td>
              <td>
                <Button
                  onClick={() => handleDelete(order._id)}
                  className=" text-light card-btn"
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrders;
