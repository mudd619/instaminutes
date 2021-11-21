
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./registration.css"
import axios from 'axios';
export default function Registration() {

  const [inp ,setInp] = React.useState({
    departurePlace : "",
    arrivalPlace : "",
    departureDate : "",
    arrivalDate : "",
    departureTime : "",
    arrivalTime : "",
    userName : "",
    contactNo : "",
    vechileName : "",
    vechileNo : "",
    Company : "",
    charges : ""
  });

  const handleChange = (e)=>{
    const {name , value} = e.target;
    setInp({...inp , [name]:value})
  }

  let data = JSON.parse(localStorage.getItem("userT"));

  const handleSubmit = (e)=>{
    e.preventDefault()
    const inpuut = {
      ...inp,
      userName : data.name,
      contactNo : data.contact,
      Company : data.company,
      departurePlace : inp.departurePlace.toUpperCase(),
      arrivalPlace : inp.arrivalPlace.toUpperCase()
    }
    axios.post("http://localhost:2334/home/"+data.id,inpuut)
    .then((res)=>{
      setInp({
        departurePlace : "",
        arrivalPlace : "",
        departureDate : "",
        arrivalDate : "",
        departureTime : "",
        arrivalTime : "",
        userName : "",
        contactNo : "",
        vechileName : "",
        vechileNo : "",
        Company : "",
        charges : ""
      })
      alert("Vechile Registered")
    })
    .catch((err)=>{
      //console.log(err.message);
      alert("Please fill in all the details")
    })
  }

  return (
   <div className="parent_sinup_div_bh">
     <h1 style={{textAlign:"center"}}>Register your vechile</h1>
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
          label="Departure Place"
          name = "departurePlace"
          value = {inp.departurePlace}
          onChange={handleChange}
        />
         <TextField
          required
          id="outlined-required"
          label="Arrival Place"
          name = "arrivalPlace"
          value = {inp.arrivalPlace}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Departure Date"
          type="string"
          name = "departureDate"
          value = {inp.departureDate}
          onChange={handleChange}
        />
       <TextField
          required
          id="outlined-disabled"
          label="Arrival Date"
          type="string"
          name = "arrivalDate"
          value = {inp.arrivalDate}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Departure Time"
          type="string"
          name = "departureTime"
          value = {inp.departureTime}
          onChange={handleChange}
        />
         <TextField
          required
          id="outlined-disabled"
          label="Arrival Time"
          type="string"
          name = "arrivalTime"
          value = {inp.arrivalTime}
          onChange={handleChange}
        />
       <TextField
          required
          id="outlined-disabled"
          label="Charge / Km"
          type="string"
          name = "charges"
          value = {inp.charges}
          onChange={handleChange}
        />
       <TextField
          required
          id="outlined-disabled"
          label="Vehicle Number"
          type="number"
          name = "vechileNo"
          value = {inp.vechileNo}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Vehicle Name"
          type="text"
          name = "vechileName"
          value = {inp.vechileName}
          onChange={handleChange}
        />
      </div>
    </Box>
    <button onClick={handleSubmit} className="registration_button_bh">Submit</button>
   </div>
  );
}