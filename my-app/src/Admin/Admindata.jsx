import React, { useContext, useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import ButtonGroup from "antd/es/button/button-group";
import Adminlog from "./Adminlog";
import { newcontext } from "../App";

function Admindata() {
  const [product, setProduct, cart, setCart] = useContext(newcontext);

  const handleDelete = (id, name) => {
    if (window.confirm(`are you sure want to delete ${name}`)) {
      fetch(`http://localhost:5000/delet/${id}`, {
        method: "DELETE",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("deleted");
        });
    } else {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get");

      const responseData = await response.data;
      setCart(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(cart);

  return (
    <div>
      <Adminlog />
      <div className="adminbook">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Availability</th>
              <th scope="col">Year</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {cart.map((item) => {
              return (
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.Image}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{item.Name}</p>
                        <p className="text-muted mb-0">
                          Publisher: {item.Publisher}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{item.Author}</p>
                  </td>
                  <td>
                    <MDBBadge color="success" pill>
                      Active
                    </MDBBadge>
                  </td>
                  <td>{item.Year}</td>
                  <td>
                    <ButtonGroup variant="outlined" href="#outlined-buttons">
                      <FaEdit></FaEdit>
                    </ButtonGroup>
                  </td>
                  <td>
                    <ButtonGroup variant="outlined" href="#outlined-buttons">
                      <RiDeleteBinFill
                        onClick={() => handleDelete(item._id, item.Name)}
                      ></RiDeleteBinFill>
                    </ButtonGroup>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default Admindata;
