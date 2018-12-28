import React, { Component } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import swal from "sweetalert2";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }
  componentDidMount() {
    /////match object
    const id = this.props.match.params.id;
    // console.log(id);
    axios
      .get(`/books/${id}`)
      .then(res => {
        let book = res.data[0];
        // console.log(res);
        this.setState({
          book: book,
          title: book.title,
          author: book.author,
          genre: book.genre,
          image: book.image_url,
          description: book.description
        });
      })
      .catch(err => {
        swal({
          title: `Hmm...something is wrong with our calculations, ${err}`
        });
      });
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  updateBook = () => {
    const id = this.props.match.params.id;
    let { title, author, genre, image, description } = this.state;
    // console.log(title,author,genre,image,description)
    axios
      .put(`/edit/${id}`, { id, title, author, genre, image, description })
      .then(res => {
        // console.log(res)
        this.props.history.push(`/library`);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="edit-main">
        <Navbar {...this.props} />
        <div className="edit-title">
          <artcle>
            <h1>Edit</h1>
            <p id="back" onClick={() => this.props.history.goBack()}>
              {" "}
              &lt;Back
            </p>
          </artcle>
          <div className="edit-card">
            <section className="edit-leftcard">
              <article className="img-input">
                <p>Image url</p>
                <input
                  id="edit-urlinput"
                  type="text"
                  value={this.state.image}
                  name="image"
                  onChange={this.handleChange}
                />
              </article>
              <article className="img-preview">
                <p>Image Preview</p>
                <img
                  className="edit-img"
                  src={this.state.image}
                  alt="book cover"
                />
              </article>
            </section>
            <section className="edit-middlecard">
              <p>Title</p>
              <p>Author</p>
              <p>Genre</p>
              <p>Description</p>
            </section>
            <section className="edit-rightcard">
              <input
                id="edit-input"
                type="text"
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
              />

              <input
                id="edit-input"
                type="text"
                value={this.state.author}
                name="author"
                onChange={this.handleChange}
              />

              <select
                name="genre"
                id="edit-filter"
                onChange={this.handleChange}
                value={this.state.genre}
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
                name="description"
                id="edit-description"
                onChange={this.handleChange}
              />
              <button id="save-button" onClick={this.updateBook}>
                Save Book
              </button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Edit;
