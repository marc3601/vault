import React from "react";
import "./Navigation.css";
import logo from "../images/vault.png";

class Navigation extends React.Component {
  state = {
    barExpand: "",
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

    const dropdown = (
      <div className="nav__drop">
        <p>
          This is an early design of dropdown menu that will contain the most
          important features of this application. Exact points are still to be
          determined. It's going to be lit! <span role="img">😊</span>
        </p>
      </div>
    );
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
          {this.state.barOne !== "" ? dropdown : null}
        </div>
      </div>
    );
  }
}

export default Navigation;
