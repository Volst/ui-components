import * as React from 'react';
import { Button, ButtonProps } from '../general/Button';
import IconNavigateBefore from '../general/icon/IconNavigateBefore';
import IconNavigateNext from '../general/icon/IconNavigateNext';
import styled from '../styled-components';
import { t } from 'i18next';
import { Tone } from '../PropTypes';
import { PaginationControlsProps } from './PaginationControls';

interface StyledButtonProps extends ButtonProps {
  roundedRight?: boolean;
}

const StyledButton = styled<StyledButtonProps, {}>(Button)`
  margin: 0;
  border-radius: ${props =>
    props.roundedRight ? '0 4px 4px 0' : '4px 0 0 4px'};
`;

const PageCount = styled('div')`
  flex: 1;
  margin-left: -4px;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PaginationWrapperProps {
  bottom: string;
}

const PaginationWrapper = styled<PaginationWrapperProps, 'div'>('div')`
  width: 150px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  position: fixed;
  z-index: 10;
  bottom: ${props => props.bottom};
`;

const PaginationPlaceholder = styled('div')`
  width: 150px;
  margin-left: calc(50% - 75px);
  height: 38px;
`;

export interface PaginationControlsFloatProps extends PaginationControlsProps {
  bottom?: string;
}

export default class PaginationControlsFloat extends React.Component<
  PaginationControlsFloatProps,
  {}
> {
  render() {
    return (
      <PaginationPlaceholder>
        <PaginationWrapper bottom={this.props.bottom || '10px'}>
          <StyledButton
            onClick={this.props.handlePrevious}
            disabled={!this.props.hasPreviousPage}
          >
            <IconNavigateBefore />
          </StyledButton>
          <PageCount>
            {this.props.currentPage} / {this.props.totalPages || 1}
          </PageCount>
          <StyledButton
            onClick={this.props.handleNext}
            disabled={!this.props.hasNextPage}
            roundedRight
          >
            <IconNavigateNext />
          </StyledButton>
        </PaginationWrapper>
      </PaginationPlaceholder>
    );
  }
}
