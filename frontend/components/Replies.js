import React, { Component } from 'react'
import Form from './styled/Form'
import styled from 'styled-components'

import Reply from './Reply'

const StyledReplies = styled.div`
    .replies {
        margin-left: 65px;
    }
`

export default class Replies extends Component {
    state = {
        show: false,
    }

    render() {
        return (
            <StyledReplies>
                <div className="replies">
                    <Reply />
                    <Reply />
                    <Reply />
                    <Reply />
                    <Reply />
                </div>

                <a
                    href="javascipr:void(0)"
                    onClick={() => this.setState(p => ({ show: !p.show }))}
                >
                    Reply →
                </a>
                {this.state.show && (
                    <div className="reply">
                        <Form>
                            <textarea
                                cols="30"
                                rows="3"
                                placeholder="write reply"
                            />
                            <button>Reply</button>
                        </Form>
                    </div>
                )}
            </StyledReplies>
        )
    }
}
