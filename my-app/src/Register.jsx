import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
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
import NavbarH from "./NavbarH";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Name, setname] = useState("");
  const nav = useNavigate();

  const [hideNavBar, setHideNavBar] = useState(false);

  const handleHideNavBarClick = () => {
    setHideNavBar(true);
  };

  const userregister = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const values = await axios.post(
        "http://localhost:5000/log",
        { Name, email, password },
        config
      );

      console.log(values.data);
      localStorage.setItem("user", JSON.stringify(values.data));
      nav("/userlog");
    } catch (error) {
      console.log("couldn't signup", error);
      alert("user already exist");
    }
  };

  const Adminregister = async () => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const values = await axios.post(
        "http://localhost:5000/admin",
        { Name, email, password },
        config
      );

      console.log(values.data);
      localStorage.setItem("user", JSON.stringify(values.data));
      nav("/adminlog");
    } catch (error) {
      console.log("couldn't signup", error);
      alert("user already exist");
    }
  };

  const [justifyActive, setJustifyActive] = useState("user");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <div>
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
            <div className="text-center mb-3">
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
              onChange={(e) => setname(e.target.value)}
            />

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn className="mb-4 w-100" onClick={userregister}>
              Sign up
            </MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "admin"}>
            <div className="text-center mb-3">
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Name"
              id="form1"
              type="text"
              onChange={(e) => setname(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="d-flex justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I have read and agree to the terms"
              />
            </div>

            <MDBBtn className="mb-4 w-100" onClick={Adminregister}>
              Sign up
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </div>
  );
}

export default Register;
