import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import swal from 'sweetalert'
import styled from 'styled-components'
import NProgress from 'nprogress'
import GQLError from './GQLError'
import Form from './styled/Form'
import Panel from './Card'
import { NEWS_LIST_QUERY } from './NewsList'
const StyledCreatedLunk = styled.div`
    margin-bottom: 25px;
    .create-link {
        display: inline-block;
        margin-bottom: 15px;
    }
`

const CREATE_LINK_MUTATION = gql`
    mutation CREATE_LINK_MUTATION($title: String!, $url: String!) {
        createPost(title: $title, url: $url) {
            id
            title
            url
            createdAt
            comments {
                id
            }
        }
    }
`

class CreateLink extends Component {
    state = {
        show: false,
        title: '',
        url: '',
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <StyledCreatedLunk>
                <a
                    className="create-link"
                    href="javascript:void(0)"
                    onClick={() => this.setState(p => ({ show: !p.show }))}
                >
                    Submit New Link →
                </a>
                {this.state.show && (
                    <Mutation
                        mutation={CREATE_LINK_MUTATION}
                        variables={this.state}
                        refetchQueries={[{ query: NEWS_LIST_QUERY }]}
                    >
                        {(mutation, { loading, error }) => {
                            if (loading) {
                                NProgress.start()
                            } else {
                                NProgress.done()
                            }

                            return (
                                <Panel>
                                    <Form
                                        onSubmit={e => {
                                            e.preventDefault()
                                            mutation().then(res => {
                                                swal(
                                                    'Link Created',
                                                    '',
                                                    'success'
                                                )
                                                this.setState({
                                                    show: false,
                                                })
                                            })
                                        }}
                                    >
                                        <GQLError error={error} />
                                        <label>
                                            Title
                                            <input
                                                type="text"
                                                name="title"
                                                onChange={this.handleChange}
                                                placeholder="Title"
                                            />
                                        </label>
                                        <label>
                                            Url
                                            <input
                                                type="text"
                                                name="url"
                                                placeholder="Url"
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <button type="submit">Submit</button>
                                    </Form>
                                </Panel>
                            )
                        }}
                    </Mutation>
                )}
            </StyledCreatedLunk>
        )
    }
}
export default CreateLink
