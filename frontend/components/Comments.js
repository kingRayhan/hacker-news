import React from 'react'
import styled from 'styled-components'
import Form from '../components/styled/Form'
import Comment from './Comment'
const StyledComments = styled.div`
    .comments {
        margin-top: 25px;
    }
`

const Comments = () => {
    return (
        <StyledComments>
            <h3>36 Comments</h3>

            <div className="comment-box">
                <Form>
                    <textarea
                        cols="30"
                        rows="5"
                        placeholder="Your comment text..."
                    />
                    <button>Add your Comment</button>
                </Form>
            </div>
            <div className="comments">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </StyledComments>
    )
}

export default Comments
