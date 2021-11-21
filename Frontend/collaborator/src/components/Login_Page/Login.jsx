import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./login.css"
import {Link} from "react-router-dom"
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function Login() {

  const [inp ,setInp ] = React.useState("");

  const navigate = useNavigate()

  const handleChange = (e)=>{
    const {name , value} = e.target;
    console.log(inp)
    setInp({...inp , [name] : value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("heyy")
    axios.post("http://localhost:2334/user/signin",inp)
    .then((res)=>{
      console.log(res.data)
        let storeIt = {
          name : res.data.name,
          contact : res.data.contactNo,
          company : res.data.company,
          id : res.data._id
        }
        localStorage.setItem('userT', JSON.stringify(storeIt));
        alert("Successfully Signed In");
        navigate("/")
    })
    .catch((err)=>{
      alert("Invalid Email")
      console.log(err.message)
    })
  }

  return (
    <>
      <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "70ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="parent_login_bh">
          <TextField
            required
            id="outlined-disabled"
            label="E-mail"
            type="email"
            name = "email"
            onChange={handleChange}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name = "password"
            autoComplete="current-password"
            onChange={handleChange}
          />
           <button onClick={handleSubmit} className="login_button_bh">LogIn</button>
           <Link to="/signup"><button className="login_button_bh">SignUp</button></Link>
        </div>
        
      </Box>

     
      </div>
    </>
  );
}
