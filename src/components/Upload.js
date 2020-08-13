import React from "react";
import "./Upload.css";

class Upload extends React.Component {
  render() {
    return (
      <div className="uploadWindow">
        <div onClick={this.props.hide} className="close">
          <i className="material-icons">close</i>
        </div>
        <h1>This is a form containing window</h1>
        <p>
          It is meant to contain file uploading form for Node backend sometime
          in the future
        </p>
      </div>
    );
  }
}

export default Upload;
