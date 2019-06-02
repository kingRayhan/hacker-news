import React, { Component } from 'react'
import User from './User'
import GQLError from './GQLError'
import styled from 'styled-components'
import Logout from './Logout'

const StyledProfile = styled.div``

export default class Profile extends Component {
    render() {
        return (
            <StyledProfile>
                <User>
                    {({ data, error, loading }) => {
                        if (error) return <GQLError error={error} />
                        if (loading) return <p>Loading...</p>

                        const { name, username, posts } = data.me

                        return (
                            <div>
                                <h3>{name}</h3>
                                <Logout />
                            </div>
                        )
                    }}
                </User>
            </StyledProfile>
        )
    }
}
