import React, { Component } from "react";
import { Link } from "react-router-dom";
class Book extends Component {
  render() {
    return (
      <div className="book-main">
        <div className="book-information">
          <img className="book-cover" src={this.props.image} alt="coverart" />
          <div className="book-title-author">
            <h1 className="book-title">{this.props.title}</h1>
            <span className="book-author">
              <p> by </p> <h6>{this.props.author}</h6>
            </span>
          </div>
          <div className="book-stock-details">
            <p>
              In Stock:
              </p>
              <p id="book-stock">{this.props.stock}</p>
            
            <Link to={`/book/${this.props.book.id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Book;
