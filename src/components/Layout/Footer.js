import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">Online Art Ordering @ 2024</h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contactss">Contact</Link>|
        <Link to="/policy">Privacy policy</Link>
      </p>
    </div>
  );
};

export default Footer;
