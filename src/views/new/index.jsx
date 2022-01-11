import React, { useState, useParams } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";


const NewBlogPost = async () => {
  const params = useParams();

  const [newBlogPost, setNewBlogPost] = useState({
    cover: "",
    title: "",
    category: "",
    content: "",
  });

  const handleInput = (propertyName, value) => {
    setNewBlogPost({
      ...newBlogPost,
      [propertyName]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newBlogPost);
  };

  const newBlogPostValue = {
    title: document.getElementById("name").value,

  }
  try {
    let response = await fetch("https://striveblogsite.herokuapp.com/blogs", {
      method: "POST",
      body: JSON.stringify(newBlogPost),
    });
    if (response.ok) {
      alert("Blog post posted!")
    } else {
      alert("Failed to post blog")
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Comedy</option>
            <option>Informative</option>
            <option>Music</option>
            <option>Art</option>
            <option>Technology</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            value={this.state.text}
            onChange={this.handleChange}
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{ marginLeft: "1em" }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost