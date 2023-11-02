import React from "react";
import "antd/dist/antd";
import { Menu } from "antd";
import { FaHome } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { LiaSignOutAltSolid } from "react-icons/lia";
import Admindata from "./Admindata";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function Adminlog() {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "./";
  };
  return (
    <div>
      <Menu
        defaultOpenKeys={["1"]}
        defaultSelectedKeys={["1"]}
        style={{ width: 150 }}
        mode="inline"
      >
        <Menu.Item key="1">
          <FaHome></FaHome> <Link to="/home">Home</Link>
        </Menu.Item>

        <Menu.Item key="3">
          {" "}
          <MdOutlineCreateNewFolder></MdOutlineCreateNewFolder>{" "}
          <Link to="/createbook">Create Books</Link>
        </Menu.Item>
        <Menu.Item key="4">
          {" "}
          <ImBooks></ImBooks>
          <Link to="/adminbook">Books</Link>
        </Menu.Item>
        <Menu.Item key="5" onClick={logout}>
          {" "}
          <LiaSignOutAltSolid></LiaSignOutAltSolid> Sign Out
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Adminlog;
