import React, { Component } from "react";
// import '../stylesheets/Login.css';
import maroonLogo from "../maroonLogo.svg";
import axios from "axios";
import swal from "sweetalert2";

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
    if (Username === "") {
      swal({
        title: "Username cannot be empty",
        text: `please type a username`,
        type: "warning",
        confirmButtonText: "OK",
        showCancelButton: false
      });
    }
    if (Password === "") {
      swal({
        title: "Password cannot be empty",
        text: `please type a password`,
        type: "warning",
        confirmButtonText: "OK",
        showCancelButton: false
      });
    }
    console.log(this.state);
    axios
      .put("/auth/login", { Username: Username, Password: Password })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.props.history.push("/library");
        }
        if (response.status === 201) {
          swal({
            title: "Username does not exist",
            text: `To create a new username ${Username}, please click on register`,
            type: "warning",
            confirmButtonText: "OK",
            showCancelButton: false
          });
        }
      })
      .catch(err => {
        swal({
          title: "Invalid",
          text: `Username or password is incorrect`,
          type: "error",
          confirmButtonText: "OK",
          showCancelButton: false
        });
      });
  };
  registerUser = () => {
    let { Username, Password } = this.state;
    console.log(this.state);
    if (Username === "") {
      swal({
        title: "Username cannot be empty",
        text: `please type a valid username`,
        type: "warning",
        confirmButtonText: "OK",
        showCancelButton: false
      });
    }
    if (Password === "") {
      swal({
        title: "Password cannot be empty",
        text: `please type a valid password`,
        type: "warning",
        confirmButtonText: "OK",
        showCancelButton: false
      });
    } else if (Username !== "" && Password !== "") {
      axios
        .put("/auth/register", { Username: Username, Password: Password })
        .then(response => {
          console.log(response);
          this.setState({
            Username: "",
            Password: ""
          });
          this.props.history.push("/library");
        })
        .catch(err => {
          swal({
            title: "Username already exists",
            text: `${Username} already exists`,
            type: "warning",
            confirmButtonText: "OK",
            showCancelButton: false
          });
          console.log(err);
        });
    }
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
              <form className="inputs">
                Username
                <input
                  type="text"
                  className="loginput"
                  value={this.state.Username}
                  onChange={e => this.setState({ Username: e.target.value })}
                  autoFocus={true}
                />
              </form>
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
