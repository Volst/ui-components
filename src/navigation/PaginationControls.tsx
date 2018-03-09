import * as React from 'react';
import { Button } from '../general/Button';
import IconNavigateBefore from '../general/icon/IconNavigateBefore';
import IconNavigateNext from '../general/icon/IconNavigateNext';
import styled from '../styled-components';
import { t } from 'i18next';

const PageCount = styled.div`
  margin-right: 4px;
  padding: 0 8px;
  display: inline-block;
  vertical-align: middle;
`;

// TODO: I don't know why so many things are optional here.
export interface PaginationControlsProps {
  handlePrevious?: () => void;
  handleNext?: () => void;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  currentPage: number;
  totalPages: number;
  previousText?: string;
  ofText?: string;
  nextText?: string;
}

export default class PaginationControls extends React.Component<
  PaginationControlsProps,
  {}
> {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.handlePrevious}
          disabled={!this.props.hasPreviousPage}
          tone="primary"
        >
          <IconNavigateBefore />
          {this.props.previousText === undefined
            ? t('pagination.previousText')
            : this.props.previousText}
        </Button>
        <PageCount>
          {this.props.currentPage}
          {this.props.totalPages > 0 &&
            ` ${this.props.ofText || t('pagination.ofText')} ${
              this.props.totalPages
            }`}
        </PageCount>
        <Button
          onClick={this.props.handleNext}
          disabled={!this.props.hasNextPage}
          tone="primary"
        >
          {this.props.nextText === undefined
            ? t('pagination.nextText')
            : this.props.nextText}
          <IconNavigateNext />
        </Button>
      </div>
    );
  }
}
