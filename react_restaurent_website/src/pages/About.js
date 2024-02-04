import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Rahul's Restaurant, a culinary haven that emerged in 2023, offering an
         exquisite dining experience that transcends traditional boundaries. Nestled at 
         the intersection of innovation and gastronomy, our restaurant is a testament 
         to Rahul's passion for blending flavors and creating memorable moments. 
         From the moment you step through the doors, you are enveloped in an 
         ambiance that reflects modern sophistication and warm hospitality. 
         
         Our menu is a symphony of culinary craftsmanship, featuring an array 
         of globally inspired dishes meticulously curated to tantalize
          your taste buds. Join us on a gastronomic journey where every bite
           tells a story, and every visit becomes a cherished memory.
        </p>
      </div>
    </div>
  );
}

export default About;
