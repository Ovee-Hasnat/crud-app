import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { deleteBook } from "./booksSlice";
import cdImg from '../../assets/card-img.jpg'

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {books &&
          books.map((book) => {
            const { id, title, author } = book;
            return (
              <Card
                color="light"
                key={id}
                style={{
                  width: "18rem",
                  margin: "20px 10px 0 10px",
                }}
              >
                <img alt="Sample" src={cdImg} />
                <CardBody>
                  <CardTitle tag="h5">{title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {author}
                  </CardSubtitle>
                  <Link to="/edit-book" state={{id, title, author}}>
                    <Button color="warning">Edit</Button>
                  </Link>
                  <Button
                    color="danger"
                    className="ms-2"
                    onClick={() => {
                      handleDeleteBook(id);
                    }}
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default BooksView;
