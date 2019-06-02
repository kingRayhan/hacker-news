import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styled/Form'

import Error from './GQLError'
import { USER_QUERY } from './User'

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($user: String!, $password: String!) {
        signin(user: $user, password: $password) {
            id
            name
        }
    }
`

const Login = () => {
    const [user, setUser] = useState({
        user: '',
        password: '',
    })

    return (
        <Mutation
            mutation={SIGNIN_MUTATION}
            variables={user}
            refetchQueries={[{ query: USER_QUERY }]}
        >
            {(mutation, { data, loading, error }) => {
                return (
                    <Form
                        method="post"
                        onSubmit={async e => {
                            e.preventDefault()
                            await mutation()
                        }}
                    >
                        <Error error={error} />
                        <label>
                            Email/Username
                            <input
                                type="text"
                                placeholder="Email/Username"
                                onChange={e =>
                                    setUser({
                                        ...user,
                                        user: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={e =>
                                    setUser({
                                        ...user,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <button>Login</button>
                        <br />

                        <a href="#">Forgot Password?</a>
                    </Form>
                )
            }}
        </Mutation>
    )
}

export default Login
