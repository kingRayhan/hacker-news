import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import moment from 'moment'
import DeletePost from './DeletePost'
const StyledItem = styled.div`
    background-color: ${tp => tp.theme.white};
    display: flex;
    margin-bottom: 15px;
    padding: 8px 0;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.07);
    transition: 300ms;
    &:hover {
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.22);
    }
    .vote {
        width: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        border-right: 1px solid ${tp => tp.theme.lightgrey};
        margin-right: 15px;
    }
    .content {
        .title {
            margin: 0;
            a {
                span {
                    color: ${tp => tp.theme.grey};
                    font-size: 12px;
                }
            }
        }
        .meta {
            a {
                color: ${tp => tp.theme.grey};
            }
        }
    }
`

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
                    <Link href="/news">
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
