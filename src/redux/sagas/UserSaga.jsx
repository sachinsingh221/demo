import * as userTypes from '../actions/actionType/userTypes';
import { put, call, takeEvery ,takeLatest } from 'redux-saga/effects';
import * as userServices from '../services/userService';
import userActions from '../actions/userAction';

function* getUserList(){
    debugger
    try {
        let response = yield call(userServices.getUsers)
        debugger
        if (response.data){
            console.log(response)
            yield put(userActions.getUserComplete(response))
        }else{
            yield put(userActions.getUserError("error occured"))
        }   
    } catch (error) {
        yield put(userActions.getUserError(error))
    }
}

function* getUserDetails(user){
    debugger
    try {
        console.log(user)
        let response = yield call(userServices.getUserDetail, user.payload)
        debugger
        console.log(response)

        if (response.data){
            console.log(response)
            yield put(userActions.getUserDetailsComplete(response))
        }else{
            yield put(userActions.getUserDetailsError("error occured"))
        }   
    } catch (error) {
        console.log(error)
        yield put(userActions.getUserDetailsError(error))
    }
}


function* watchUserSaga (){
    yield takeEvery(userTypes.GET_USER_INIT, getUserList);
    yield takeEvery(userTypes.GET_USER_DETAILS_INIT, getUserDetails);
}

export default watchUserSaga