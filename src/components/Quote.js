import React from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../actions'

let BuildQuote = ({ dispatch }) => {
    let city
    let state
    let postal

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()

                let hasErrors = (!city.value.trim() || !state.value.trim() || !postal.value.trim())

                if (hasErrors) {
                    return
                }

                var request = {
                    type: 'auto',
                    city: city.value,
                    state: state.value,
                    postal: postal.value
                };

                dispatch(fetchQuote(request))

            }}>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="City" ref={node => {
                        city = node
                    }} />
                </div>

                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select className="form-control" id="state" ref={node => {
                        state = node
                    }}>
                        <option value="NH">NH</option>
                        <option value="MA">MA</option>
                        <option value="ME">ME</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" className="form-control" id="postal" placeholder="Postal Code" ref={node => {
                        postal = node
                    }} />
                </div>

                <p>
                    <button type="submit" className="btn btn-primary">Get a quote</button>
                </p>

            </form>
        </div>
    )
}
BuildQuote = connect()(BuildQuote)

export default BuildQuote