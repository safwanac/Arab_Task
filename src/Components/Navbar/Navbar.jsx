import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./nav.css"

const Navbar = () => {
  return (
    <div
      className="d-flex"
      style={{ backgroundColor: "#e0f2ff", height: "70px" }}
    >
      <div
        className="cut-div"
        style={{ backgroundColor: "white", width: "245px", height: "70px" }}
      >
        <img
          src="https://img.freepik.com/premium-photo/neon-light-alphabet-3d-rendering-with-clipping-path_51264-68.jpg?size=626&ext=jpg&ga=GA1.1.1242862653.1674892861&semt=ais"
          style={{ height: "70px", marginLeft: "55px" }}
        />
      </div>
      <div className="box">
        <div className="text-on-box">XYZ Enterprizes Pvt.Ltd</div>
      </div>
      <div className="arrow">
        <div className="arraw-icon">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default Navbar