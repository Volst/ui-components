import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button } from '../general/Button';
import IconNavigateBefore from '../general/icon/IconNavigateBefore';
import IconNavigateNext from '../general/icon/IconNavigateNext';
import styled from 'styled-components';
import { t } from 'i18next';

const PageCount = styled.div`
  margin-right: 4px;
  padding: 0 8px;
  display: inline-block;
  vertical-align: middle;
`;

export default class PaginationControls extends Component {
  static propTypes = {
    handlePrevious: PropTypes.func,
    handleNext: PropTypes.func,
    hasPreviousPage: PropTypes.bool,
    hasNextPage: PropTypes.bool,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number,
    previousText: PropTypes.string,
    ofText: PropTypes.string,
    nextText: PropTypes.string,
  };

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
          {this.props.totalPages &&
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
