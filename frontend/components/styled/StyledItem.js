import styled from 'styled-components'

export default styled.div`
    background-color: ${tp => tp.theme.white};
    display: flex;
    margin-bottom: 15px;
    padding: 8px 0;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.07);
    transition: 300ms;
    &:hover {
        box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.22);
    }
    .vote {
        width: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        border-right: 1px solid ${tp => tp.theme.lightgrey};
        margin-right: 15px;
    }
    .content {
        .title {
            margin: 0;
            a {
                span {
                    color: ${tp => tp.theme.grey};
                    font-size: 12px;
                }
            }
        }
        .meta {
            a {
                color: ${tp => tp.theme.grey};
            }
        }
    }
`
