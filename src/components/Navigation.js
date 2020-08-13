import React from "react";
import "./Navigation.css";
import logo from "../images/vault.png";
import Sidebar from "./Sidebar";


class Navigation extends React.Component {
  state = {
    barExpand: "large",
    barOne: "",
    barTwo: "",
    barThree: "",
  };
  resizeNav() {
    if (window.pageYOffset < 300 && window.innerWidth > 1000) {
      this.setState({
        barExpand: "large",
      });
    } else {
      this.setState({
        barExpand: "",
      });
    }
  }
  burgerAnimation() {
    if (this.state.barOne === "") {
      this.setState({
        barOne: "barOneAnimated",
        barTwo: "barTwoAnimated",
        barThree: "barThreeAnimated",
      });
    } else {
      this.setState({
        barOne: "",
        barTwo: "",
        barThree: "",
      });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.resizeNav.bind(this));
  }
  render() {
    const classOne = `one ${this.state.barOne}`;
    const classTwo = `two ${this.state.barTwo}`;
    const classThree = `three ${this.state.barThree}`;
    const showSidebar = `nav__drop ${
      this.state.barOne !== "" ? "" : "nav__show"
    }`;
  
    return (
      <div className="wrapper">
        <div className="nav">
          <div className="nav__logo">
            <img className={this.state.barExpand} src={logo} alt="vault" />
          </div>
          <div className="nav__burger">
            <div
              onClick={this.burgerAnimation.bind(this)}
              className={
                this.state.barOne === "" ? `burger` : `burger burgerAnimated`
              }
            >
              <div className={classOne}></div>
              <div className={classTwo}></div>
              <div className={classThree}></div>
            </div>
          </div>
          <Sidebar show={showSidebar} />
        </div>
        
      </div>
    );
  }
}

export default Navigation;
