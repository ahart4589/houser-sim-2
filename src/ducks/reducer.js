import axios from 'axios'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image: '',
    mortgage:0,
    rent:0
}

export function reducer(state=initialState, action){
    switch(action.type){
        default: return state
    }       
}