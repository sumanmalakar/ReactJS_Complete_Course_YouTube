import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './Navbar.css'



export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    const login = () =>{
        navigate("/dashboard");
        // console.log("working")
        setIsLoggedIn(true)
    }

    const logout = () =>{
        setIsLoggedIn(false);
    }


  return (
    <div className="nav_bar">
      <Link to={"/"} className="left items">
        WDM
      </Link>
      <div className="right">
        {isLoggedIn && (
          <>
            <Link className="items" to={"/meal"}>
              Meal
            </Link>
            <Link className="items" to={"/courses"}>
              Courses
            </Link>
            <Link className="items" to={"/dashboard"}>
              Dashboard
            </Link>
            <Link className="items" to={"/profile"}>
              Profile
            </Link>
            <Link
              className="items"
              style={{ fontWeight: "bold", backgroundColor: "gray" }}
              onClick={logout}
            >
              LogOut
            </Link>
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link className="items" to={"/about"}>
              About
            </Link>
            <Link className="items" to={"/team"}>
              Team
            </Link>
            <button
              className="items"
              style={{ fontWeight: "bold", backgroundColor: "gray" }}
              onClick={login}
            >
              Login
            </button>
            <Link className="items" to={"/contact"}>
              Contact
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
