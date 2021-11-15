
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const activeLink = {
    borderBottom: '1px solid #162F62',
    color: "white"
}
const Navigation = () => {

    const { user, logOut } = useAuth();

    return (
        <div style={{ backgroundColor: "#052046" }} >
            <Container>
                <Row>
                    <Navbar variant="dark" collapseOnSelect expand="md " style={{ color: "white" }}>
                        <Navbar.Brand as={Link} to="/home">
                            <div className="logo">
                                <h5 className="text-light">Hero Car Shop</h5>
                            </div>
                        </Navbar.Brand >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* <Navbar.Toggle /> */}
                        <Navbar.Collapse className=' text-light color justify-content-end nav-menu' id="basic-navbar-nav">

                            <Nav.Link activeStyle={activeLink} as={NavLink} to="/home">Home</Nav.Link>

                            <Nav.Link activeStyle={activeLink} as={NavLink} to="/products">Products</Nav.Link>
                            {
                                user?.email ?
                                    <div>

                                        <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                                            <NavDropdown.Item style={{ backgroundColor: '#052046' }} >
                                                <Nav.Link activeStyle={activeLink} as={NavLink} to="/userdb">Dashboard</Nav.Link>
                                            </NavDropdown.Item>


                                            <NavDropdown.Item >
                                                <Nav.Link style={{ backgroundColor: '#052046' }} onClick={logOut} activeStyle={activeLink} >logout</Nav.Link></NavDropdown.Item>
                                        </NavDropdown>

                                    </div>

                                    :
                                    <Nav.Link activeStyle={activeLink} as={NavLink} to="/login">login</Nav.Link>
                            }


                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container >
        </div >
    );
};

export default Navigation;