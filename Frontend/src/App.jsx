import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import "./App.css"; // Import global styles if needed\
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar will handle content rendering */}
      <Footer></Footer>
    </div>
  );
};

export default App;

