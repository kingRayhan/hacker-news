import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const USER_QUERY = gql`
    query {
        me {
            id
            name
            username
            posts {
                id
                title
                url
            }
        }
    }
`

const User = props => (
    <Query {...props} query={USER_QUERY}>
        {payload => props.children(payload)}
    </Query>
)
export default User
export { USER_QUERY }
