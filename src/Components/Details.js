import React,{Component} from 'react';
import Navbar from './Navbar';
class Details extends Component{
    constructor(){
        super()
        this.state={
            book:{}
        }
    }
    render(){
        return(
            <div className="details-main">
            <Navbar{...this.props}/>
                <div className="details-title">
                <h1>Details</h1>
                    <div className="details-book">
                    <div className="details-img">
                    This is where the image is going to go
                    </div>
                        <h3>TITLE:{}</h3>
                        <h3>AUTHOR:{}</h3>
                        <h3>GENRE:{}</h3>
                        <h3>IN STOCK:{}</h3>
                        <h3>DESCRIPTION:{}</h3>
                    </div>
                </div>
            </div>
        )
    }
}export default Details;