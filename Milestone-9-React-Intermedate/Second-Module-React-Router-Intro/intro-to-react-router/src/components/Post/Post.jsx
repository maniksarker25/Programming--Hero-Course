import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const handleNavigation =()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <p>Id:{id}</p>
            <h4>{title}</h4>
            <button><Link to={`/post/${id}`}>show details</Link></button>
            <button onClick={handleNavigation}>With button handler</button>
        </div>
    );
};

export default Post;