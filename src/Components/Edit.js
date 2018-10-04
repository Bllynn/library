import React, { Component } from "react";
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
          title:book.title,
          author: book.author,
          genre: book.genre,
          image:book.image_url,
          description: book.description,
        });
      })
      .catch(err => {
        swal({
          title: `Hmm...something is wrong with our calculations, ${err}`
        });
      });
  }
  imageChange = () =>{

  }
  render() {
    console.log(this.state);
    return (
      <div className="edit-main">
        <div className="edit-information">
          <span className='edit-title'>
              <p>Title:</p>
              <input type="text" value ={this.state.title}/>
          </span>
          <span className='edit-author'>
              <p>author:</p>
              <input type="text" value ={this.state.author}/>
          </span>
          <span className='edit-genre'>
              <p>genre:</p>
              <input type="text" value ={this.state.genre}/>
          </span>
          <span className='edit-image'>
              <p>image:</p>
              <input type="text" value ={this.state.image} onChange={(e)=>{this.change()}}/>
          </span>
          <span className='edit-description'>
              <p>description:</p>
              <input type="text" value ={this.state.description}/>
          </span>
        </div>
      </div>
    );
  }
}
export default Edit;
