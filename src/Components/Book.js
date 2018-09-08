import React,{Component} from 'react';
import Details from './Details';
class Book extends Component{
    
    
    showDetails=()=>{
            return(
                <Details
                key={this.props.id}
                image={this.props.image_url}
                title={this.props.title}
                details={this.props.description}
                author={this.props.author}
                genre={this.props.genre}
                book={this.props}/>
            )
        }
    render(){
        return(
                <div className="book-main">
                    <div className="browse-inventory">
                        <div className="book-information">
                            <img src={this.props.image} alt="coverart"/>
                            <h1>{this.props.title}</h1>
                            <p>by {this.props.author}</p>
                            <button onClick={this.showDetails}>Details</button>
                        </div>
                    </div>
                </div>
            )
        }
}export default Book;