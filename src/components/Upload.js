import React from "react";
import "./Upload.css";

class Upload extends React.Component {
  render() {
    return (
      <div className="uploadWindow">
        <div onClick={this.props.hide} className="close">
          <i className="material-icons">close</i>
        </div>
        <form action="/" method="post">
          <h2>Upload file</h2>
          <input type="file" accept="image/*" placeholder="Select file" />
          <button type="submit">Upload</button>
          <p>The above form is not yet working. No post possible at this point</p>
        </form>
        
      </div>
    );
  }
}

export default Upload;
