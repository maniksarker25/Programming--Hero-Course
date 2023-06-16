import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const Header = () => {
    const {user,logOut} = useContext(authContext)
    const navItems = <>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>about</li></Link>
        <Link to='/myjobs'><li>MyJobs</li></Link>
        <Link to='/postJob'><li>PostJob</li></Link>
    </>

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error.message)
        })
    }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           
        {navItems}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Job Hunter</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-8 px-1">
        
        {navItems}

        </ul>
      </div>
      <div className="navbar-end">
       {user?<Link><button onClick={handleLogOut} className="bg-orange-500 px-8 py-2 rounded-md">SignOut</button></Link>:<Link to='/login'><button className="bg-orange-500 px-8 py-2 rounded-md">Login</button></Link>}
      </div>
    </div>
  );
};

export default Header;
