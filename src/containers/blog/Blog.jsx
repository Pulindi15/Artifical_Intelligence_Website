import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="art_int__blog section__padding" id="blog">
    <div className="art_int__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="art_int__blog-container">
      <div className="art_int__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="The Future of AI: Trends and Predictions for the Next Decade" />
      </div>
      <div className="art_int__blog-container_groupB">
        <Article imgUrl={blog02} date="May 26, 2024" text="AI in Everyday Life: Practical Applications and Benefits" />
        <Article imgUrl={blog03} date="May 26, 2024" text="Understanding Machine Learning: A Beginner's Guide" />
        <Article imgUrl={blog04} date="May 26, 2024" text="AI and the Future of Work: Automation and Employment" />
        <Article imgUrl={blog05} date="May 26, 2024" text="Robotics and AI: The Rise of Autonomous Machines" />
      </div>
    </div>
  </div>
);

export default Blog;