import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import axios from 'axios'
import styled from 'styled-components'

const StyledEmbedly = styled.div`
    border: 2px solid ${tp => tp.theme.grey};
    padding: 18px;
    .title {
        padding: 0;
        margin: 0;
    }
    .desc {
        color: ${tp => tp.theme.grey};
    }
`

export default class Embedly extends Component {
    state = {
        embed: '',
    }
    componentDidMount() {
        axios
            .get(
                `https://api.embedly.com/1/oembed?url=${
                    this.props.url
                }&key=24a49378fc8a4c8bae846af46c472388`
            )
            .then(res => this.setState({ embed: res.data }))
    }

    render() {
        const { title, description, html } = this.state.embed
        const { url } = this.props
        return (
            this.state.embed && (
                <StyledEmbedly>
                    <h2 className="title">{title}</h2>
                    {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
                    <p className="desc">{description}</p>
                    <p className="url">
                        <a href={url}>{url}</a>
                    </p>
                </StyledEmbedly>
            )
        )
    }
}
