import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'



export default class StepOne extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
        this.handleName = this.handleName.bind(this)
    }

    handleName(e){
        // console.log(this.state)
        this.setState({name: e.target.value})
    }

    handleAddress = (e) => {
        // console.log(this.state)
        this.setState({address: e.target.value})
    }
    handleCity = (e) => {
        // console.log(this.state)
        this.setState({city: e.target.value})
    }
    handleState = (e) => {
        // console.log(this.state)
        this.setState({state: e.target.value})
    }
    handleZipcode = (e) => {
        console.log(this.state)
        this.setState({zipcode: e.target.value})
    }



    render(){
        return (
            <div>
                Add New Listing
                <br/>
                Property Name
                <input value={this.state.name} onChange={this.handleName}/>
                <br/>
                Address
                <input value={this.state.address} onChange={this.handleAddress}/>
                <br/>
                City
                <input value={this.state.city} onChange={this.handleCity}/>
                <br/>
                State
                <input value={this.state.state} onChange={this.handleState}/>
                <br/>
                Zip
                <input value={this.state.zipcode} onChange={this.handleZipcode}/>
                
            </div>
        )
    }
}