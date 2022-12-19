import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Navbar from "../Layouts/navbar";
import BooksView from "../features/books/booksView";
import AddBook from "../features/books/addBook";
import EditBook from "../features/books/editBook";
import bg from "../assets/bg-image.jpg";

const Index = () => {
  return (
    <BrowserRouter>
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${bg})`, height: "100vh",}}
      >
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-books" element={<BooksView />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/edit-book" element={<EditBook />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>  
    </BrowserRouter>
  );
};

export default Index;
