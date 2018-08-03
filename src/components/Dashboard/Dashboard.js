import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import axios from 'axios'

import House from '../House/House'
import Wizard from '../Wizard/Wizard'

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    componentDidMount(){
        axios.get('/api/houses').then(response => {
            console.log(response)
            this.setState({
                houses: response.data
            })
        })
    }

   

    render(){
        return (
            <div style={{backgroundColor: '#E5F4EC'}}>
                <Link to='/wizard'>
                    <button style={{backgroundColor:'#8AEA92'}}>Add New Property</button>
                </Link>
                {
                    this.state.houses.map((house, index) => {
                        return (
                            <House key={index} house={house} />
                        )
                    })
                }
                
            </div>
        )
    }
} 