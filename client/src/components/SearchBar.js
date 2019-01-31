import React, {Component} from "react"
import "../searchbar.css"
import axios from "axios"
const books = require("google-books-search")

//import BookSearch from "../../../API/API"
class Search extends Component{
    constructor(props){
        super(props)
        this.state={
          lookup: '',
          results: []
        }
        this.handleChange= this.handleChange.bind(this);
        this.bookSearch = this.bookSearch.bind(this)
        this.saveClick = this.saveClick.bind(this)
      //  this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event){
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    //   handleSubmit(event){
    //     event.p`reventDefault()
    
    //   }
    bookSearch(event){
       event.preventDefault()
         this.setState({
             results: []
         })
        books.search(this.state.lookup, (error, results)=>{
            console.log(results)
            this.setState({
                results: results
            })
        })  
    }
    saveClick(title, link, description, authors, thumbnail){
       axios({
           method:"POST",
           url: "/save",
           data: {
            title: title,
            authors: authors,
            description: description,
            link: link,
            thumbnail: thumbnail,
           }
       })
    }

    render(){
    return(
        <div>
        <label for='searchTerm'></label>
        <input type="text" class="form-control" name="lookup" onChange = {this.handleChange}/>
        <button className="formButton search"  onClick={this.bookSearch}>Search</button>
        <div className="booker">
            {
                this.state.results.map(result=>{
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
                        {/* <button className="readme" onClick={window.location.href=result.link}>
                        Read
                        </button> */}
                        

                    </div>
                )
            })}
        </div>
        </div>
    )
}
}
export default Search