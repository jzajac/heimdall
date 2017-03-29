import { combineReducers } from 'redux'
import * as type from '../constants/ActionTypes'

function quotes (state = {
    isFetching: false,
    result: {}
}, action) {
    switch (action.type) {
        case type.REQUEST_QUOTE:
            return Object.assign({}, state, {
                isFetching: true
            })

        case type.RECEIVE_QUOTE:
            return Object.assign({}, state, {
                isFetching: false,
                result: action.result
            })

        default:
            return state

    }
}

const rootReducer = combineReducers({
    quotes
})

export default rootReducer