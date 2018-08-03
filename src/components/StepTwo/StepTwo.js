import React, {Component} from 'react'
// import{Link} from 'react-router-dom'
// import axios from 'axios'

export default class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
            image: ''
        }
        this.handleImage = this.handleImage.bind(this)
    }
    handleImage(e){
        this.setState({image: e.target.value})
    }


    render(){
        return(
            <div>
                Add New Listing
                <br/>
                Image URL
                <input value={this.state.image} onChange={this.handleImage}/>
            </div>
        )
    }
}