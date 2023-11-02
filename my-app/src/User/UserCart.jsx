import React, { useContext, useEffect, useState } from "react";
import { newcontext } from "../App";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
function UserCart() {
  const [product, setProduct, cart, setCart] = useContext(newcontext);

  const [price, setprice] = useState(0);

  const handleDelete = (index) => {
    const newData = [...cart];
    newData.splice(index, 1);
    setCart(newData);
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.quantity * item.Price));
    setprice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, []);
  const handleChange = (data, index, change) => {
    const tempArr = [...cart];
    tempArr[index].quantity += change;
    if (tempArr[index].quantity === 0) tempArr[index].quantity = 1;
    setCart(tempArr);
  };

  console.log(cart);

  return (
    <div>
      <article>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "serif",
            textDecoration: "underline",
          }}
        >
          {" "}
          My Cart
        </h1>

        {cart.map((data, index) => (
          <div className="d-flex flex nowrap box">
            <div className=" title">
              <img src={data.Image} className="image"></img>
              <h6>{data.Name}</h6>
            </div>
            <div className="d-flex flex nowrap  btndv">
              <Button
                variant="success"
                onClick={() => handleChange(data, index, 1)}
              >
                +
              </Button>
              <Button variant="light">{data.quantity}</Button>
              <Button onClick={() => handleChange(data, index, -1)}>-</Button>
            </div>
            <div>
              <span className="price">{data.Price}</span> &nbsp;
              <Button variant="danger" onClick={() => handleDelete(index)}>
                <AiFillDelete></AiFillDelete>
              </Button>
            </div>
          </div>
        ))}
        <div>
          <h6 style={{ marginLeft: "69%" }}>
            <span>Total price of your cart</span> Rs:{" "}
            <span className="price"> {price} </span>
          </h6>
        </div>
      </article>
    </div>
  );
}

export default UserCart;
