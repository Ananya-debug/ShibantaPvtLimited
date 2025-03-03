import React from "react";
import styles from "./TheTe.module.css";

const TheTeGlobal = () => {
  return (
    <div className={styles.teContainer}>
      <h1 className={styles.title}>Welcome to The Te Global</h1>

      {/* Centered Image */}
      <div className={styles.imageContainer}>
        <img src="/Telogo2.jpg" alt="The Te Global" className={styles.teImage} />
      </div>

      {/* Subtitle */}
      <h2 className={styles.subtitle}>A Cup of Love</h2>

      {/* Bio Section */}
      <p className={styles.bio}>
        At <span>The Te Global</span>, we bring you the finest and most authentic tea leaves, 
        sourced with care and dedication. Our mission is to revive traditional values by 
        providing high-quality tea at reasonable prices. Experience the taste of purity with 
        every sip.
      </p>

      {/* Explore Button */}
      <a href="https://g.co/kgs/ooHzsAZ" className={styles.exploreButton}>Explore Our Teas</a>
    </div>
  );
};

export default TheTeGlobal;
