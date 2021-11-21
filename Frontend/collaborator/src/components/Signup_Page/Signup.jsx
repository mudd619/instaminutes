import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./signup.css"
import { Link } from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom"


export default function FormPropsTextFields() {

  const [inp,setInp] = React.useState("")

  const navigate = useNavigate()

  const handleChange = (e)=>{
    const {name , value} = e.target

    setInp({...inp , [name]:value});
    navigate("/")
  }

  const handleSubmit = ()=>{
    axios.post("http://localhost:2334/user/signup",inp)
    .then((res)=>{
          console.log(res.data)
        let storeIt = {
          name : res.data.name,
          contact : res.data.contactNo,
          company : res.data.company,
          id : res.data._id
        }
        localStorage.setItem('userT', JSON.stringify(storeIt));
        alert("Successfully registered")
        navigate("/")
    })
    .catch((err)=>{
      alert("Please Fill in all the details")
      console.log(err.message)
    })
  }

  return (
   <div className="parent_sinup_div_bh">
 
    <Box 
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name = "name"
          onChange = {handleChange}
        />
         <TextField
          required
          id="outlined-required"
          name = "company"
          onChange = {handleChange}
          label="Company's Name"
        />
        <TextField
          required
          id="outlined-disabled"
          name = "email"
          onChange = {handleChange}
          label="E-mail"
          type="email"
        />
        <TextField
          id="outlined-password-input"
          name = "password"
          onChange = {handleChange}
          label="Password"
          type="password"
          autoComplete="current-password"
        />

       
       
        <TextField
          id="outlined-number"
          onChange = {handleChange}
          name = "contactNo"
          label="Contact Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="outlined-number"
          label="Registration Number"
          type="number"
          name = "registrationNo"
          onChange = {handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        
      </div>
     
    </Box>
   
    <button onClick={handleSubmit} className="signup_button_bh">Submit</button>

    <Link to="/login"><button className="signup_button_bh">Login</button></Link>
   </div>
  );
}
