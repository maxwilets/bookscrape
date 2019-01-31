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
             <div >
             <header id="nav">
                <img id="googlelogo"src="../../images/logo.png" alt=""/>
                <Button class="navbutton"  onClick={this.props.onClick} name={this.props.name} />

             </header>
             </div>
         </div>
        )
    }

}
export default NavBar