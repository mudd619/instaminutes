import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./VehicleAvailable.css";

export default function VehicleAvailable({valuu}) {

    const [loading ,setLoading] = useState(false);
    const [error , setError] = useState(false);

    const [data , setData] = useState([])
    

    useEffect(()=>{
        getIt()
    },[])

    function getIt(){
        setLoading(true)
        axios.get("http://localhost:2334/home")
        .then((res)=>{
            console.log(valuu,"aaa")
            
            if(valuu[0]){
                setData([...valuu]);
            }
            else{
                setData(res.data);
            }
            setLoading(false)
            
        })
        .catch((err)=>{
            setError(true)
            console.log(err.message)
        })
    }

    return (
        loading ? "...loading" : error ? "....error" : 
        <>
           {
               data[0] ? data.map((el)=>{
                   return <div className="landingPage--VechicleDiv">
                            <div className="VechicleDiv--photoDiv">
                                <img src="https://www.designmantic.com/images/industry/transport/dm-transport-logo-04.png" alt="company-banner"/>
                            </div>
                            <div className="VechicleDiv--nameRateDiv">
                                <div className="Vechicle-nameDiv">
                                    <span>{el.vechileName}</span>
                                </div>
                                <div style={{margin:"5px 0px 0px 15px"}}>
                                    <p> Registration No. <span className="rate-div-span">{el.vechileNo}</span></p>
                                </div>
                                <div className="Vechicle--rateDiv">
                                    <p>Charges Per km. <span className="rate-div-span">{el.charges} /Km</span></p>
                                </div>
                                <div className="Vechicle--from-to-to-Div">
                                    From : <span className="rate-div-span">{el.departurePlace} --</span>
                                    To : <span className="rate-div-span">{el.arrivalPlace}  </span>
                                </div>
                                  
                            </div>
                            <div className="button-div">
                                <Link to={`/detail/${el._id}`}><button>Available</button></Link>
                            </div>
                        </div>
               })  : <h1 style={{textAlign:"center"}}>No Truck available</h1>
           }  
            
        </>
    )
}
