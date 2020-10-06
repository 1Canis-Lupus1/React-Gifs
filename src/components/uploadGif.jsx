import React, { Component } from 'react'
import {uploadFile} from '../http/http-calls'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Preview from './Preview'
import './uploadGif.css'

export class Upload extends Component {

    state = {
        selectedFile : null,
        id : ''
    }

    inputFileHandler = (e) => {
        this.setState({
            selectedFile : e.target.files[0]
        })
    }

    uploadFileHandler = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('file', this.state.selectedFile)
        uploadFile(fd).then(resp => {
            this.setState({
                id : resp.data.id
            })
        }).catch(err => console.log(err))
    }

    render() {
        const myStyle={
            marginTop:"40px",
            marginLeft:"200px",
            width: "300px",
            backgroundColor:"white",
            height: "70px",
            width: "500px",
            color: "black"
        }

        const myBtn={
            color:"white",
            backgroundColor:"green"
        }
        return(
            <React.Fragment>
                <div >
                    <h1>Select Gif to Upload</h1>
                    <form id = "upload" onSubmit = {this.uploadFileHandler} style={myStyle}><br/>
                    <input type="file" name="myImage" onChange={this.inputFileHandler} />
                    <button type="submit" style={myBtn}>Upload</button>
                    </form>
                    <Preview id = {this.state.id} />
                   {/* <switch>
    //                 <Route>
    //                     <Redirect to = '/preview'/>
    //                 </Route>
    //             </switch> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Upload;
