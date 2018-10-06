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
    console.log(title,author)
    axios
      .put(`/edit/${id}`, {id, title, author, genre, image, description})
      .then(res => {
        console.log(res)
        this.props.history.push(`/book/${id}`);
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
          <h1>Edit</h1>
          <p onClick={() => this.props.history.goBack()}> &lt;Back</p>
          <div className="edit-card">
            <section className="edit-leftcard">
              <p>Image:</p>
              <input
                id="edit-input"
                type="text"
                value={this.state.image}
                name="image"
                onChange={this.handleChange}
              />
            </section>
            <section className="edit-rightcard">
              <p>Title:</p>
              <input
                id="edit-input"
                type="text"
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
              />

              <p>Author:</p>
              <input
                id="edit-input"
                type="text"
                value={this.state.author}
                name="author"
                onChange={this.handleChange}
              />

              <p>Genre:</p>
              <select
                name="genre"
                id="edit-filter"
                onChange={this.handleChange}
              >
                <option value="Sports">Sports</option>
                <option value="Crime">Crime</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Childrens">Children</option>
              </select>

              <p>Description:</p>
              <textarea
                type="text"
                value={this.state.description}
                name="description"
                id="edit-description"
                onChange={this.handleChange}
              />
              <button onClick={this.updateBook}>Save Book</button>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Edit;
