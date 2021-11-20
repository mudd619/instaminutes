import React from "react";
import "./profile.css";

function Profile() {
  return (
      <>
      <h1 className="title">COMPANY PROFILE</h1>
      <button className="notification_button_bh">NOTIFICATION</button>
    <div className="profile_parent_bh">
       
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
            Company Name:-{" "}
            <span className="content_span_bh">Global logistics pvt.</span>
          </h3>
        </div>

        <div className="content_inside_bh">
          {" "}
          <h3>
            Registration No:-{" "}
            <span className="content_span_bh">PQRS1168208</span>
          </h3>
        </div>
        <div className="content_inside_bh">
          {" "}
          <h3>
           Address:-{" "}
            <span className="content_span_bh">Zone 1 M.P Nagar Bhopal.</span>
          </h3>
        </div>

        <div className="content_inside_bh">
          {" "}
          <h3>
           Vehicle No:-{" "}
            <span className="content_span_bh">MP 04 QA 8208</span>
          </h3>
        </div>

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
    </>
  );

}

export default Profile;
