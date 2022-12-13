import { Alert } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    axios
      .post("https://car-sales-server-site.vercel.app/addProduct", data)
      .then((res) => {
        if (res.data.insertedId) {
          setSuccess(true);
          reset();
          // console.log(res.data)
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="form-design p-2 m-2"
          defaultValue=""
          {...register("name")}
          placeholder="car name"
        />
        <br />
        <input
          className="form-design p-2 m-2"
          defaultValue=""
          {...register("description")}
          placeholder="Description"
        />
        <br />
        <input
          className="form-design p-2 m-2"
          defaultValue=""
          {...register("img")}
          placeholder="image url"
        />
        <br />

        <input
          className="form-design p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          placeholder="price"
        />
        <br />
        <input
          className="form-design p-2 m-2"
          defaultValue=""
          {...register("color", { required: true })}
          placeholder="color"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input
          style={{ backgroundColor: "#052046" }}
          className="p-2 m-2 btn btn-danger"
          type="submit"
        />
      </form>
      {success && <Alert severity="success">Product Added</Alert>}
    </div>
  );
};

export default AddProduct;
