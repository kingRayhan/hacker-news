import React from 'react'
import StyledItem from './styled/StyledItem'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import GQLError from './GQLError'
import Comments from './Comments'
import Embedly from './Embedly'

const SINGLE_POST_QUERY = gql`
    query SINGLE_POST_QUERY($id: ID!) {
        post(where: { id: $id }) {
            id
            title
            url
        }
    }
`

const NewsDetails = props => {
    return (
        <>
            <Query query={SINGLE_POST_QUERY} variables={{ id: props.id }}>
                {({ data, loading, error }) => {
                    if (error) return <GQLError error={error} />
                    if (loading) return <p>Loading...</p>

                    const { title, url } = data.post
                    return (
                        <>
                            <StyledItem>
                                <div>
                                    <h2>{title}</h2>
                                    <p>{url}</p>
                                </div>
                            </StyledItem>
                            <Embedly url={url} />
                        </>
                    )
                }}
            </Query>
            <Comments id={props.id} />
        </>
    )
}

export default NewsDetails
