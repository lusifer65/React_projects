import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <h1>MyTech</h1>
        <p>&copy;all right reserved</p>
      </div>
      <div className="details">
        <h1>Follow us</h1>
        <ul>
          <li>
            <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
              Youtube
            </a>
          </li>
          <li>
            <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="http://www.github.com" target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
