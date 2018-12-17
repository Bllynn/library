import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import Book from "./Book";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

class Browse extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      books: [],
      filteredBooks: [],
      inStock: false,
      outofStock: false
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
      .get("/books")
      .then(response => {
        this.setState({
          books: response.data,
          filteredBooks: response.data
        });
      })
      .catch(err => {
        swal({
          title: "OH NO! Something terrible happened.",
          animation: true,
          customClass: "animated tada"
        });
      });
  }
  checkInStock = () => {
    console.log(this.state);
    let available = [];
    this.state.books.map(e => {
      if (this.state.inStock === false && this.state.outofStock === false) {
        if (e.in_stock === "Yes") {
          available.push(e);
        }
      }
      if (this.state.inStock === true && this.state.outofStock === false) {
        available.push(e);
      }
      if (this.state.inStock === false && this.state.outofStock === true) {
        available.push(e);
      }
      if (this.state.inStock === true && this.state.outofStock === true) {
        if (e.in_stock === "No") available.push(e);
      }
      return available;
    });
    console.log(available);
    this.setState({
      filteredBooks: available,
      inStock: !this.state.inStock
    });
  };
  checkOutStock = () => {
    console.log(this.state);
    let unavailable = [];
    this.state.books.map(e => {
      if (this.state.outofStock === false && this.state.inStock === false) {
        if (e.in_stock === "No") {
          unavailable.push(e);
        }
      }
      if (this.state.outofStock === true && this.state.inStock === false) {
        unavailable.push(e);
      }
      if (this.state.outofStock === false && this.state.inStock === true) {
        unavailable.push(e);
      }
      if (this.state.outofStock === true && this.state.inStock === true) {
        if (e.in_stock === "Yes") unavailable.push(e);
      }
      return unavailable;
    });
    console.log(unavailable);
    this.setState({
      filteredBooks: unavailable,
      outofStock: !this.state.outofStock
    });
  };
  filterBooks = value => {
    //query
    axios.get(`/filter?genre=${value}`).then(response => {
      console.log(response.data);
      this.setState({
        inStock: false,
        outofStock: false,
        books: response.data,
        filteredBooks: response.data
      });
    });
  };

  render() {
    console.log(this.state);
    let librarybooks = this.state.filteredBooks.map(e => {
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
      <div className="library-main">
        <Navbar {...this.props} />
        <div className="library-inventory">
          <div className="library-header">
            <h1>Browse Inventory</h1>
            <div className="selectors">
              <ul>
                <li className="stock-selectors">
                  In Stock
                  <input
                    type="checkbox"
                    checked={this.state.inStock}
                    onChange={this.checkInStock}
                  />
                </li>
                <li className="stock-selectors">
                  Out of Stock
                  <input
                    type="checkbox"
                    checked={this.state.outofStock}
                    onChange={this.checkOutStock}
                  />
                </li>
              </ul>
              Genre
              <select
                name="filter"
                id="listFilter"
                onChange={e => this.filterBooks(e.target.value)}
              >
                <option value="All">None</option>
                <option value="Sports">Sports</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Childrens">Children</option>
              </select>
            </div>
          </div>
          {librarybooks}
          <div className="add-button">
            <Link to="/add">
              <button>+Add New Book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Browse;
