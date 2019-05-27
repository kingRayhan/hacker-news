import React, { useState } from 'react'
import styled from 'styled-components'
import NProgress from 'nprogress'
import Form from '../components/styled/Form'
import Comment from './Comment'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import GQLError from './GQLError'
const StyledComments = styled.div`
    .comments {
        margin-top: 25px;
    }
`

const CREATE_COMMENT_MUTATION = gql`
    mutation CREATE_COMMENT_MUTATION($body: String!, $postId: ID!) {
        createComment(body: $body, postId: $postId) {
            id
            body
        }
    }
`

const COMMENTS_QUERY = gql`
    query COMMENTS_QUERY($id: ID!) {
        comments(where: { post: { id: $id } }, orderBy: createdAt_DESC) {
            id
            body
            author {
                id
                name
                username
            }
            own
        }
    }
`

const Comments = props => {
    const [commentBody, setCommentBody] = useState('')
    let refetchAgain
    return (
        <StyledComments>
            <div className="comment-box">
                <Mutation
                    mutation={CREATE_COMMENT_MUTATION}
                    variables={{ postId: props.id, body: commentBody }}
                >
                    {(mutation, { data, loading, error }) => {
                        return (
                            <Form
                                method="post"
                                onSubmit={async e => {
                                    e.preventDefault()
                                    if (loading) {
                                        NProgress.start()
                                    } else {
                                        NProgress.done()
                                        setCommentBody('')
                                    }

                                    await mutation()
                                    await refetchAgain()
                                }}
                            >
                                <fieldset disabled={loading}>
                                    <GQLError error={error} />
                                    <textarea
                                        cols="30"
                                        rows="5"
                                        placeholder="Your comment text..."
                                        onChange={e =>
                                            setCommentBody(e.target.value)
                                        }
                                        value={commentBody}
                                    />
                                    <button type="submit">
                                        Add your Comment
                                    </button>
                                </fieldset>
                            </Form>
                        )
                    }}
                </Mutation>
            </div>
            <div className="comments">
                <Query query={COMMENTS_QUERY} variables={{ id: props.id }}>
                    {({ data, loading, error, refetch }) => {
                        if (error) return <GQLError error={error} />
                        if (loading) return <p>Loading...</p>
                        refetchAgain = refetch
                        const { comments } = data
                        return comments.map(comment => (
                            <Comment key={comment.id} {...comment} />
                        ))
                    }}
                </Query>
            </div>
        </StyledComments>
    )
}

export default Comments
