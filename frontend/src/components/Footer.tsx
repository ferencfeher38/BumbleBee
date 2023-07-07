import React from "react";
import "../styles/Footer.scss";

const Footer = function () {
  const year: number = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>© {year} BumbleBee, No rights reserved.</p>
    </div>
  );
};

export default Footer;
