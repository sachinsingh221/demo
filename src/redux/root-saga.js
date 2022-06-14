import { all } from 'redux-saga/effects';
import userSaga from './sagas/UserSaga';

export default function* rootSaga() {
    yield all([
        userSaga()
    ])
}