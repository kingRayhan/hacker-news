import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import NProgress from 'nprogress'
import { NEWS_LIST_QUERY } from './NewsList'
const DELETE_POST_MUTATION = gql`
    mutation DELETE_POST_MUTATION($id: ID!) {
        deletePost(id: $id) {
            id
        }
    }
`

export default class DeletePost extends Component {
    render() {
        return (
            <Mutation
                mutation={DELETE_POST_MUTATION}
                variables={{ id: this.props.id }}
                update={this.handleCache}
                refetchQueries={[{ query: NEWS_LIST_QUERY }]}
            >
                {(mutation, { error, loading }) => {
                    if (loading) {
                        NProgress.start()
                    } else {
                        NProgress.done()
                    }
                    return (
                        <button
                            onClick={async () => {
                                await mutation()
                            }}
                        >
                            Delete
                        </button>
                    )
                }}
            </Mutation>
        )
    }
}
