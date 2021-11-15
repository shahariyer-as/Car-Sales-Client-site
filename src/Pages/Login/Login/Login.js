import { CircularProgress, Alert } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);


        e.preventDefault()
    };

    return (


        <div className=" img-fluid" style={{
            backgroundImage: `url("https://i.ibb.co/Xjt4Bwc/lgbgh.jpg")`,
            height: "600px",
            backgroundSize: "cover",
        }}>
            <div className=" w-md-50 d-flex justify-content-center ">
                <div className="p-5 mb-5" >
                    <h4 className="text-light ">Login</h4>
                    <form onSubmit={handleLoginSubmit} className='signUpForm my-5 '>
                        <input className="my-3 p-2 px-5" type="email" name="email" onChange={handleOnChange} id="email" placeholder='Your email' required />
                        <br />
                        <input className="p-2 px-5 py-2" type="password" name="password" onChange={handleOnChange} id="pass" placeholder='Your password' required />
                        <br />
                        <br />
                        <NavLink style={{ textDecoration: "none", color: 'white', padding: "2px", backgroundColor: 'black', }} to="/register">
                            <Button> New user? Please Register</Button>
                        </NavLink>
                        <br />
                        <Button type="submit" className="bg-light btn my-3 px-5 btn-danger text-dark ">
                            Login</Button>
                        <br />
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>

                </div>

            </div>

        </div >
    );
};

export default Login;