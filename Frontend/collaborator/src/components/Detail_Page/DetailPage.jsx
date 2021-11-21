import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./details.css";
import {useNavigate} from "react-router-dom"

function DetailPage() {

  let locall = JSON.parse(localStorage.getItem("userT")); 

  const navigate = useNavigate()

  const [loading , setLoading] = useState(false);
  const [error ,setError] = useState(false);
  const [data,setData] = useState("")

  const params = useParams();
  
  const handleLogin = ()=>{
    alert("Please Login to Proceed")
    navigate("/login")
  }

  useEffect(()=>{
    GetIt()
  },[])

  function GetIt(){
    setLoading(true)
    axios.get("http://localhost:2334/home/"+params.id)
    .then((res)=>{
      setData(res.data);
      setLoading(false)
    })
    .catch((err)=>{
      console.log(err.message)
    })

  }

    return (
        loading ? "...loading" : error ? "....error" : 
        <div className="parent_div_bh">
          <h1>{data.Company}</h1>
           <div className="image_div_bh">
               <img src="https://light-trucks.tatamotors.com/blog/wp-content/uploads/2018/11/best-lighttruck-loading-transporting-goods.jpg" alt="loading" />
               <img src="https://light-trucks.tatamotors.com/blog/wp-content/uploads/2018/11/best-lighttruck-loading-transporting-goods.jpg" alt="loading" />
               <img src="https://light-trucks.tatamotors.com/blog/wp-content/uploads/2018/11/best-lighttruck-loading-transporting-goods.jpg" alt="loading" />
           </div>

           <div className="details_div_bh">
               <h2>{data.vechileName}</h2>

               <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>From:- <span className="span_bh">{data.departurePlace}</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>To:- <span className="span_bh">{data.arrivalPlace}</span></h3></div>
                </div>

                <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>Departure Date:-  <span className="span_bh">{data.departureDate}</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>Delivery Date:- <span className="span_bh">{data.arrivalDate}</span></h3></div>
                </div>

               <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>Departure Time:- <span className="span_bh">{data.departureTime}</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>Estimated Delivery Time:- <span className="span_bh">{data.arrivalTime}</span></h3></div>
                </div>

                <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>Charges:- <span className="span_bh">{data.charges}</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>Vehicle No:- <span className="span_bh">{data.vechileNo}</span></h3></div>
                </div>

            </div>
            {
              locall ? <Link to={`/contact/${params.id}`}><button className="contact_button_bh">CONTACT</button></Link> : <button onClick={handleLogin} className="contact_button_bh">CONTACT</button>
            }
        </div>
    )
}

export default DetailPage
