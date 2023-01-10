import React from "react";
import "./estilos/Home.css";
import Navbar from "./Navbar";
/*import Footer from "./Footer";*/
import CarouselFadeExample from "./Carousel";

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <CarouselFadeExample />
      {/* <div className="footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
