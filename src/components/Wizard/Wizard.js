import React, {Component} from 'react'
import{Link} from 'react-router-dom'
// import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'


export default class Wizard extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         houses:[],
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zipcode: 0
    //     }
    //     // this.handleName = this.handleName.bind(this)
    // }
   

    // handleName(e){
    //     // console.log(this.state)
    //     this.setState({name: e.target.value})
    // }

    // handleAddress = (e) => {
    //     // console.log(this.state)
    //     this.setState({address: e.target.value})
    // }
    // handleCity = (e) => {
    //     // console.log(this.state)
    //     this.setState({city: e.target.value})
    // }
    // handleState = (e) => {
    //     // console.log(this.state)
    //     this.setState({state: e.target.value})
    // }
    // handleZipcode = (e) => {
    //     console.log(this.state)
    //     this.setState({zipcode: e.target.value})
    // }
    // updateHouses = (houses) => {
    //     this.setState({houses})
    // }

    // addHouse = () => {
    //     const {name,address,city,state,zip} = this.state
    //     const newHouse = {name,address,city,state,zip}
    //     axios.post('/api/house',newHouse).then(results => {
    //         this.updateHouses(results.data)
    //         this.setState({
    //             name: '',
    //             address: '',
    //             city: '',
    //             state: '',
    //             zipcode: 0
    //         })
            
    //     })
    // }

    render(){
        return (
            <div>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne}/>
                    <Route path='/wizard/step2' component={StepTwo}/>
                    <Route path='/wizard/step3' component={StepThree}/>
                </Switch>
                {/* Add New Listing
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
                <Link to='/'>
                    <button onClick={this.addHouse}>Complete</button>
                </Link> */}

            </div>
        )
    }
}