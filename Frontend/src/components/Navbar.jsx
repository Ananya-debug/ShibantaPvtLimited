import React, { useState } from "react";
import styles from "./Navbar.module.css"; // Import CSS module
import { FiMenu, FiX } from "react-icons/fi"; // For icons
import Home from "./Home.jsx"; // Import Home Page
import AboutUs from "./AboutUs.jsx"; // Import About Us Page
import ContactUs from "./ContactUs.jsx"; // Import Contact Us Page
import TheTe from "./TheTe.jsx"; // Import The Te Global Page

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // Default selected tab

  // Function to render the selected tab content
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "about":
        return <AboutUs />;
      case "contact":
        return <ContactUs />;
      case "the-te-global":
        return <TheTe />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Left Side - Logo and Company Name */}
          <div className={styles.navLogo}>
            <img src="/Logo.png" alt="Shibanta Global" className={styles.logo} />
            <span>Shibanta Global</span>
          </div>

          {/* Right Side - Navigation Links (Hidden on Mobile) */}
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
            <li>
              <button
                className={activeTab === "home" ? styles.active : ""}
                onClick={() => setActiveTab("home")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeTab === "about" ? styles.active : ""}
                onClick={() => setActiveTab("about")}
              >
                The Shibanta Vision
              </button>
            </li>
            <li>
              <button
                className={activeTab === "contact" ? styles.active : ""}
                onClick={() => setActiveTab("contact")}
              >
                Get In Touch
              </button>
            </li>
            <li>
              <button
                className={`${styles.specialLink} ${activeTab === "the-te-global" ? styles.active : ""}`}
                onClick={() => setActiveTab("the-te-global")}
              >
                The Te Global
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Render the Selected Tab Content */}
      <div className={styles.pageContent}>{renderContent()}</div>
    </>
  );
};

export default Navbar;
