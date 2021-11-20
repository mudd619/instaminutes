import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./login.css"

export default function Login() {
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
            defaultValue="Enter Email Here"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
           <button className="login_button_bh">Log In</button>
        </div>
       
      </Box>

     
      </div>
    </>
  );
}
