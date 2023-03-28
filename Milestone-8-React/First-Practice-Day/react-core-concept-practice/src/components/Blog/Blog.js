import React from "react";
import './Blog.css'

const Blog = () => {
    const blogStyle = {backgroundColor:'gray',padding:'10px',color:'white',borderRadius: '5px'}
  return (
    <div>
      <article className="blog">
        <h2 style={blogStyle}>This is my first Blog!!!</h2>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces or UI components. It lets you compose complex
          UIs from small and isolated pieces of code called “components”. It is
          used by large, established companies and newly-minted startups alike
          (Netflix, Airbnb, Instagram, and the New York Times, to name a few).
          React brings many advantages to the table, making it a better choice
          than other frameworks like Angular.js.
        </p>
      </article>
      <First></First>
      <Second></Second>
      <Third></Third>
    </div>
  );
};

function First(){
    return(
        <div>
            <h2>First Blog</h2>
            <p>Author: Hasib Sarker</p>
        </div>
    )
}
function Second(){
    return(
        <div>
            <h2>Second Blog</h2>
            <p>Author: Ratul Sarker</p>
        </div>
    )
}
function Third(){
    return(
        <div>
            <h2>Third Blog</h2>
            <p>Author: Taufic Mia</p>
        </div>
    )
}


export default Blog;
