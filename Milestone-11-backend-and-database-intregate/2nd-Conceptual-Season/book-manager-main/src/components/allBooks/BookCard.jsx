import React from "react";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <div class="col">
      <div class="card h-100">
        <img
          src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3MlMjBjb3ZlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <Link to="details/34" className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
