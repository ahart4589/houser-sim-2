import React from 'react'

export default function House (props){
    console.log(props)
    return(
        <div>
            name: {props.house.name}
            <br/>
            address: {props.house.address}
            <br/>
            city: {props.house.city}
            <br/>
            state: {props.house.state}
            <br/>
            zip: {props.house.zip}
            <br/>
            image: {props.house.image}
            <br/>
            mortgage: {props.house.mortgage}
            <br/>
            rent: {props.house.rent}
            <br/>
            <button>Delete</button>
        </div>
    )
}