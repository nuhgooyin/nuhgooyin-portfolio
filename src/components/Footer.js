import React from "react";
import "./Footer.css"; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Dan Nguyen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
