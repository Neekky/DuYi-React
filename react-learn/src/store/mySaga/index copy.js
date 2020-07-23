import { take } from 'redux-saga/effects';
import { actionTypes } from '../action/counter';

export default function* () {
    const action = yield take(actionTypes.increase);
    console.log('异步啦', action)
}