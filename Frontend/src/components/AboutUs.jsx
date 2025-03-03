import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>The Shibanta Vision</h1>

      <div className={styles.owners}>
        {/* Owner 1 */}
        <div className={styles.owner}>
          <img src="/shibajee.jpg" alt="Shibajee Chakraborty" className={styles.ownerImage} />
          <h2 className={styles.ownerName}>Shibajee Chakraborty</h2>
        </div>

        {/* Owner 2 */}
        <div className={styles.owner}>
          <img src="/ishita.jpg" alt="Ishita Chakraborty" className={styles.ownerImage} />
          <h2 className={styles.ownerName}>Ishita Chakraborty</h2>
        </div>
      </div>

      <p className={styles.bio}>
      <span>Shibanta Global</span> is a private limited company dedicated to reviving traditional values by offering premium, authentic tea leaves to customers at reasonable prices. We bridge the gap between quality and accessibility by ensuring that the finest tea leaves, often reserved for export by large companies, are now available to tea enthusiasts. Our flagship brand, <span>The Te Global</span>, embodies this mission, providing a curated selection of high-quality teas that celebrate tradition and excellence.
      </p>
    </div>
  );
};

export default AboutUs;
