import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'
import News from '../components/News'
import CreateLink from '../components/createLink'
import GQLError from './GQLError'
import Pagination from './Pagination'
import { postsPerPage } from '../config'

const NEWS_LIST_QUERY = gql`
    query NEWS_LIST_QUERY($skip: Int = 0 , $first: Int! = ${postsPerPage}) {
        posts(orderBy: id_DESC , skip: $skip , first: $first) {
            id
            title
            url
            createdAt
            author {
                username
            }
            comments {
                id
            }
        }
    }
`

const NewsList = props => {
    return (
        <div>
            <CreateLink />
            <Pagination />
            <Query
                query={NEWS_LIST_QUERY}
                variables={{
                    skip: props.router.query.page * postsPerPage - postsPerPage,
                }}
            >
                {({ data, loading, error }) => {
                    if (error) return <GQLError error={error} />
                    if (loading) return <p>Loading...</p>
                    const { posts } = data
                    return posts.map(post => <News key={post.id} {...post} />)
                }}
            </Query>
            <Pagination />
        </div>
    )
}

export default withRouter(NewsList)
export { NEWS_LIST_QUERY }
