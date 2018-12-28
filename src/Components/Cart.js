import React, { Component } from "react";
import Navbar from "./Navbar";
import swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      cart: {}
    };
  }
  componentDidMount() {
  axios.get("/api/user").then(res =>{
      console.log(res.data);

  })
  }
  
  render() {
    console.log(this.state);
    let book = this.state.book;
    return (
      <div className="Cart-main">
        <Navbar {...this.props} />
        <div className="Cart-title">
          <article>
            <h1>Cart</h1>
            <p id="back" onClick={() => this.props.history.push("/library")}>
              {" "}
              &lt;Back
            </p>
          </article>
          <div className="test">
            <div className="Cart-book">
              <div className="Cart-img">
                {/* <img id="Cart-img" src={} alt="bookcover" /> */}
              </div>
              <div className="descriptions">
                <h3 className="tagid">
                  Title:
                  <p id="content">{book.title}</p>
                </h3>
                <h3 className="tagid">
                  Author:
                  <p id="content">{book.author}</p>
                </h3>
                <h3 className="tagid">
                  Genre:
                  <p id="content">{book.genre}</p>
                </h3>
                <h3 className="tagid">
                  In Stock:
                  <p id="content">{book.in_stock}</p>
                </h3>
                <h3 className="tagid">Description:</h3>
                <p id="content-scroll">{book.description}</p>
              </div>
              <div class="edit-delete">
                <Link to={`/Edit/${book.id}`}>
                  <button id="edit">Edit</button>
                </Link>
                <button id="delete" onClick={this.deleteBook}>
                  Delete
                </button>
              </div>
              <button
                id="add"
                onClick={this.addtoCart}
                style={this.test(book.in_stock)}
              >
                +Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cart;
