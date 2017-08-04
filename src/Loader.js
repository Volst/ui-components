import styled, { keyframes } from 'styled-components';

const sweep = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export default styled.div`
    width: 18px;
    height: 18px;
    animation: ${sweep} 0.7s infinite linear;
    border-radius: 8px;
    margin: 5px;
    transition: 200ms all linear;

    ${props => {
        if (props.isLoading) {
            return `
                box-shadow: 4px 0 0px -3px black;
                transition-duration: 1s;
            `;
        }
        return 'box-shadow: 10px 0 0px -10px black;';
    }}
`;

export const LoaderContainer = styled.div`
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
