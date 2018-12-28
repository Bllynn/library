import React, { Component } from "react";
import axios from "axios";
import Logo from "../tanLogo.svg";
import { Link } from "react-router-dom";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logout = () => {
    axios
      .get("/auth/logout")
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Failure to log out", err);
      });
  };
  render() {
    return (
      <div className="navbar">
        <img className="img" src={Logo} alt="tanLogo" />
        <ul className="navbar-list">
          <li className="list-items">
            <Link to="/library">Browse</Link>
          </li>
          <li className="list-items">
            <Link to="/library">Browse</Link>
          </li>
          <li className="list-items">My Shelf</li>
        </ul>
        <p className="logout" onClick={this.logout}>
          Logout
        </p>
      </div>
    );
  }
}
export default Navbar;
