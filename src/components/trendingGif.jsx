import React, { Component } from 'react'
import {trending} from '../http/http-calls'
import ListShow from './ListShow'

class Trending extends Component {

    state = {
        initialData : []
    }

    componentDidMount() {
        const data = trending().then(resp => {
            this.setState({
                initialData : resp
            })
        }).catch(error => console.log(error))
    }

    render() {
        console.log(this.state.initialData)
        return (
            <ListShow list = {this.state.initialData} />
        )
    }
}

export default Trending;
