
import { Alert } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch("https://glacial-escarpment-59764.herokuapp.com/makeAdmin", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.modifiedCount) {
                    console.log(result)
                    setSuccess(true);
                    reset();
                }
            });



    }

    return (
        <div>
            <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-design p-2 m-2"  {...register("email", { required: true })} defaultValue="" placeholder="Make Admin" />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="p-2 m-2 btn text-light " style={{ backgroundColor: "#052046" }} type="submit" />
            </form>
            {success && <Alert severity="success">Make Admin Confirmed</Alert>}
        </div>
    );
};

export default MakeAdmin;