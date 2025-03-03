import React from "react";
import styles from "./Footer.module.css"; // Import CSS module
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa"; // Social icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section - Logo & Company Name */}
        <div className={styles.footerLogo}>
          <img src="/Logo.png" alt="Shibanta Global" className={styles.logo} />
          <span>Shibanta Global Pvt Ltd</span>
        </div>

        {/* Center Section - Quick Links */}
        {/* <ul className={styles.footerLinks}>
        <li><a href="#about">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul> */}

        {/* Right Section - Social Media Links */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/share/1F9AGdQvGy/"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/theteglobal?igsh=MWJlMnV1MmV0emMxcA=="
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a href="https://g.co/kgs/h9B9dfx" aria-label="Google">
            <FaGoogle />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p>© 2025 Shibanta Global. All rights reserved.</p>
        <p>
          Developer:{" "}
          <span className={styles.highlight}>Ananya Chakraborty</span> | Phone
          No: <span className={styles.highlight}>9832138821</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
