import styled from 'styled-components'

export default styled.form`
    label,
    input,
    textarea {
        width: 100%;
    }
    label {
        margin-bottom: 18px;
        display: inline-block;
        text-transform: capitalize;
        font-size: 16px;

        margin-bottom: 15px;
        &:last-child {
            margin: 0;
        }
    }

    input,
    textarea,
    button {
        &:focus {
            outline: none;
        }
    }
    input,
    textarea {
        padding: 10px;
    }

    button {
        background-color: ${tp => tp.theme.primary};
        border: 0;
        color: ${tp => tp.theme.white};
        cursor: pointer;
        padding: 8px 11px;
        font-size: 12px;
    }
    fieldset {
        border: none;
        &[disabled] {
            background-color: ${tp => tp.theme.lightgrey};
            textarea {
                background-color: ${tp => tp.theme.lightgrey};
            }
        }
    }
`
