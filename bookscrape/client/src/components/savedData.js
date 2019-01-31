import React, { Component } from 'react';
import axios from "axios"
import SaveForm from './saveForm';
class SavedData extends Component{
    constructor(props){
        super(props)
        this.state= {
            datadata: []
        }

        
        
       
    }
    componentDidMount(){
        axios({
            method: "GET",
            url: "/saveder"
        }).then(data=>this.setState({datadata: data.data}))
            .then()
    }
    
        
    

    render(){
        console.log(this.state.datadata)
       // const data= this.state.datadata.data
        //console.log(`hello ${data}`)
        return(
            <div>
               <SaveForm data1={this.state.datata}/> 
            </div>
        )
    }
}
export default SavedData
