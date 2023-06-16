import React from "react";
import BookCard from "./BookCard";

const AllBooks = () => {
  return (
    <div className="container mt-5">
      <div className="m-auto" style={{ width: "max-content" }}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Insert a search text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-info"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div className="input-group mb-3">
          <select className="form-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label className="input-group-text" for="inputGroupSelect02">
            Options
          </label>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
      <nav aria-label="Page navigation example m-auto text-center">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllBooks;
