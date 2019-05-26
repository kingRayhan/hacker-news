import React from 'react'
import News from '../components/News'
import CreateLink from '../components/createLink'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import GQLError from './GQLError'

const NEWS_LIST_QUERY = gql`
    query NEWS_LIST_QUERY {
        posts(orderBy: id_DESC) {
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

const NewsList = () => {
    return (
        <div>
            <CreateLink />
            <Query query={NEWS_LIST_QUERY}>
                {({ data, loading, error }) => {
                    if (loading) return <p>Loading...</p>
                    if (error) return <GQLError error={error} />
                    return data.posts.map(post => (
                        <News key={post.id} {...post} />
                    ))
                }}
            </Query>
        </div>
    )
}

export default NewsList
export { NEWS_LIST_QUERY }
