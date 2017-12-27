import styled from 'styled-components';
import { TonePropType } from '../../PropTypes';
import PropTypes from 'prop-types';

export const Text = styled.p`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  margin: 0 0 20px 0;
  line-height: 1.45;
  color: ${props => props.theme[`${props.tone || 'text'}Color`]};
  font-size: ${props => (props.small ? '80%' : 'inherit')};
`;

Text.displayName = 'Text';
Text.propTypes = {
  tone: TonePropType,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
};

export const InlineText = Text.withComponent('span');
InlineText.displayName = 'InlineText';
