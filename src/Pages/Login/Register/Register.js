import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('incorrect')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.preventDefault()
    };

    return (
        <div>

            <div className=" img-fluid" style={{
                backgroundImage: `url("https://i.ibb.co/Xjt4Bwc/lgbgh.jpg")`,
                height: "600px",
                backgroundSize: "cover",
            }}>
                <div className=" w-md-50 d-flex justify-content-center ">
                    <div className="p-5 mb-5" >
                        <h4 className="text-light ">Register</h4>
                        {!isLoading &&
                            <form form onSubmit={handleLoginSubmit} className='signUpForm my-5 '>
                                <input className="my-2 p-2 px-5" type="name" name="name" onBlur={handleOnBlur} id="name" placeholder='type your name' required />
                                <br />
                                <input className="my-3 p-2 px-5" type="email" name="email" onBlur={handleOnBlur} id="email" placeholder='Your email' required />
                                <br />
                                <input className="p-2 px-5 py-2" type="password" name="password" onBlur={handleOnBlur} id="pass" placeholder='Your password' required />
                                <br />

                                <input className="p-2 px-5 my-3" type="password" name="password2" onBlur={handleOnBlur} id="password" placeholder='Retype your password' required />
                                <br />
                                <br />

                                <NavLink style={{ textDecoration: "none", color: 'white', padding: "2px", backgroundColor: 'black', }} to="/login">
                                    Already Registered ? Please login
                                </NavLink>
                                <br />
                                <Button type="submit" className="bg-light btn my-3 px-5 btn-danger text-dark ">
                                    Register</Button>

                            </form>
                        }
                        {isLoading && <CircularProgress color="secondary" />}
                        {
                            user?.email && <Alert severity="success">User Created successfully</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </div>

                </div>

            </div >
        </div >
    );
};

export default Register;