import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'

import { Query } from 'react-apollo'
import { postsPerPage } from '../config'
import GQLError from './GQLError'
const StyledPagination = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: center;
    .pages {
        margin: 0 15px;
    }

    [aria-disabled='true'] {
        color: ${tp => tp.theme.grey};
        pointer-events: none;
    }
`

const NEWS_LIST_QUERY = gql`
    query {
        posts {
            id
        }
    }
`

class Pagination extends Component {
    render() {
        return (
            <Query query={NEWS_LIST_QUERY}>
                {({ data, loading, error }) => {
                    if (error) return <GQLError error={error} />
                    if (loading) return <p>loading...</p>
                    const totalPosts = data.posts.length
                    const pages = Math.ceil(totalPosts / postsPerPage)
                    const page = parseInt(this.props.router.query.page) || 1
                    return (
                        <StyledPagination>
                            <Link
                                href={{
                                    pathname: '/',
                                    query: {
                                        page: page - 1,
                                    },
                                }}
                            >
                                <a aria-disabled={page <= 1}>← Prev</a>
                            </Link>
                            <div className="pages">
                                page {page} of {pages}
                            </div>
                            <Link
                                href={{
                                    pathname: '/',
                                    query: {
                                        page: page + 1,
                                    },
                                }}
                            >
                                <a aria-disabled={page >= pages}>Next →</a>
                            </Link>
                        </StyledPagination>
                    )
                }}
            </Query>
        )
    }
}

export default withRouter(Pagination)
