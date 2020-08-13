import React from "react";
import "./Sidebar.css";
import Upload from "./Upload";

class Sidebar extends React.Component {
  state = {
    hideCover: true,
  };
  hideCover() {
    this.setState({
      hideCover: !this.state.hideCover,
    });
  }

  render() {
    const coverHide = `pageCover ${this.state.hideCover ? "coverHide" : ""}`;
    const formWindow = <Upload hide={this.hideCover.bind(this)} />;
    return (
      <>
        <div className={this.props.show}>
          <h3>Menu</h3>
          <ul>
            <li>
              <div onClick={this.hideCover.bind(this)} className="upload">
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
        <div className={coverHide}></div>
        {!this.state.hideCover && formWindow}
      </>
    );
  }
}

export default Sidebar;
