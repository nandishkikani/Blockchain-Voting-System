import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          <a
            className="profile"
            href="https://github.com/arlbibek/dVoting"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href="https://arlbibek.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fenil Abhi Nandish
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
