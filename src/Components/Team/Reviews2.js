import React from "react";
import "./Reviews2.css";
import bussiness from "../../assets/team2.jpg";

const Reviews2 = () => {
  return (
    <div className="Reviews2">
      <div className="Reviews2-content">
        
          <div className="Reviews2-text">
          <img className="Reviews2-img re-img" src={bussiness} alt="" />
            <h3 className="reviews2-h"> Muhammad Saad</h3>
            <p className="reviews2-p"> SQA Engineer</p>
            <div className="Reviews2-pra Reviews2-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo
                eveniet voluptatum asperiores fuga nesciunt expedita provident.
                Sit illum obcaecati accusantium eveniet corrupti dignissimos
                odio voluptatibus ratione .
              </p>
              <span>&#x2605;  &#x2605;  &#x2605;  &#x2605;  &#x2605; </span> 
            </div>
          </div>
        </div>
      </div>

  );
};

export default Reviews2;
