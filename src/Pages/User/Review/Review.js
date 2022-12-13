import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "./Review.css";

const Review = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("comment", data);
    fetch("https://car-sales-server-site.vercel.app/addReviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };
  const { user } = useAuth();

  return (
    <div>
      <h2>Send your feed back</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-design p-2 m-2"
          {...register("email", { required: true })}
          defaultValue={user?.email}
          placeholder="email"
        />
        <br />
        <input
          className="form-design p-2 m-2"
          defaultValue={user?.displayName}
          {...register("name", { required: true })}
          placeholder="name"
        />
        <br />
        <input
          className="form-design p-2 m-2"
          defaultValue=""
          {...register("comment")}
          placeholder="Comment"
        />
        <br />
        <input
          className="form-design p-2 m-2"
          type="number"
          {...register("rating", { minLength: 1, maxLength: 3 })}
          placeholder="give rating 1-5"
        />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <br />
        <input
          className="p-2 m-2 btn text-light "
          style={{ backgroundColor: "#052046" }}
          type="submit"
        />
      </form>
      {success && <Alert severity="success">Review add success</Alert>}
    </div>
  );
};

export default Review;
