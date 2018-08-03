import React, {Component} from 'react'
import{Link} from 'react-router-dom'
// import axios from 'axios'
import{connect} from 'react-redux'
import {updateImage} from '../../ducks/reducer'

class StepTwo extends Component {
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
                <br/>
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {image} = state
    return{
        image: image
    }
}

export default connect(mapStateToProps, {updateImage})(StepTwo)