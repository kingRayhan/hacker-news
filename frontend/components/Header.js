import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const StyledHeader = styled.header`
    background-color: ${tp => tp.theme.primary};
    position: fixed;
    z-index: 999;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
    .inner {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 15px 18px;
    }
    a {
        color: hsla(0, 0%, 100%, 0.8);
        line-height: 24px;
        transition: color 0.15s ease;
        display: inline-block;
        vertical-align: middle;
        font-weight: 300;
        letter-spacing: 0.075em;
        margin-right: 1.8em;
        &.logo {
            h3 {
                padding: 0;
                margin: 0;
            }
        }
        &.github {
            color: #fff;
            font-size: 0.9em;
            margin: 0;
            float: right;
        }
    }
    a.router-link-active {
        color: #fff;
        font-weight: 400;
    }
`

export default class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <nav className="inner">
                    <Link href="/">
                        <a className="logo">
                            <h3>HackerNews</h3>
                        </a>
                    </Link>
                    <a href="/top">Top</a>
                    <a href="/new" className="router-link-active">
                        New
                    </a>
                    <a href="/show">Show</a>
                    <a href="/ask">Ask</a>
                    <a href="/job">Jobs</a>
                    <a
                        href="https://github.com/vuejs/vue-hackernews-2.0"
                        target="_blank"
                        rel="noopener"
                        className="github"
                    >
                        Built with <i className="fa fa-heart" /> Graphql
                    </a>
                </nav>
            </StyledHeader>
        )
    }
}
