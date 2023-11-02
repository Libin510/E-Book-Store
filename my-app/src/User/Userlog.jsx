import React, { useContext, useEffect, useState } from "react";
import "./BookCart.css";
import { newcontext } from "../App";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Userlog() {
  const [product, setProduct, cart, setCart, addtocart] =
    useContext(newcontext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get");

      const responseData = await response.data;
      setProduct(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Link to="/mycart">
                  <AiOutlineShoppingCart />
                  <sup style={{ color: "orange" }}>{cart.length}</sup> My Cart
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to="/home">Home</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="book-cart">
        <div className="book-list">
          <h3>Available Books</h3>
          <div className="flex-container">
            {product.map((book) => (
              <div key={book.id} className="book-item">
                <img src={book.Image} alt={book.Name} />
                <p className="book-title">{book.Name}</p>
                <p className="book-price">${book.Price}</p>
                <Button onClick={() => addtocart(book)}>Add to Cart</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlog;
