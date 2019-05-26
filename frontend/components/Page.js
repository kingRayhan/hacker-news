import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import { BrandColor } from '../config'
import Header from './Header'
import Sidebar from './Sidebar'

const theme = {
    primary: BrandColor,
    red: '#e74c3c',
    black: '#393939',
    grey: '#828282',
    lightgrey: '#E1E1E1',
    white: '#fff',
    offWhite: '#EDEDED',
    maxWidth: '1200px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
    color: ${props => props.theme.black};
`

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 85px auto;
    padding: 2rem;

    display: grid;
    grid-template-columns: auto 245px;
    column-gap: 45px;
`

const progressColor = 'green'

injectGlobal`
      #nprogress{pointer-events:none}#nprogress
      .bar{
        background:${progressColor};
        position:fixed;z-index:1031;top:0;left:0;width:100%;height:5px
      }
      #nprogress .peg{
        display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px ${progressColor},0 0 5px ${progressColor};opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:${progressColor};border-left-color:${progressColor};border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Roboto', sans-serif;
    background: #f2f3f5;
  }
  a {
    text-decoration: none;
    color: ${theme.primary};
    &:hover{
      text-decoration: underline;
    }
  }
`

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Header />
                    <Inner>
                        {this.props.children}
                        <Sidebar />
                    </Inner>
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page
