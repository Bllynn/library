import React, { Component } from "react";
import Navbar from "./Navbar";
import swal from "sweetalert2";
import axios from "axios";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      cart:{}
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
    let { id, in_stock,title } = this.state.book;
    console.log(id);
    if(in_stock ==='No'){
      swal({
        title: `${title},copy #${id} not in stock`,
        text: "Book must be in stock to check it out",
        type: "warning",
        confirmButtonText: "OK",
        showCancelButton:false
      });
    }
    axios
      .post(`/cart/${id}`)
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          swal({
            title: "Book added to cart",
            type: "success"
          });
        }
        if (res.status === 202) {
          swal({
            title: `Book copy #${id}, already in cart`,
            text: "For multiple copies of same book, Please select the other copy from the library",
            type: "warning",
            confirmButtonText: "OK",
            showCancelButton:false
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
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
    }).then(result => {
      if (result.value) {
        axios.delete(`/books/${id}`).then(res => {
          this.props.history.push("/library");
        });
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
    });
  };
  render() {
    console.log(this.state);
    let styles = {
      color: "white",
      margin: "25px 10px",
      height: "275px",
      width: "auto"
    };
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
              <button id="add" onClick={this.addtoCart}>
                +Add to Cart
              </button>
              <div className="details-img">
                <img
                  style={styles}
                  id="details-img"
                  src={book.image_url}
                  alt=""
                />
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
