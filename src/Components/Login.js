import React,{Component} from 'react';
import '../Login.css';
import maroonLogo from '../maroonLogo.svg';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();
        this.state={
            Username:'',
            Password:''
        }

    }
    loginUser=()=>{
        let {Username, Password} = this.state
        console.log(this.state)
        axios.post('/auth/login', {Username:Username,Password:Password}).then(response =>{
            this.setState({
                Username:'',
                Password:''
            })
            this.props.history.push('/library');
            }).catch(err=>{
                console.log("Something went wrong",err)
        })
    }









    render(){
        return (
            <div className="login-main">
                <div className="title-container">
                <img src={maroonLogo} alt="book-logo"/>
                    <h1 className='title'>BOOK EXCHANGE</h1>
                    <div className="login-container">
                    <div className="input-container">
                    <span className='inputs'>
                        Username
                        <input 
                        type="text"
                        className='loginput'
                        value={this.state.Username}
                        onChange={(e)=>this.setState({Username: e.target.value})}
                        autoFocus={true}/>
                    </span>
                    <span className='inputs'>
                        Password
                        <input
                        type="password"
                        className='loginput'
                        value={this.state.Password}
                        onChange={(e)=>this.setState({Password: e.target.value})}/>
                    </span>
                    </div>
                        <div className="button-container">
                        <button className='login-buttons'onClick={this.registerUser}>REGISTER</button>
                        <button className='login-buttons'onClick={this.loginUser}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;