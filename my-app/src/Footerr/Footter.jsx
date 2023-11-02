import React from "react";
import "./Footer.css";

function Footter() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://img.freepik.com/free-vector/hand-drawn-bookstore-logo_23-2149331221.jpg?w=2000" alt="Your e-Book Store Logo" />
          <p>E-Book Store</p>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">E-Books</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Follow us on social media:</p>
          <ul>
            <li>
              <a href="#">
                <img
                  src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg?w=360"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/745/original/twitter-logo-twitter-icon-transparent-free-free-png.png" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 E-Book Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footter;
