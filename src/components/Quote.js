import React from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../actions'

let BuildQuote = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(fetchQuote({foo: input.value}))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Price out quote
                </button>
            </form>
        </div>
    )
}
BuildQuote = connect()(BuildQuote)

export default BuildQuote