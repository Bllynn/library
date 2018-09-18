import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Book extends Component{
    
    
    render(){
        
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
                            <p>In Stock:<h1 id='stock'>{this.props.stock}</h1></p>
                            <Link to={`/book/${this.props.book.id}`}><button>Details</button></Link>
                            </div>
                        </div>
                    </div>
            )
        }
}export default Book;