import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(authContext)
  //
  const handleLogOut = ()=>{
    logOut()
    .then(result=>{

    })
    .catch(error=>{
      console.log(error.message)
    })
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        {user && <span className="email-text">{user.email} <button onClick={handleLogOut}>Sign Out</button></span>}
      </div>
    </nav>
  );
};

export default Header;
