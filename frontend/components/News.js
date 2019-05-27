import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import DeletePost from './DeletePost'
import StyledItem from './styled/StyledItem'

const News = ({ title, url, id, createdAt, comments, author }) => {
    return (
        <StyledItem>
            <div className="vote">
                <i className="fa fa-angle-up" />
                <span className="count">14</span>
                <i className="fa fa-angle-down" />
            </div>
            <div className="content">
                <h3 className="title">
                    <Link
                        href={{
                            pathname: 'news',
                            query: {
                                id,
                            },
                        }}
                    >
                        <a>
                            {title} <span>({url})</span>
                        </a>
                    </Link>
                </h3>
                <div className="meta">
                    366 points bt <a href="#">@{author.username}</a> ,{' '}
                    {moment(createdAt).fromNow()} |{' '}
                    <a href="#">{comments.length} comments</a> |{' '}
                    <DeletePost id={id} />
                </div>
            </div>
        </StyledItem>
    )
}

export default News
