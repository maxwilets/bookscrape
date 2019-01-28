import React, {Component} from "react"
import Button from "./button"

 class NavBar extends Component{
    SearchClick(){
        console.log("search")
    }
    SaveClick(){
        console.log("save")
    }
    render(){
        return(
         <div>
             <header id="nav">
                <img src="../../images/logo.png" alt=""/>
                <Button class="search"  onClick={this.SearchClick} name="Search" />
                <Button class="save" onClick={this.SaveClick} name="Saved"/>

             </header>
         </div>
        )
    }

}
export default NavBar