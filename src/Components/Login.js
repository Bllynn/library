import React, { Component } from "react";
// import '../stylesheets/Login.css';
import maroonLogo from "../maroonLogo.svg";
import axios from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      Username: "",
      Password: ""
    };
  }
  loginUser = () => {
    let { Username, Password } = this.state;
    console.log(this.state);
    axios
      .post("/auth/login", { Username: Username, Password: Password })
      .then(response => {
        this.props.history.push("/library");
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  };
  registerUser = () => {
    let { Username, Password } = this.state;
    console.log(this.state);
    axios
      .put("/auth/register", { Username: Username, Password: Password })
      .then(response => {
        console.log(response)
        this.setState({
          Username: "",
          Password: ""
        });
        this.props.history.push("/library");
      })
      .catch(err => {
        console.log("OH NO! Something went terribly wrong!", err);
      });
  };
  onEnter = e => {
    if (e.key === "Enter" && (this.state.Username && this.state.Password)) {
      this.loginUser();
    }
  };

  render() {
    return (
      <div className="login-main" onKeyDown={e => this.onEnter(e)}>
        <div className="title-container">
          <img className="login-image" src={maroonLogo} alt="book-logo" />
          <h1 className="title">Book Exchange</h1>
          <div className="login-container">
            <div className="input-container">
              <span className="inputs">
                Username
                <input
                  type="text"
                  className="loginput"
                  value={this.state.Username}
                  onChange={e => this.setState({ Username: e.target.value })}
                  autoFocus={true}
                />
              </span>
              <span className="inputs">
                Password
                <input
                  type="password"
                  className="loginput"
                  value={this.state.Password}
                  onChange={e => this.setState({ Password: e.target.value })}
                />
              </span>
            </div>
            <div className="button-container">
              <button className="login-buttons" onClick={this.registerUser}>
                Register
              </button>
              <button className="login-buttons" onClick={this.loginUser}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
