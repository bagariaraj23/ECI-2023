import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="Blog-card">
      <div className="card-image">
        <img src="images/Blog-1.jpg" className="img-fluid w-100" alt="Blog" />
      </div>
      <div className="Blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia
        </p>
        <Link to="/Blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
