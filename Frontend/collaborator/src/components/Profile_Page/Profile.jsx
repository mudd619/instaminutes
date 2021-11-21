import axios from "axios";
import React, { useEffect, useState } from "react";
import "./profile.css";

function Profile() {

  let data = JSON.parse(localStorage.getItem("userT"));

  const [loading ,setLoading] = useState(false);
  const [error ,setError] = useState(false);
  const [dat,setDat] = useState([])

  useEffect(()=>{
    GetIt()
  },[])

  function GetIt(){
    console.log(data)
    if(data){
      setLoading(true)
    
      axios.get("http://localhost:2334/home/profile/"+data.id)
      .then((res)=>{
        console.log(res.data.courier)
        setDat(res.data.courier)
        setLoading(false)
      })
      .catch((err)=>{
        setError(true);
      })
    }
  }

  const handleDelete = (id)=>{
    axios.delete("http://localhost:2334/home/"+id+"/"+data.id)
    .then((res)=>{
      GetIt()
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }

  return (
      loading ? "...loading" : error ? "...error" : 
      <>
      <h1 className="title">COMPANY : {data ? data.company : ""} </h1>
      {/* <button className="notification_button_bh">NOTIFICATION</button> */}
    {
      dat.map((el)=>{
        return <div className="profile_parent_bh">
       
        <div className="img_40">
          <img
            src="https://c.neh.tw/thumb/f/720/4846457630752768.jpg"
            alt="loading"
          />
        </div>
        <div className="content_60">
          <div className="content_inside_bh">
            {" "}
            <h3>
              Vechile Name:-{" "}
              <span className="content_span_bh">{el.vechileName}</span>
            </h3>
          </div>
  
          <div className="content_inside_bh">
            {" "}
            <h3>
              From :-{" "}
              <span className="content_span_bh">{el.departurePlace}</span>-----
              To :-{" "}
              <span className="content_span_bh">{el.arrivalPlace}</span>
            </h3>
          </div>
          <div className="content_inside_bh">
            {" "}
            <h3>
              Departure Date :-{" "}
              <span className="content_span_bh">{el.departureDate}</span>-----
              Arrival Date :-{" "}
              <span className="content_span_bh">{el.arrivalDate}</span>
            </h3>
          </div>
  
          <div className="content_inside_bh">
            {" "}
            <h3>
             Vehicle No:-{" "}
              <span className="content_span_bh">{el.vechileNo}</span>
            </h3>
          </div>
  
        <button onClick={()=>{handleDelete(el._id)}}>Delete</button>
          {/* <div class="form-group">
      <label for="exampleFormControlSelect1">Example select</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div> */}
        </div>
      </div>
      })
    }
    </>
  );

}

export default Profile;
