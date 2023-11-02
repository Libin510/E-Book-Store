const express = require("express");
const data = require("../Controller/Userregister");
const admin = require("../Controller/AdminRegister");
const login = require("../Controller/Userlogin");
const Adlogin = require("../Controller/Adminlogin");
const protect = require("../Token");
const Book = require("../Controller/Bookdata");
const getdata = require("../Controller/Getbookdata");
const deletedata = require("../Controller/Dltbookdata");

const middleware = [protect];
const router = express.Router();

router.route("/log").post(data);

router.route("/admin").post(admin);
router.route("/adminlog").post(Adlogin);

router.route("/login").post(login);
router.route("/store").post(Book);

router.route("/get").get(getdata);

router.route("/delet/:id").delete(deletedata);



module.exports = router;
