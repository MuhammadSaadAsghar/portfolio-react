import React from 'react'
import "./Team.css"
import computer from "../../assets/team3.png"
import bussiness from "../../assets/team2.jpg"
import consulting from "../../assets/team1.jpg"

const Team = () => {
  return (
    <div className="Project Team">
      <div className="Project-text">
        <p className="p1-text">TEAM</p>
        <h1 className="h1-text">Team Members</h1>
        <p className="p2-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          similique sit aperiam quo amet dolorem quis mollitia doloribus
          dolorum! Optio.
        </p>
      </div>

      <div className="Project-image Project-image2">
         <div className="slider-left">
        <img className="content-img co-img" src={computer} alt="" />
        <div className="team-text">
        <h2> Rao Saad</h2>
        <p> Software Engineer</p>
        </div>
        </div>
         <div className="slider-center">
        <img className="content-img co-img" src={bussiness} alt="" />
        <div className="team-text">
        <h2> Muhammad Saad</h2>
         <p> SQA Engineer</p>
        </div>
        </div>
         <div className="slider-right">
        <img className="content-img co-img" src={consulting} alt="" />
        <div className="team-text">
        <h2> Saad Asghar</h2>
       <p>Web Developer</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Team