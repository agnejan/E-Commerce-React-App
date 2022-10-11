import React from "react";
import "../styling/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>Copyright © </div>
      <div>Agnita's Website </div>
      <div>{new Date().getFullYear()}</div>
    </div>
  );
}

export default Footer;
