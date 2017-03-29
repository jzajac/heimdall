import * as type from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function requestQuote(quote) {
    return {
        type: type.REQUEST_QUOTE,
        quote
    }
}

function receiveQuote(quote, json) {
    return {
        type: type.RECEIVE_QUOTE,
        quote,
        result: json,
        receivedAt: Date.now()
    }
}

export function fetchQuote(quote) {
    console.log(quote);
    return dispatch => {
        dispatch(requestQuote(quote))
        return fetch('http://127.0.0.1:9999/quote', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'someValue',
                secondParam: 'someOtherValue',
            })
        })
            .then(response => response.json())
            .then(json => dispatch(receiveQuote(quote, json)))
    }
}
