//https://api.medcobox.in/api/v1/consumer/categories?header=true
import axios from '../../utility/axios'

export const getUsers =()=> {
    let response = axios.get('/users').then(function(response){
        return response.data
    }).catch(function(error){
        return error
    })
    return response
}

export const getUserDetail =(userId)=> {
    let response = axios.get(`/users/${userId}`).then(function(response){
        return response.data
    }).catch(function(error){
        return error
    })
    return response
}