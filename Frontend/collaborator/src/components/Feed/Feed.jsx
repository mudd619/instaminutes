import React from "react";
import "./Feed.css";
import VehicleAvailable from "../VehicleFeed/VehicleAvailable";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {useState} from "react";
import axios from "axios";

export default function Feed() {

  const [inp,setInp] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  const [valuu , setValuu] = useState([])

  const handleInp = (e)=>{
    const {name ,value} = e.target;
    setInp({...inp,[name]:value})
  }

  const handleSubmit = ()=>{
    if(inp.from === undefined || inp.to === undefined){
      return alert("Please Enter Valid Fields")
    }
    setLoading(true);
    axios.post("http://localhost:2334/home/filter",{
      ...inp,
      from : inp.from.toUpperCase(),
      to : inp.to.toUpperCase()
    })
    .then((res)=>{
      console.log({
        ...inp,
        from : inp.from.toUpperCase(),
        to : inp.to.toUpperCase()
      })
      setValuu([...res.data]);
      setLoading(false)
      console.log(res.data)
      if(!res.data[0]){
        alert("No routes found")
      } 
    })
    .catch((err)=>{
      console.log(err.message);
      setError(true)
    })

  }

  return (
    loading ? "...loading" : error ? "...error" : 
    <>
    <div className="landigngPage--searchOptionDiv">
      <div className="Search--filterNamaDiv">
        <p>Filter :</p>
      </div>
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <AddLocationIcon className="AddLocationIcon"/>
        </div><hr />
        <div className="Search--fromdiv-inputFeildDiv">
          <input onChange={handleInp} name="from" placeholder="From"></input>
        </div>
        {/* <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div> */}
      </div>
      {/* ----------------------------- */}
      
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <AddLocationIcon className="AddLocationIcon"/>
        </div><hr />
        <div className="Search--fromdiv-inputFeildDiv">
          <input onChange={handleInp} name="to" placeholder="To"></input>
        </div>
        {/* <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div> */}
      </div>
      {/* <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <DateRangeIcon/>
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="Date"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div> */}
      {/* <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <ScheduleIcon />
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="Your Deadline"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div> */}
      {/* <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <AddLocationIcon/>
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="Type"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div> */}
      <button className="Search_fromdiv_btn" onClick={handleSubmit} >Search</button>
    </div><hr className="hr"/>
      <div className="landingPage--feedContainer">
        <VehicleAvailable valuu={valuu} />
      </div>
    </>
  );
}
