import React from 'react'
import "./About.css"


const About = () => {
  return (
    <div className='About'>
     <div className='About-session'>
        <div className="abot-content">
           <i className="w fa-brands fa-shopify"></i>
            <div className="content-text">
                <h2 className="content-heading">Digital Marketing</h2>
                <p className="content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dolorem nihil dolore laboriosam, possimus quasi amet?</p>
            </div>
        </div>
        <div className="abot-content">
            <i className=" w fa-brands fa-algolia"></i>
            <div className="content-text">
                <h2 className="content-heading">E-Mail Marketing</h2>
                <p className="content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolorem nihil dolore laboriosam, possimus quasi amet?</p>
            </div>
        </div>
         <div className="abot-content">
          <i className="w fa-brands fa-twitch"></i>
            <div className="content-text">
                <h2 className="content-heading">Buisness Marketing</h2>
                <p className="content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Dolorem nihil dolore laboriosam, possimus quasi amet?</p>
            </div>
        </div> 
<div>

</div>
     </div>
     <div className='About-image'>

     </div>
    </div>
  )
}

export default About