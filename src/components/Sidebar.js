import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.show}>
        <h3>Menu</h3>
        <ul>
          <li>
            <i class="material-icons">border_color</i>
            <span> Upload File</span>
          </li>
          <li>
            <i class="material-icons">language</i>
            <span> Learn more</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
