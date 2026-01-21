import React from "react";
import "./Project.css";
import computer from "../../assets/computer.jpg"
import bussiness from "../../assets/bussiness.jpg"
import consulting from "../../assets/consulting.jpg"
const Project = () => {
  return (
    <div className="Project">
      <div className="Project-text">
        <p className="p1-text">WORK</p>
        <h1 className="h1-text">Successful Projects</h1>
        <p className="p2-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          similique sit aperiam quo amet dolorem quis mollitia doloribus
          dolorum! Optio.
        </p>
      </div>

      <div className="Project-image">
         <div className="slider-left">
        <img className="content-img" src={computer} alt="" />
        <div className="pro-text">
        <h1> Consulting Markiting</h1>
        <p> Website Design</p>
        </div>
        </div>
         <div className="slider-center">
        <img className="content-img" src={bussiness} alt="" />
        <div className="pro-text">
        <h1> Consulting Markiting</h1>
         <p> Website Design</p>
        </div>
        </div>
         <div className="slider-right">
        <img className="content-img" src={consulting} alt="" />
        <div className="pro-text">
        <h1> Consulting Markiting</h1>
       <p>Website Design</p>
        </div>
        </div>
       </div>
    </div>
  );
};

export default Project;
