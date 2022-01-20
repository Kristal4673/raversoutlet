import React from "react";
import { Element } from "react-scroll";

//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

const About = () => {
  return (
    <Element id="about" name="about" >
      
      ABOUT
      <div>Hey this is me</div>
      <div>This is about myself</div>
      <div>I will need to add a lot of styling to make this look beautiful</div>
      <div>This will be such a difficult task</div>
      
    </Element>
  );
};

export default About;
