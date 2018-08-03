import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'
import{connect} from 'react-redux'
import {updateMortgage, updateRent} from '../../ducks/reducer'

class StepThree extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         houses:[],
    //         mortgage:0,
    //         rent:0
    //     }
    //     this.handleMortgage = this.handleMortgage.bind(this)
    //     this.handleRent = this.handleRent.bind(this)
    // }
    // handleMortgage(e){
    //     this.setState({mortgage: e.target.value})
    // }

    // handleRent(e){
    //     this.setState({rent: e.target.value})
    // }

    addHouse = () => {
        const {name,address,city,state,zip} = this.state
        const newHouse = {name,address,city,state,zip}
        axios.post('/api/house',newHouse).then(results => {
            this.updateHouses(results.data)
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: 0
            })
            
        })
    }


    render(){
        console.log(this.props.rent)
        const{updateMortgage,updateRent} = this.props
        return(
            <div>
                Add New Listing
                <br/>
                Monthly Mortgage Amount
                <input onChange={(e) => updateMortgage(e.target.value)}/>
                <br/>
                Desired Montly Rent
                <input onChange={(e) => updateRent(e.target.value)}/>
                <br/>
                <br/>
                <Link to='/wizard/step2'>
                    <button>Previous Step</button>
                </Link>
                <br/>
                <Link to='/'>
                    <button>Complete</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {name, address, city, State, zipcode,image, mortgage, rent} = state
    return{
        name: name,
        address: address,
        city: city,
        State: State,
        zipcode: zipcode,
        image: image,
        mortgage: mortgage,
        rent: rent
    }
}
export default connect(mapStateToProps, {updateMortgage,updateRent})(StepThree)