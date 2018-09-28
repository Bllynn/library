import React, { Component } from "react";
import Navbar from "./Navbar";
import swal from "sweetalert2";
import axios from "axios";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }
  componentDidMount() {
    /////match object
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get(`/books/${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          book: res.data[0]
        });
      })
      .catch(err => {
        swal({
          title: `Hmm...something is wrong with our calculations, ${err}`
        });
      });
  }
  ////delete
  deleteBook = () => {
    let id = this.state.book.id;
    axios.delete(`/books/${id}`).then(res => {
      this.props.history.push("/library");
    });
  };
  render() {
    console.log(this.state);
    let book = this.state.book;
    return (
      <div className="details-main">
        <Navbar {...this.props} />
        <div className="details-title">
          <h1>Details</h1>
          <div className="test">
            <div className="details-book">
              <button id="edit">Edit</button>
              <button id="delete" onClick={this.deleteBook}>
                Delete
              </button>
              <button id="add">+Add to Cart</button>
              <div className="details-img">
                <img id ='details-img' src={book.image_url}alt="" />
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
                <p id="content">{book.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
