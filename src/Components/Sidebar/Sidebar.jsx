import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ExtensionIcon from "@mui/icons-material/Extension";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div style={{ width: "19.9%" }}>
      <div className="nav">
        <div className="pro">
          <div className="img-pro">
            <img
              style={{ height: "70px", borderRadius: "50%" }}
              src="https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_1280.jpg"
            />
          </div>
          <div style={{ marginTop: "5px" }}>
            <p style={{ margin: "0", paddingLeft: "18px" }}>
              <b>Safwan Ac</b>
              <ArrowForwardIosIcon style={{ height: "10px", color: "blue" }} />
            </p>
            <p style={{ fontSize: "x-small", fontWeight: "600" }}>
              safwanac10@gmail.com
            </p>
          </div>
        </div>
        <div className="nav-item">
          <div className="items" style={{ backgroundColor: "#b1e7ff" }}>
            <DashboardIcon
              style={{
                color: "#35c1f2",
                fontSize: "20px",
              }}
            />
            <span className="side-items" >
              Dashboard
            </span>
          </div>

          <div className="items">
            <LocalFloristIcon style={{ color: "#35c1f2", fontSize: "20px" }} />
            <span className="side-items">Perks</span>
          </div>

          <div className="items">
            <ExtensionIcon style={{ color: "#35c1f2", fontSize: "20px" }} />
            <span className="side-items">Addons</span>
          </div>

          <div className="items">
            <ContactSupportIcon
              style={{ color: "#35c1f2", fontSize: "20px" }}
            />
            <span className="side-items">FAQ</span>
          </div>

          <div className="items">
            <PsychologyAltIcon style={{ color: "#35c1f2", fontSize: "20px" }} />
            <span className="side-items">Support</span>
          </div>
        </div>
        <div
          style={{
            fontSize: "small",
            fontWeight: "500",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5px",
            color: "#0078d3",
          }}
        >
          Logout{" "}
          <PowerSettingsNewIcon
            style={{ fontSize: "11px", fontWeight: "900" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar