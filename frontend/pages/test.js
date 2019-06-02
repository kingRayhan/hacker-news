import React, { Component } from 'react'
import User from '../components/User'

class test extends Component {
    render() {
        return (
            <User>
                {({ data, loading, error }) => {
                    return <h1>{data.me.name}</h1>
                }}
            </User>
        )
    }
}

export default test
