import React from 'react'
import styled from 'styled-components'

import Replies from './Replies'

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

const Comment = () => {
    return (
        <StyledComment>
            <div className="meta">
                <a href="#">@shoaib</a> , 2 hours ago
            </div>
            <p className="comment-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, ducimus nulla nihil saepe, autem aperiam veritatis
                animi accusantium nisi esse architecto mollitia porro minima
                quisquam similique officiis obcaecati ad et.
            </p>
            <Replies />
        </StyledComment>
    )
}

export default Comment
