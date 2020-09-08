import React, { Component } from 'react'
import { render } from 'react-dom' 
import img from './image/tarte.jpg'
import  './file.css'

export default class App extends Component{
    constructor(){
        super();
        this.state ={
            message: "hello world !"
        }
    }
    //comportement
    handelMessage (){
        this.setState({message: "Bonjour Nesrine !"})
    }
    render(){
        let {message} =this.state;
    return (
    <div>
        <img src={img} alt="une tarte"/>
        <h1>{message}</h1>
        <button onClick={this.handelMessage.bind(this)}>Changer de message</button>
    </div>
    )
    }
}

render(
<App/>,
document.getElementById("root")

)
