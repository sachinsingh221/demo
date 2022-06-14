import * as userTypes from '../actions/actionType/userTypes';

export const init = {
    userList: [],
    userDetails: {},
    isLoading: false,
    error: null
}

export default function userReducer(state=init, action){
    switch(action.type){
        case userTypes.GET_USER_INIT:
            debugger
            return {
                ...state,
                isLoading: true,
            }
        case userTypes.GET_USER_COMPLETE:
            return {
                ...state,
                isLoading: false,
                userList: action.payload
            }
        case userTypes.GET_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
            case userTypes.GET_USER_DETAILS_INIT:
                debugger
                return {
                    ...state,
                    isLoading: true,
                }
            case userTypes.GET_USER_DETAILS_COMPLETE:
                return {
                    ...state,
                    isLoading: false,
                    userDetails: action.payload
                }
            case userTypes.GET_USER_DETAILS_ERROR:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            
        default:
            return init
    }
}