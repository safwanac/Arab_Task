import React from "react";
import "./largecard.css";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function LargeCard() {
  return (
    <div style={{ display: "flex" }}>
      <div className="slides">
        <div className="text-slides">
          <div className="slide-head">
            <div style={{ marginLeft: "7px", paddingTop: "2px" }}>
              Free Forever
            </div>
          </div>
          <div
            style={{ fontSize: "20px", fontWeight: "600", marginTop: "5px" }}
          >
            Free Starter
          </div>
          <div className="slide-contant">
            The quickest and easiest way to try protocols
            <br /> with basic functionalities
          </div>
          <div className="slide-button">
            <div style={{ paddingTop: "3px" }}>
              Get Started
              <TrendingFlatOutlinedIcon
                style={{ fontSize: "20px", marginLeft: "5px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "7px",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            What you'll get:
          </div>
          <div
            style={{
              fontSize: "x-small",
              marginLeft: "40px",
            }}
          >
            <div style={{ marginTop: "2px" }}>
              <PersonOutlineOutlinedIcon
                style={{
                  fontSize: "x-small",
                }}
              />
              <span className="slide-text">Upto 8 Users</span>
            </div>
            <div style={{ marginTop: "2px" }}>
              <CloudUploadOutlinedIcon
                style={{
                  fontSize: "x-small",
                }}
              />
              <span className="slide-text">Upto 3gb storage</span>
            </div>
            <div style={{ marginTop: "2px" }}>
              <EmailOutlinedIcon
                style={{
                  fontSize: "x-small",
                }}
              />
              <span className="slide-text">Email support</span>
            </div>
            <div>
              <DoneAllIcon
                style={{
                  fontSize: "x-small",
                }}
              />
              <span className="slide-text">
                Basic of documents,Task Flow,
                <br />
                Voting,accounting,Banking,Notes,
                <br />
                Invester,Director and Team
                <br /> Managment included
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="slides">
        <div className="text-slides">
          <div className="slide-head2">
            <div style={{ marginLeft: "7px", paddingTop: "2px" }}>
              Let's Connect
            </div>
          </div>
          <div
            style={{ fontSize: "20px", fontWeight: "600", marginTop: "5px" }}
          >
            Enterprise Plan
          </div>
          <div className="slide-contant">
            Effortlessly customize and fine-tune survices as your
            <br /> needs shit,ensuring the perfect tools for success
          </div>
          <div className="slide-button2" style={{ backgroundColor: "" }}>
            <div style={{ paddingTop: "3px" }}>
              Contact Us
              <TrendingFlatOutlinedIcon
                style={{ fontSize: "20px", marginLeft: "5px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "7px",
                          marginLeft: "16px",
              marginTop:"20px"
            }}
          >
            What you'll get:
          </div>
          <div
            style={{
              fontSize: "x-small",
              marginLeft: "16px",
            }}
          >
            <div style={{ marginTop: "1px" }}>
              <PersonOutlineOutlinedIcon
                style={{
                  
                  fontSize: "7px",
                }}
              />
              <span className="slide-text">More than 75 Users</span>
            </div>
            <div style={{ marginTop: "2px" }}>
              <DoneAllIcon
                style={{
                  height: "13px",
                  fontSize: "x-small",
                }}
              />
              <span className="slide-text">
                Customization of all
                <br /> other features
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeCard;
