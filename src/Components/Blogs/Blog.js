import React from 'react'
import computer from "../../assets/computer.jpg"
import "./Blog.css"


const Blog = () => {
  return (
    <div className='Blog'>
         <div className="Project-text">
        <p className="p1-text">BLOG</p>
        <h1 className="h1-text">Blog Posts</h1>
        <p className="p2-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          similique sit aperiam quo amet dolorem quis mollitia doloribus
          dolorum! Optio.
        </p>
      </div>
      <div className='blog-cards'>
        <div className='b-card'>
            <img className='blog-img' src={computer} alt="computer" />
            <p className='blog-p b-padding'>01DEC.2022</p>
            <h2 className='b-padding'>Web design trends in 2022</h2>
            <p className='blog-p2 b-padding'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptates officia! Odit ipsa hic quasi harum, sint debitis sunt </p>
        </div>
        <div className='b-card'>
            <img className='blog-img' src={computer} alt="computer" />
            <p className='blog-p b-padding'>01DEC.2022</p>
            <h2 className='b-padding'>Web design trends in 2022</h2>
            <p className='blog-p2 b-padding'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptates officia! Odit ipsa hic quasi harum, sint debitis sunt </p>
        </div>
        <div className='b-card'>
            <img className='blog-img' src={computer} alt="computer" />
            <p className='blog-p b-padding'>01DEC.2022</p>
            <h2 className='b-padding'>Web design trends in 2022</h2>
            <p className='blog-p2 b-padding'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptates officia! Odit ipsa hic quasi harum, sint debitis sunt </p>
        </div>

      </div>

    </div>
  )
}

export default Blog