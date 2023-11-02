import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Userlog from "./User/Userlog";
import Adminlog from "./Admin/Adminlog";
import Admindata from "./Admin/Admindata";
import Createbook from "./Admin/Createbook";
import UserCart from "./User/UserCart";
import { createContext, useState } from "react";
import Home from "./Homem/Home";

export const newcontext = createContext();
function App() {
  const [product, setproduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const [warning, setwarning] = useState(false);

  const addtocart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handlechange = (item, d) => {
    const ind = cart.indexof(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <newcontext.Provider
        value={[product, setproduct, cart, setCart, addtocart, handlechange]}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/regi" element={<Register />}></Route>
            <Route path="/userlog" element={<Userlog />}></Route>
            <Route path="/adminlog" element={<Adminlog />}></Route>
            <Route path="/adminbook" element={<Admindata />}></Route>
            <Route path="/createbook" element={<Createbook />}></Route>
            <Route path="/mycart" element={<UserCart />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </newcontext.Provider>
    </div>
  );
}

export default App;
