import React from 'react';
import "./details.css";


function DetailPage() {
    return (
        <div className="parent_div_bh">

           <div className="image_div_bh">
               <img src="https://light-trucks.tatamotors.com/blog/wp-content/uploads/2018/11/best-lighttruck-loading-transporting-goods.jpg" alt="loading" />
               <img src="https://light-trucks.tatamotors.com/blog/wp-content/uploads/2018/11/best-lighttruck-loading-transporting-goods.jpg" alt="loading" />
               <img src="https://light-trucks.tatamotors.com/blog/wp-content/uploads/2018/11/best-lighttruck-loading-transporting-goods.jpg" alt="loading" />
           </div>

           <div className="details_div_bh">
               <h2>Name of the Company</h2>

               <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>Departure Time:- <span className="span_bh">10:00 A.M</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>Estimated Delivery Time:- <span className="span_bh">10:00 A.M</span></h3></div>
                </div>

                <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>Driver Name:- <span className="span_bh">10:00 A.M</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>Vehicle No:- <span className="span_bh">10:00 A.M</span></h3></div>
                </div>

                <div className="data_div_bh">
                  <div className="data_div_inside_bh"> <h3>Address:- <span className="span_bh">10:00 A.M</span></h3></div>
                  <div className="data_div_inside_bh"> <h3>Charges:- <span className="span_bh">10:00 A.M</span></h3></div>
                </div>

            </div>
            <button className="contact_button_bh">CONTACT</button>
        </div>
    )
}

export default DetailPage
