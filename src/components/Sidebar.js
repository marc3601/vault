import React from "react";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div className={props.show}>
      <h3>Menu</h3>
      <ul>
        <li>
          <div className="upload">
            <i className="material-icons">border_color</i>
            <span> Upload File</span>
          </div>
        </li>
        <li>
          <div className="info">
            <i className="material-icons">language</i>
            <span> Learn more</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
