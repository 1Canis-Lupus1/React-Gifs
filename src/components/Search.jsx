import React, { Component } from 'react'
import {search} from '../http/http-calls'
import './Search.css'
import ListShow from './ListShow'

class Search extends Component {

    state = {
        searchVal : '',
        initialData : []
    }

    handleInput = (e) => {
        this.setState({
            searchVal : e.target.value
        })
    }
    
    searchGif = (e) => {
        e.preventDefault()
        const input = this.state.searchVal
        if (input.trim() !== '') {
            search(input).then(resp => {
                this.setState({
                    initialData : resp
                })
            }).catch(err => console.log(err))
        }
    }

    render() {
        return (
           <div>
               <form id = "searchForm" onSubmit = {this.searchGif}>
                   <input type = "text" placeholder = "Search Gifs by Name" 
                        value = {this.state.searchVal} onChange = {this.handleInput}
                   />
                   <button type = "submit">Search</button>
               </form>
               <ListShow list = {this.state.initialData} />
           </div>
        )
    }
}

export default Search;
