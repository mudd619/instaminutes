import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./signup.css"


export default function FormPropsTextFields() {
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
          defaultValue="Enter Your Name Here"
        />
         <TextField
          required
          id="outlined-required"
          label="Company's Name"
          defaultValue="Enter Company Name Here"
        />
        <TextField
          required
          id="outlined-disabled"
          label="E-mail"
          type="email"
          defaultValue="Enter Email Here"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

       
       
        <TextField
          id="outlined-number"
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
          InputLabelProps={{
            shrink: true,
          }}
        />
        
      </div>
     
    </Box>
   
    <button className="signup_button_bh">Existing User? Log In</button>

   </div>
  );
}
