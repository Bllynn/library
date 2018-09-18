import React,{Component} from 'react';
import axios from 'axios';
import swal from 'sweetalert2';
import Book from './Book';
import Navbar from './Navbar';

class Browse extends Component{
    constructor(){
        super()
        this.state={
            user:[],
            books:[],
            filter:[]
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
        axios.get('/books').then(response=>{
            console.log(response.data)
            this.setState({
                books:response.data,
                filter:response.data
            })
        }).catch(err=>{
            swal({
                title: "OH NO! Something terrible happened.",
                animation: true,
                customClass: 'animated tada'
              });
        })
    }
    // filterBooks = (value) =>{
    //     let books = this.state.books
    //     console.log(value)
    //     if(value === 'All'){
    //         this.setState({
    //             filter: this.state.books
    //         })
    //     }else{
    //         let filteredItems = books.filter(items => items.genre === value)
    //         console.log(filteredItems)
    //         this.setState({
    //             filter:filteredItems
    //         })
    //     }
    // }
    filterBooks = (value) =>{
        axios.get(`/filter?genre=${value}`).then(response=>{
            console.log(response.data)
            this.setState({
                books:response.data
            })
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
                stock={e.in_stock}
                book={e}/>
            ) 
        })
        return(
            <div className="browse-main">
            <Navbar{...this.props}/>
            <div className="browse-inventory">
            <div className="browse-header">
            <h1>Browse Inventory</h1>
            <div className="selectors">
            <ul>
                <li className='stock-selectors'>In Stock<input type="checkbox"/></li>
            
                <li className='stock-selectors'>Out of Stock<input type="checkbox"/></li>
            

            </ul>
            Genre
            <select name="filter" id="listFilter"
                    onChange={(e)=>this.filterBooks(e.target.value)}>
                    <option value = 'All'>None</option>
                    <option value ='Sports'>Sports</option>
                    <option value ='Crime'>Crime</option>
                    <option value ='Fantasy'>Fantasy</option>
                    <option value ='Horror'>Horror</option>
                    <option value ='Childrens'>Children</option>
                    </select>   
            </div>
            </div>
            {librarybooks}
            <div className="add-button">
            <button>+Add New Book</button>
            </div>
            </div>
            </div>
        )

    }
}export default Browse;