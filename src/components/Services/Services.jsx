import React from "react";
import Box from "./Box";
import image1 from "../../images/s1.png"
import image2 from "../../images/s2.png"

const Services = () => {
  return (
    
    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some services I Provide</p>
      </div>
      <div className="b-container">
        <Box image={image1} alt="image1" button="REACTJS"/>
        <Box image={image2} alt="image2" button="PHP"/>
        <Box image={image1} alt="image1" button="PostgreSQL"/>
      </div>
    </div>
  );
};

export default Services;
