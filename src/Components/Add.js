import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
// import swal from "sweetalert2";
class Add extends Component {
  constructor() {
    super();
    this.state = {
      book: {},
      title: "",
      author: "",
      genre: "",
      image: "",
      description: "",
      in_stock: "Yes"
    };
  }
  //   componentDidMount() {
  //     ///match object
  //     const id = this.props.match.params.id;
  //     console.log(id);
  //     axios
  //       .get(`/books/${id}`)
  //       .then(res => {
  //         let book = res.data[0];
  //         // console.log(res);
  //         this.setState({
  //           book: book,
  //           title: book.title,
  //           author: book.author,
  //           genre: book.genre,
  //           image: book.image_url,
  //           description: book.description
  //         });
  //       })
  //       .catch(err => {
  //         swal({
  //           title: `Hmm...something is wrong with our calculations, ${err}`
  //         });
  //       });
  //   }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  addBook = () => {
    // const id = this.props.match.params.id;
    let { title, author, genre, image, description, in_stock } = this.state;
    console.log(title, author, genre, image, description);
    axios
      .post(`/add`, {
        title: title,
        author: author,
        genre: genre,
        image: image,
        description: description,
        in_stock: in_stock
      })
      .then(res => {
        console.log(res.data);
        this.props.history.push(`/library`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="add-main">
        <Navbar {...this.props} />
        <div className="add-title">
          <h1>Add Book</h1>
          <p className="add-goBack" onClick={() => this.props.history.goBack()}>
            {" "}
            &lt;Back
          </p>
          <div className="add-card">
            <section className="add-leftcard">
              <article className="img-input">
                <p>Image url</p>
                <input
                  id="add-urlinput"
                  type="text"
                  value={this.state.image}
                  placeholder="insert image URL here"
                  name="image"
                  onChange={this.handleChange}
                />
              </article>
              <article className="img-preview">
                <p>Image Preview</p>
                <img
                  className="add-img"
                  src={this.state.image}
                  alt="book cover"
                />
              </article>
            </section>
            <section className="add-middlecard">
              <p>Title</p>
              <p>Author</p>
              <p>Genre</p>
              <p>Description</p>
            </section>
            <section className="add-rightcard">
              <input
                id="add-input"
                type="text"
                value={this.state.title}
                placeholder="Title"
                name="title"
                onChange={this.handleChange}
              />

              <input
                id="add-input"
                type="text"
                value={this.state.author}
                placeholder="Author"
                name="author"
                onChange={this.handleChange}
              />

              <select
                name="genre"
                id="add-filter"
                value={this.state.genre}
                onChange={this.handleChange}
              >
                <option value="Sports">Sports</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Childrens">Children</option>
              </select>

              <textarea
                type="text"
                value={this.state.description}
                placeholder="Type short book description"
                name="description"
                id="add-description"
                onChange={this.handleChange}
              />
              <button id="save-button" onClick={this.addBook}>
                Add Book
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Add;
