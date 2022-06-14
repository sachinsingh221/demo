import * as userTypes from './actionType/userTypes';

const action = { 
    getUserInit :()=>({
            type: userTypes.GET_USER_INIT    
        }
    ),

    getUserComplete : (data) =>( {
                type:userTypes.GET_USER_COMPLETE,
                payload: data
            }
        ),

    getUserError : (data) => ({
                type:userTypes.GET_USER_ERROR,
                payload: data
            }
        ),
    getUserDetailsInit : (userId) => ({
        type: userTypes.GET_USER_DETAILS_INIT,
        payload: userId
    }),
    getUserDetailsComplete : (data) =>( {
        type:userTypes.GET_USER_DETAILS_COMPLETE,
        payload: data
    }
    ),

    getUserDetailsError : (data) => ({
            type:userTypes.GET_USER_DETAILS_ERROR,
            payload: data
        }
    ),
};

export default action;