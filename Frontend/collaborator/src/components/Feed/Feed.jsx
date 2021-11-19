import React from "react";
import "./Feed.css";
import VehicleAvailable from "../VehicleFeed/VehicleAvailable";

export default function Feed() {
  return (
    <>
    <div className="landigngPage--searchOptionDiv"></div>
      <div className="landingPage--feedContainer">
        <VehicleAvailable />
      </div>
    </>
  );
}
