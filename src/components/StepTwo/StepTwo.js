import React, {Component} from 'react'
import{Link} from 'react-router-dom'
// import axios from 'axios'
import{connect} from 'react-redux'
import {updateImage} from '../../ducks/reducer'

class StepTwo extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         image: ''
    //     }
    //     this.handleImage = this.handleImage.bind(this)
    // }
    // handleImage(e){
    //     this.setState({image: e.target.value})
    // }


    render(){
        console.log(this.props.image)
        const{updateImage} = this.props
        return(
            <div>
                Add New Listing
                <br/>
                Image URL
                <input onChange={(e) => updateImage(e.target.value)}/>
                <br/>
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button onClick={(e) => updateImage(e.target.value)}>Next Step</button>
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