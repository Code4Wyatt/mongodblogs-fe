import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";

// import posts from "../../../data/posts.json";
const BlogList = (props) => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_PROD_URL}/blogs`);
      if (response.ok) {
        let blogData = await response.json();
        setBlogData(blogData);
      }
    } catch (error) {
      console.log(error);
    }
    
  };
  
  useEffect(() => {
    fetchBlogData();
  }, []);
  


  return (
    <Row>
      {blogData.map((post) => (
        <Col md={4} style={{ marginBottom: 50 }}>
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
}

export default BlogList