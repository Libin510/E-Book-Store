import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import axios from "axios";
import NavbarH from "./NavbarH";
import Button from "react-bootstrap/Button";
import Footter from "./Footerr/Footter";

function Login() {
  const [justifyActive, setJustifyActive] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleJustifyClick = (value) => {
    setJustifyActive(value);
  };

  const handleLogin = async () => {
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (response.data.message === "Login successful") {
        console.log("Login successful");
        handleHideNavBarClick();
        nav("/userlog");
      } else {
        setError("Invalid email or password");
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.log("Invalid email or password");
      setError("An error occurred during login");
    }
  };
  const [hideNavBar, setHideNavBar] = useState(false);

  const handleHideNavBarClick = () => {
    setHideNavBar(true);
  };

  const Adminlogin = async () => {
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/adminlog", {
        email,
        password,
      });
      if (response.data.message === "Login successful") {
        console.log("Login successful");
        handleHideNavBarClick();
        nav("/adminlog");
      } else {
        setError("Invalid email or password");
        console.log("Invalid email or password");
      }
    } catch (error) {
      console.log("Invalid email or password");
      setError("An error occurred during login");
    }
  };

  return (
    <div className="loginpg">
      {hideNavBar ? null : <NavbarH />}

      <MDBContainer style={{ width: "500px", marginTop: "40px" }}>
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("user")}
              active={justifyActive === "user"}
            >
              User
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("admin")}
              active={justifyActive === "admin"}
            >
              Admin
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "user"}>
            <MDBInput
              wrapperClass="mb-4 white-label-color"
              label="Email address"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 white-label-color"
              label="Password"
              id="form2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex justify-content-between mx-4 mb-4 white-label-color">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
            </div>
            <Button
              variant="primary"
              className="mb-4 w-100"
              onClick={handleLogin}
            >
              Login
            </Button>
            <p>{error}</p>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "admin"}>
            <MDBInput
              wrapperClass="mb-4 white-label-color"
              label="Email address"
              id="form3"
              type="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4 white-label-color"
              label="Password"
              id="form4"
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex justify-content-between mx-4 mb-4  white-label-color">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
            </div>

            <Button
              variant="primary"
              className="mb-4 w-100"
              onClick={Adminlogin}
            >
              Login
            </Button>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
      <div>
        <Footter />
      </div>
    </div>
  );
}

export default Login;
