import React from "react";
import { Link } from "react-router-dom";
const Blogcard = () => {
  return (
    
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec,2022</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nam voluptatum incidunt error</p>
          <Link className="button" to={"/"}>
            Read More
          </Link>
        </div>
      </div>
    
  );
};

export default Blogcard;
