import React,{Component} from 'react';
function Details(){
    return(
        <div className="details-main">
            <div className="details-title">
                <div className="details-book">
                    <img src={this.props.image} alt="coverimage"/>
                </div>
            </div>
        </div>
    )
}export default Details;