import styled from 'styled-components';

export default styled.div`
  height: 35px;
  display: flex;
  align-items: stretch;

  transition: 175ms height ease;

  &:empty {
    height: 10px;
  }

  &:nth-child(even) {
    background: ${props => props.theme.darkColor};
    color: white;

    .nav-item {
      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      &:before {
        border-bottom-color: #fff;
      }
    }
  }

  ${props =>
    props.inContent &&
    `
        margin: -20px -20px 0 -20px;
        border-bottom: 1px solid ${props.theme.darkColor};
        .nav-item:after {
            content: '';
        }
        .nav-item:before {
            border-bottom-color: ${props.theme.darkColor};
        }
    `};
`;
