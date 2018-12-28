import React, { Component } from "react";
import Navbar from "./Navbar";
import swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      cart: {}
    };
  }
  componentDidMount() {
    /////match object
    const id = this.props.match.params.id;
    // console.log(id);
    axios
      .get(`/books/${id}`)
      .then(res => {
        // console.log(res);
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
  addtoCart = () => {
    let { id, in_stock, title } = this.state.book;
    // console.log(id);
    if (in_stock === "No") {
      swal({
        title: `${title},copy #${id} not in stock`,
        text: "Book must be in stock to check it out",
        type: "warning",
        confirmButtonText: "OK",
        showCancelButton: false
      });
    }
    axios
      .post(`/cart/${id}`)
      .then(res => {
        // console.log(res.status);
        if (res.status === 200) {
          swal({
            title: "Book added to cart",
            type: "success"
          });
        }
        if (res.status === 202) {
          swal({
            title: `Book copy #${id}, already in cart`,
            text:
              "For multiple copies of same book, Please select a different copy from the library",
            type: "warning",
            confirmButtonText: "OK",
            showCancelButton: false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  /////clog/////
  test = value => {
    if (value === "Yes") {
      return { visibility: "visible" };
    }
  };

  ////delete
  deleteBook = () => {
    let id = this.state.book.id;
    swal({
      title: "Are you sure?",
      text: "This book will have to be re-added to check it out again!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    })
      .then(result => {
        if (result.value) {
          axios.delete(`/books/${id}`).then(res => {});
          swal(
            "Deleted!",
            "Your Book has been removed from our inventory.",
            "success"
          );
          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal("Cancelled", "Your imaginary book is safe :)", "error");
        }
        this.props.history.push("/library");
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state);
    let book = this.state.book;
    return (
      <div className="details-main">
        <Navbar {...this.props} />
        <div className="details-title">
          <article>
            <h1>Details</h1>
            <p id="back" onClick={() => this.props.history.push("/library")}>
              {" "}
              &lt;Back
            </p>
          </article>
          <div className="test">
            <div className="details-book">
              <div className="details-img">
                <img id="details-img" src={book.image_url} alt="bookcover" />
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
export default Details;
