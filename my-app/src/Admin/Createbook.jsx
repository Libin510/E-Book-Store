import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./bookdtl.css";

function Createbook() {
  const [Name, setname] = useState("");
  const [Image, setImage] = useState("");
  const [Author, setauthor] = useState("");
  const [Publisher, setPublisher] = useState("");
  const [Price, setprice] = useState("");
  const [Year, setyear] = useState("");
  const [Availability, setavailability] = useState(false);
  const [message, setMessage] = useState("");
  const [bookData, setBookData] = useState({});
  const [show, setShow] = useState(false);

  const Bookcreate = async () => {
    setShow(true);
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const values = await axios.post(
        "http://localhost:5000/store",
        { Name, Image, Price, Author, Publisher, Year, Availability },
        config
      );

      console.log(values.data);
      setMessage("Book created successfully!");
      setBookData(values.data);

      localStorage.setItem("book", JSON.stringify(values.data));
    } catch (error) {
      console.log("couldn't Create book", error);
      alert("Book already exists");
    }
  };

  return (
    <section>
      <div className="body">
        <h1>Create Book</h1>
        <form
          style={{ width: "700px", marginTop: "50px", marginLeft: "400px" }}
        >
          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                id="form6Example1"
                label="Book Name"
                onChange={(e) => setname(e.target.value)}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput
                id="form6Example2"
                label="Author"
                onChange={(e) => setauthor(e.target.value)}
              />
            </MDBCol>
          </MDBRow>

          <MDBInput
            wrapperClass="mb-4"
            id="form6Example3"
            label="Publicationsname"
            onChange={(e) => setPublisher(e.target.value)}
          />

          <MDBInput
            wrapperClass="mb-4"
            type="number"
            id="form6Example5"
            label="Year"
            onChange={(e) => setyear(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            type="link"
            id="form6Example5"
            label="Image"
            onChange={(e) => setImage(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            type="number"
            id="form6Example5"
            label="Price"
            style={{ width: "200px" }}
            onChange={(e) => setprice(e.target.value)}
          />

          <MDBCheckbox
            wrapperClass="d-flex justify-content-center mb-4"
            id="form6Example8"
            label="Availability"
            defaultChecked={Availability}
            onChange={(e) => setavailability(e.target.checked)}
          />

          <div style={{ textAlign: "center" }}>
            <Button onClick={Bookcreate}>Add</Button>
          </div>
        </form>
      </div>
      {show && (
        <div className="book">
          <h3>{message}</h3>
          <img className="book-image" src={bookData.Image} alt="no img" />
          <h2 className="book-title">{bookData.Name}</h2>
          <p className="book-author">By {bookData.Author}</p>
        </div>
      )}
    </section>
  );
}

export default Createbook;
