import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Book extends Component{
    constructor(){
        super()
        this.state={
            bookDetails:{},
            
        }
    }
    details = () =>{
        console.log(this.props)
        let id = this.props.book.id
        axios.get(`/book/${id}`)
    }
    
    
    render(){
        let inStock= this.props.in_stock
        return(
                <div className="book-main">
                        <div className="book-information">
                            <img className='cover'src={this.props.image} alt="coverart"/>
                            <div className="title-author">
                            <h1 className='book-title'>{this.props.title}</h1>
                            <span  className='author'>
                                <p> by </p> <h6>{this.props.author}</h6>
                                </span>
                            </div>
                            <div className="stock-details">
                            <p>In Stock:{inStock}{this.props.stock}</p>
                            <button onClick={this.details}>Details</button>
                            </div>
                        </div>
                    </div>
            )
        }
}export default Book;