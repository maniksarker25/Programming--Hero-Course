//------------- handle search button-----------
const searchBook = (limit) => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  // ----------load data----------
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.docs, limit));
};

// ----------display search result data----------
const displaySearchResult = (myBooks, limit) => {
  console.log(limit);
  console.log(myBooks.length);
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  const button = document.getElementById("show-more-btn");
  debugger;
  if (myBooks.length > limit) {
    myBooks = myBooks.slice(0, limit);
    button.classList.remove("d-none");
  } else {
    button.classList.add("d-none");
  }
  myBooks.forEach((book) => {
    // console.log(book.publisher);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
        <div class="card">
            <img src=" https://covers.openlibrary.org/b/id/${
              book.cover_i
            }-M.jpg" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title"> Name: ${book.title}</h5>
              <h6> Author: ${book.author_name}</h6>
              <p>Publisher: <small> ${
                book.publisher ? book.publisher[0] : "Not found"
              } </small></p>
              <small> First Published Year: ${book.first_publish_year}</small>
            </div>
        </div>
        `;
    searchResult.appendChild(cardDiv);
  });
};

document.getElementById("show-more-btn").addEventListener("click", function () {
  searchBook();
});
