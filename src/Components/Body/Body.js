import React from "react";
import "./body.css";
import dummyData from "../../Data/dummyData.json";
import TrendingFlatOutlinedIcon from "@mui/icons-material/TrendingFlatOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LargeCard from "./LargeCard";

function Body() {
  console.log(dummyData);
  return (
    <div className="body-full">
      <div>
        <div className="body-title">
          <p>Choose a plan that's just right for you !</p>
        </div>
        <div className="options">
          <div className="month-option">
            <div style={{ marginTop: "2px" }}>Monthly</div>
          </div>
          <div className="year-option">
            <div style={{ marginTop: "2px" }}>Annually</div>
          </div>
        </div>
      </div>
      <div className="cards">
        {dummyData.map((item, index) => {
          return (
            <div className="cards-body">
              <div className="cardss">
                <p style={{ fontSize: "x-large", fontWeight: "600" }}>
                  {item.category}
                </p>
                <p style={{ fontSize: "x-small" }}>{item.discountPrice}</p>
                <p style={{ fontSize: "x-large" }}>{item.price}</p>
                <div className="button" style={{ backgroundColor: item.btn }}>
                  <div style={{ paddingTop: "3px" }}>
                    Get Started
                    <TrendingFlatOutlinedIcon
                      style={{ fontSize: "20px", marginLeft: "5px" }}
                    />
                  </div>
                </div>
                <hr
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "210px",
                    height: "0.5px",
                    margin: "0.8rem",
                  }}
                />
                <div
                  style={{
                    fontSize: "xx-small",
                    marginLeft: "16px",
                  }}
                >
                  What you'll get:
                </div>
                <div
                  style={{
                    fontSize: "x-small",
                    marginLeft: "20px",
                  }}
                >
                  <div style={{ marginTop: "6px" }}>
                    <PersonOutlineOutlinedIcon
                      style={{
                        height: "15px",
                        fontSize: "x-small",
                      }}
                    />
                    <span className="user-text">{item.uptousers}</span>
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    <CloudUploadOutlinedIcon
                      style={{
                        height: "13px",
                        fontSize: "x-small",
                      }}
                    />
                    <span className="user-text">{item.uptostorage}</span>
                  </div>
                  <div style={{ marginTop: "6px" }}>
                    <EmailOutlinedIcon
                      style={{
                        height: "13px",
                        fontSize: "x-small",
                      }}
                    />
                    <span className="user-text">{item.support}</span>
                  </div>
                  <div style={{ marginTop: "8px", marginLeft: "21px" }}>
                    <span style={{ fontWeight: "600" }}>EXPLORE FEATURES</span>
                    <PlayArrowIcon
                      style={{
                        color: item.btn,
                        fontSize: "small",
                      }}
                    />
                    <hr
                      style={{
                        width: "89px",
                        // height: "0.5px",
                        margin: "0rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <LargeCard />
    </div>
  );
}

export default Body;
