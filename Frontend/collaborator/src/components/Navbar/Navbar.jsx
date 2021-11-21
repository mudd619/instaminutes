import React, { useReducer } from "react";
import "./Navbar.css";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from 'react-router-dom'; 

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let data = JSON.parse(localStorage.getItem("userT"));
  
  const handlelogin = ()=>{
    if(data === null || data.id === undefined){
      alert("Login to proceed")
      return navigate("/login")
    }
    navigate("/registration")

  }

  const handleLogout = ()=>{
    localStorage.setItem("userT",null);
    navigate("/")
    setAnchorEl(null);
  }

  return (
    <>
      <div className="navbar-parentContainer">
        <div className="navbar--logoDiv">
          <a href="">
            <Link to="/"><img
              src="https://i.ibb.co/9W9GDXG/transparent-logo.png"
              alt="transparent-logo"
            /></Link>
          </a>
        </div>
        <div className="navbar--options">
          <h4>About us</h4>  
          <h4>Contact us</h4>
          <h4 className="navbar--createAvailability" onClick={handlelogin}>Create Your Availability</h4>
        </div>
        <div className="navbar--profileDiv">
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle className="navbar--AccountCircle" /> 
              </IconButton>
              {data ? <div>{data.name}</div> : ""}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                { !data ? <>
                          <MenuItem onClick={handleClose}><Link to="/signup">SignUp</Link></MenuItem>
                          <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
                      </> : 
                      <>
                          <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
                          <MenuItem onClick={handleLogout}>LogOut</MenuItem>
                          </> }
              </Menu>
              
            </div>
          )}
        </div>
      </div>
    </>
  );
}
