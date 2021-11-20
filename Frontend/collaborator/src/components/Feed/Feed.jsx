import React from "react";
import "./Feed.css";
import VehicleAvailable from "../VehicleFeed/VehicleAvailable";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {useState} from "react";

export default function Feed() {



  return (
    <>
    <div className="landigngPage--searchOptionDiv">
      <div className="Search--filterNamaDiv">
        <p>Filter :</p>
      </div>
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <AddLocationIcon/>
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="From"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div>
      {/* ----------------------------- */}
      
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <AddLocationIcon/>
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="To"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div>
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <DateRangeIcon/>
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="Date"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div>
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <ScheduleIcon />
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="Your Deadline"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div>
      <div className="Search--fromdiv">
        <div className="Search--fromdiv-iconDiv">
          <AddLocationIcon/>
        </div>
        <div className="Search--fromdiv-inputFeildDiv">
          <input placeholder="Type"></input>
        </div>
        <div className="Search--fromdiv-iconDiv">
           <ArrowDropDownIcon className="ArrowDropDownIcon"/>
        </div>
      </div>
    </div><hr className="hr"/>
      <div className="landingPage--feedContainer">
        <VehicleAvailable />
      </div>
    </>
  );
}
