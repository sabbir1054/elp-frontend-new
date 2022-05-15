import React from "react";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";
import style from "../NavBarHome/NavBarHome.module.css";
import styleB from '../../Pages/Dashboard/StudentDashboard/StudentDashboard.module.css'
import Out from "../Out";

const StudentNav = () => {

  


  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      <Navbar className={style.navBar_bg}>
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/" className="text-decoration-none">
              <h3 className="text-white">Education Learning Platform</h3>{" "}
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto ">
              <NavLink
                to="/dashboard"
                className={`text-white text-decoration-none mx-2 fw-bold ${styleB.navLink}`}
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                className={`text-white text-decoration-none mx-2 fw-bold ${styleB.navLink}`}
              >
                Profile
              </NavLink>
              <NavLink
                to="/course"
                className={`text-white text-decoration-none mx-2 fw-bold ${styleB.navLink}`}
              >
                Course
              </NavLink>
              <NavLink
                to="/course"
                className={`text-white text-decoration-none mx-2 fw-bold ${styleB.navLink}`}
              >
                Result
              </NavLink>
            </Nav>
            <Navbar.Text className="btn btn-danger px-3">
              <Out></Out>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
        <div className="text-white">
          {" "}
          <hr />{" "}
        </div>
      </Navbar>
    </>
  );
};

export default StudentNav;
