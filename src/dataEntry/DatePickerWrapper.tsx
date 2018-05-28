import * as React from 'react';

import { styled, StyledComponent, ThemeInterface } from '../styled-components';
import { readableColor } from '../config';
import { setLightness } from 'polished';

const DatePickerWrapper = styled('div')`
text-align: center;

  .DayPicker {
    display: inline-block;
  }

  .DayPicker-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    user-select: none;
    flex-direction: row;
    padding: 1rem 0;
  }

  .DayPicker-Month {
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    user-select: none;
    margin: 0 1rem;
  }

  .DayPicker-NavBar {
    position: absolute;
    left: 0;
    right: 0;
    padding: 0 0.5rem;
    top: 1rem;
  }

  .DayPicker-NavButton {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }

  .DayPicker-NavButton--prev {
    top: -0.2rem;
    left: 1rem;
    background-image: url('data:image/svg+xml;utf8,<svg fill="${props =>
      props.theme
        .textColor}" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  }

  .DayPicker-NavButton--next {
    top: -0.2rem;
    right: 1rem;
    background-image: url('data:image/svg+xml;utf8,<svg fill="${props =>
      props.theme
        .textColor}" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
  }

  .DayPicker-NavButton--interactionDisabled {
    display: none;
  }

  .DayPicker-Caption {
    display: table-caption;
    height: 1.5rem;
    text-align: center;
  }

  .DayPicker-Weekdays {
    display: table-header-group;
  }

  .DayPicker-WeekdaysRow {
    display: table-row;
  }

  .DayPicker-Weekday {
    display: table-cell;
    padding: 0.5rem;
    font-size: 0.875em;
    text-align: center;
    color: #8b9898;

    abbr {
      text-decoration: none;
    }
  }

  .DayPicker-Body {
    display: table-row-group;
  }

  .DayPicker-Week {
    display: table-row;
  }

  .DayPicker-Day {
    display: table-cell;
    padding: 0.5rem;
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
    outline: none;
  }

  .DayPicker-WeekNumber {
    display: table-cell;
    padding: 0.5rem;
    text-align: right;
    vertical-align: middle;
    min-width: 1rem;
    font-size: 0.75em;
    cursor: pointer;
    color: #8b9898;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    display: table-caption;
    caption-side: bottom;
    padding-top: 0.5rem;
  }

  .DayPicker-TodayButton {
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
    color: #4a90e2;
    font-size: 0.875em;
  }

  /* Default modifiers */

  .DayPicker-Day--today {
    color: ${props => props.theme.dangerColor};
    font-weight: 500;
  }

  .DayPicker-Day--disabled {
    color: ${props => props.theme.lightColor};
    cursor: default;
    background-color: ${props => props.theme.disabledColor};
  }

  .DayPicker-Day--outside {
    cursor: default;
    color: ${props => props.theme.lightColor};
  }

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    color: ${props => readableColor(props.theme.primaryColor)};
    background-color: ${props => props.theme.primaryColor};
  }

  /* DayPickerInput */

  .DayPickerInput {
    display: inline-block;
    width: 100%;
  }

  .DayPickerInput-OverlayWrapper {
    position: relative;
  }

  .DayPickerInput-Overlay {
    left: 0;
    position: absolute;
    background: ${props => props.theme.componentBackground};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    z-index: ${props => props.theme.zIndexSingleDatePickerOverlay};
  }

  /* DateRange stuff */
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: ${props =>
      setLightness(0.93, props.theme.primaryColor)} !important;
    color: ${props => props.theme.textColor};
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`;

export default DatePickerWrapper;
