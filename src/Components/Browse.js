import React,{Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import Book from './Book';

class Browse extends Component{
    constructor(){
        super()
        this.state={
            user:[],
            books:[],
        }
    }
    componentDidMount(){
        axios.get('/api/user').then(response=>{
            console.log(response.data)
            this.setState({
                user:response.data[0]
            })
        }).catch(err=>{
            swal({
                title: "Looks like you're not logged in!",
                animation: true,
                customClass: 'animated tada'
              });
              console.log(err)
            });
        axios.get('api/books').then(response=>{
            console.log(response.data)
            this.setState({
                books:response.data
            })
        }).catch(err=>{
            swal({
                title: "OH NO! Something terrible happened.",
                animation: true,
                customClass: 'animated tada'
              });
        })
    }
    


    render(){
        let librarybooks=this.state.books.map(e=>{
            return(
                <Book
                key={e.id}
                image={e.image_url}
                title={e.title}
                details={e.description}
                author={e.author}
                genre={e.genre}
                book={e}/>
            ) 
        })
        return(
            <div className="browse-main">
            <h1>Browse Inventory</h1>
            {librarybooks}
            </div>
        )

    }
}export default Browse;