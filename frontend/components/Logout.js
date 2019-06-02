import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { USER_QUERY } from './User'
const LOGOUT_MUTATION = gql`
    mutation {
        logout
    }
`

export default class Logout extends Component {
    render() {
        return (
            <Mutation
                mutation={LOGOUT_MUTATION}
                refetchQueries={[{ query: USER_QUERY }]}
            >
                {mutation => (
                    <button onClick={async e => await mutation()}>
                        Logout
                    </button>
                )}
            </Mutation>
        )
    }
}
