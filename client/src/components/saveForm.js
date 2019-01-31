import React, {Component} from "react"

class SaveForm extends Component{
    constructor(props){
        super(props)
        this.state={
            data: []
        }
    }
    componentDidMount(){
        this.setState({
            data:this.props.data1
        })

        
    }
    render(){
        console.log(this.state.data)
        return(
            <div>
               
                <div className="booker">
                    {   
                        this.state.data.map(result=>{
                        return(
                            <div className="bookname" key={result.title}>
                                <h4>{result.title} <button className="search saveme" onClick= {()=>{(this.saveClick(result.title, result.link, result.description, result.authors, result.thumbnail, result.id))}}>
                                Save
                                </button> <button className="search readme" ><a href={result.link} target="_blank">Read</a></button></h4>
                                <h5>Author: {result.authors.map(author=>`${author} `)}</h5>
                                <div>
                                <img className="imgbox"src={result.thumbnail} alt=""/>
                                <p className="description">{result.description}</p>
                                </div>
                                <button className="readme" onClick={window.location.href=result.link}>
                                Read
                                </button>
                                </div>
                        )})}
                   
                </div>
              </div>
           
        
                )}
    
}
export default SaveForm