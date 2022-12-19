import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { updateBook } from "./booksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };

  return (
    <div>
      <h2>EditBook</h2>
      <div
        className="form"
        style={{
          display: "block",
          margin: "auto",
          padding: "10px",
          height: "100%",
          width: "65%",
          background: "white",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          borderRadius: "10px",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title" style={{ marginTop: "2vh" }}>
              Title
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Book's Name"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              id="author"
              name="author"
              placeholder="Author's name"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </FormGroup>
          <button
            className="btn btn-success"
            type="submit"
            style={{ margin: "1vh 0 3vh" }}
          >
            Update Book
          </button>
        </Form>
      </div>
    </div>
  );
};

export default EditBook;
