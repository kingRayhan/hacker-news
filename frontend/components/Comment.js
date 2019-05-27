import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
// import Replies from './Replies'

const StyledComment = styled.div`
    width: 80%;
    background-color: ${tp => tp.theme.white};
    color: ${tp => tp.theme.grey};
    padding: 15px;

    .comment-body {
        margin-top: 0;
    }

    margin-bottom: 15px;
`

const Comment = ({ id, body, author, createdAt, own }) => {
    return (
        <StyledComment>
            <div className="meta">
                <a href="#">@{author.username}</a> ,{' '}
                {moment(createdAt).fromNow()}
            </div>
            <p className="comment-body">{body}</p>
            {own && (
                <div className="meta">
                    <a href="#">Edit</a>
                    {'  '}
                    <a href="#">Delete</a>
                </div>
            )}

            {/* <Replies /> */}
        </StyledComment>
    )
}

export default Comment
