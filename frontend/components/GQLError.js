import React from 'react'
import styled from 'styled-components'

const StyledError = styled.div`
    border-left: 3px solid red;
    background-color: ${tp => tp.theme.white};
    padding: 15px;
    background-color: #ff000030;
    color: ${tp => tp.theme.black};
`

const GQLError = props => {
    return props.error ? (
        <StyledError>
            {props.error.message.replace('GraphQL error: ', '')}
        </StyledError>
    ) : null
}

export default GQLError
