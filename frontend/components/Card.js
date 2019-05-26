import React from 'react'
import styled from 'styled-components'
const StyledPanel = styled.div`
    background: #fff;
    padding: 15px;
`
const Panel = ({ children }) => {
    return <StyledPanel>{children}</StyledPanel>
}

export default Panel
