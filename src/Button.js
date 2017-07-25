import styled from 'styled-components';

const Button = styled.button.attrs({
    // `type="submit"` is a really nasty default and we forget all the time to set this to type="button" manually...
    type: 'button',
})`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    line-height: 1;

    ${props =>
        props.icon &&
        `
        > svg {
            margin: ${props.unstyled ? '6px' : '0 6px 0 0'};
        }
    `}

    ${props =>
        !props.unstyled &&
        `
        background: ${props.theme.primary};
        height: 30px;
        color: #fff;
        padding: 0 10px;
        margin: 5px;
        text-decoration: none;
        border-radius: 4px;
        font-size: 16px;
        vertical-align: middle;

        ${props.fullWidth &&
            `
            margin: 5px 0;
            width: 100%;
        `}
    `};
`;

export default Button;
