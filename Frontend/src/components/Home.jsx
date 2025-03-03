import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to Shibanta Global</h1>
      <p className={styles.subtitle}>Experience the finest tea blends, crafted with tradition and love.</p>

      {/* Centered Carousel */}
      <div className={styles.carouselContainer}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={2000}
          className={styles.carousel}
        >
          <div>
            <img src="/img1.png" alt="Tea Plantation" />
          </div>
          <div>
            <img src="/img2.png" alt="Tea Cup" />
          </div>
          <div>
            <img src="/img5.png" alt="Tea Leaves" />
          </div>
          <div>
            <img src="/img3.png" alt="Traditional Tea Making" />
          </div>
          <div>
            <img src="/img4.png" alt="Traditional Tea Making" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
