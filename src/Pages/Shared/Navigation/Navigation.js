import React from "react";
import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const activeLink = {
  borderBottom: "1px solid #162F62",
  color: "white",
};
const Navigation = () => {
  const { user, logOut } = useAuth();

  return (
    <div style={{ backgroundColor: "#052046" }}>
      <Container>
        <Row>
          <Navbar
            variant="dark"
            collapseOnSelect
            expand="md "
            style={{ color: "white" }}
          >
            <Navbar.Brand as={Link} to="/home">
              <div className="logo">
                <h5 className="text-light">Hero Car Shop</h5>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/* <Navbar.Toggle /> */}
            <Navbar.Collapse
              className=" text-light color justify-content-end nav-menu"
              id="basic-navbar-nav"
            >
              <Nav.Link activeStyle={activeLink} as={NavLink} to="/home">
                Home
              </Nav.Link>

              <Nav.Link activeStyle={activeLink} as={NavLink} to="/products">
                Products
              </Nav.Link>
              {user?.email ? (
                <div>
                  <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                    <NavDropdown.Item style={{ backgroundColor: "#052046" }}>
                      <Nav.Link
                        activeStyle={activeLink}
                        as={NavLink}
                        to="/userdb"
                      >
                        Dashboard
                      </Nav.Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Nav.Link
                        style={{ backgroundColor: "#052046" }}
                        onClick={logOut}
                        activeStyle={activeLink}
                      >
                        logout
                      </Nav.Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              ) : (
                <Nav.Link activeStyle={activeLink} as={NavLink} to="/login">
                  login
                </Nav.Link>
              )}
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;

// -------------------new style --------------

// import React from "react";
// import "./Navigation.css";

// const Navigation = () => {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
//         <div class="container">
//           <a class="navbar-brand" href="#!">
//             {/* <span style="color: #5e9693;">Psycho</span>
//             <span style="color: #fff;">logist</span> */}
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i class="fas fa-bars"></i>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav me-auto">
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   Offer
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   Features
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   Portfolio
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   Reference
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   About
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   Team
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#!">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//             <ul class="navbar-nav d-flex flex-row">
//               <li class="nav-item me-3 me-lg-0">
//                 <a class="nav-link" href="#!">
//                   <i class="fas fa-shopping-cart"></i>
//                 </a>
//               </li>
//               <li class="nav-item me-3 me-lg-0">
//                 <a class="nav-link" href="#!">
//                   <i class="fab fa-twitter"></i>
//                 </a>
//               </li>
//               <li class="nav-item me-3 me-lg-0">
//                 <a class="nav-link" href="#!">
//                   <i class="fab fa-instagram"></i>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navigation;
