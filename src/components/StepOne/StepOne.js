import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
import{connect} from 'react-redux'
import{updateName, updateAddress, updateCity, updateState, updateZipcode} from '../../ducks/reducer'



class StepOne extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         name: '',
    //         address: '',
    //         city: '',
    //         state: '',
    //         zipcode: 0
    //     }
    //     this.handleName = this.handleName.bind(this)
    // }

    // handleName(e){
    //     console.log(this.state)
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



    render(){
        const{updateName, updateAddress, updateCity,updateState, updateZipcode} = this.props
        console.log(this.props.state)
        return (
            <div>
                Add New Listing
                <br/>
                <div>
                    Property Name
                    <input onChange={(e) => updateName(e.target.value)}/>
                    <br/>
                    Address
                    <input onChange={(e) => updateAddress(e.target.value)}/>
                    <br/>
                    City
                    <input onChange={(e) => updateCity(e.target.value)}/>
                    <br/>
                    State
                    <input onChange={(e) => updateState(e.target.value)}/>
                    <br/>
                    Zip
                    <input onChange={(e) => updateZipcode(e.target.value)}/>
                    <br/>
                </div>
                <Link to='/wizard/step2'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {name, address, city, zipcode} = state
    return{
        name: name,
        address: address,
        city: city,
        state: state.state,
        zipcode: zipcode
    }
}

export default connect(mapStateToProps, {updateName,updateAddress,updateCity,updateState,updateZipcode})(StepOne)