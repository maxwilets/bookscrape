import React, {Component} from "react"
import NavBar from './../header';
import TitleCard from './../titleCard';
import Search from './../SearchBar';
import "../../App.css"
class Home extends Component{
    onClick(){
        window.location.href="/saved"
    }
    render(){
        return(
            <div>
                <NavBar name="saved" onClick={this.onClick}/>
                <TitleCard/>
                <Search/>
            </div>
        )
    }
}

export default Home