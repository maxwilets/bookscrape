import React, {Component} from "react";
import NavBar from './../header';
import TitleCard from './../titleCard';
import "./../../App.css"
import axios from 'axios';
import SavedData from './../savedData';
import { request } from "http";
class Save extends Component{
    constructor(props){
        super(props)
        this.state={
          savedData: []
        }
    }
    componentDidMount(){
        this.axiosChecker()
    }
    onClick(){
        window.location.href="/"
    }
    deleteMe(id){
        console.log(id)
        axios({
            method:"POST",
            url: "/delete/"+ id
        }).then(console.log('hello'))
    }
    axiosChecker(){
        axios({
            method: "GET",
            url: "/saveder"
        }).then(data=>this.setState({savedData: data.data}))
    }
render(){
return(
    <div>
        <NavBar name="search" onClick={this.onClick}/>
        <TitleCard/>
        
        <div className="booker">
                    {   
                        this.state.savedData.map(result=>{
                        return(
                            <div className="bookname" key={result._id}>
                                <h4>{result.title} <button className="search deleteme" onClick= {()=>{(this.deleteMe(result._id))}}>
                                Remove
                                </button> <button className="search readme" ><a href={result.link} target="_blank">Read</a></button></h4>
                                <h5>Author: {result.authors.map(author=>`${author} `)}</h5>
                                <div>
                                <img className="imgbox"src={result.image} alt=""/>
                                <p className="description">{result.description}</p>
                                </div>
                                
                                </div>
                        )})}
                   
                </div>
    
      </div>
   

        )}
}
export default Save
