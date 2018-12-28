import React, { Component } from "react";
import Navbar from "./Navbar";
import swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
import Book from "./Book";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cart: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/user")
      .then(response => {
        console.log(response.data);
        this.setState({
          user: response.data[0]
        });
      })
      .catch(err => {
        swal({
          title: "Looks like you're not logged in!",
          animation: true,
          customClass: "animated tada"
        });
        console.log(err);
      });
    axios
      .get("/cart", this.state.user.id)
      .then(response => {
        this.setState({
          cart: response.data
        });
      })
      .catch(err => {
        swal({
          title: "OH NO! Something terrible happened.",
          text: err,
          animation: true,
          customClass: "animated tada"
        });
      });
  }

  render() {
    console.log(this.state);
    let cart = this.state.cart.map(e => {
      console.log(e);
      return (
        <Book
          key={e.id}
          image={e.image_url}
          title={e.title}
          details={e.description}
          author={e.author}
          genre={e.genre}
          stock={e.in_stock}
          book={e}
        />
      );
    });
    return (
      <div className="cart-main">
        <Navbar {...this.props} />
        <div className="cart-title">
          <article>
            <h1>Cart</h1>
            <p id="back" onClick={() => this.props.history.push("/library")}>
              {" "}
              &lt;Back
            </p>
          </article>
          <div className="cart-test">{cart}</div>
        </div>
      </div>
    );
  }
}
export default Cart;
