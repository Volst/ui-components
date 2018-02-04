import { injectGlobal, keyframes } from '../../styled-components';

const rcDialogZoomIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

const rcDialogZoomOut = keyframes`
  0% {
    transform: scale(1, 1);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
  }
`;

const rcDialogFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rcDialogFadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export default theme => injectGlobal`
  .rc-dialog {
    position: relative;
    width: auto;
    max-width: 600px;
    margin: 0 auto;
    max-height: 100%;
    height: auto;
    display: flex;
  }
  .rc-dialog-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    padding: 10px;
  }
  @media (min-width: 768px) {
    .rc-dialog-wrap {
      padding: 30px;
    }
  }
  .rc-dialog-title {
    margin: 0;
    font-size: 20px;
    line-height: 21px;
    font-weight: bold;
  }
  .rc-dialog-content {
    position: relative;
    background-color: #ffffff;
    border: none;
    border-radius: 6px;
    background-clip: padding-box;
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .rc-dialog-close {
    cursor: pointer;
    border: 0;
    background: transparent;
    font-size: 21px;
    position: absolute;
    right: 20px;
    top: 12px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.2;
    text-decoration: none;
  }
  .rc-dialog-close-x:after {
    content: '×';
  }
  .rc-dialog-close:hover {
    opacity: 1;
    text-decoration: none;
  }
  .rc-dialog-header {
    padding: 13px 20px 14px 20px;
    border-radius: 5px 5px 0 0;
    background: #fff;
    color: ${theme.textColor};
    border-bottom: 1px solid #e9e9e9;
  }
  .rc-dialog-body {
    overflow: auto;
    padding: 20px;
  }
  .rc-dialog-footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 20px 10px 10px;
    text-align: right;
    border-radius: 0 0 5px 5px;
  }
  .rc-dialog-zoom-enter,
  .rc-dialog-zoom-appear {
    opacity: 0;
    animation-duration: 0.25s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-play-state: paused;
  }
  .rc-dialog-zoom-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.66, 0.84);
    animation-play-state: paused;
  }
  .rc-dialog-zoom-enter.rc-dialog-zoom-enter-active,
  .rc-dialog-zoom-appear.rc-dialog-zoom-appear-active {
    animation-name: ${rcDialogZoomIn};
    animation-play-state: running;
  }
  .rc-dialog-zoom-leave.rc-dialog-zoom-leave-active {
    animation-name: ${rcDialogZoomOut};
    animation-play-state: running;
  }
  .rc-dialog-mask {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #373737;
    background-color: rgba(55, 55, 55, 0.6);
    height: 100%;
    z-index: 1050;
  }
  .rc-dialog-mask-hidden {
    display: none;
  }
  .rc-dialog-fade-enter,
  .rc-dialog-fade-appear {
    opacity: 0;
    animation-duration: 0.25s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-play-state: paused;
  }
  .rc-dialog-fade-leave {
    animation-duration: 0.2s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    animation-play-state: paused;
    pointer-events: none;
  }
  .rc-dialog-fade-enter.rc-dialog-fade-enter-active,
  .rc-dialog-fade-appear.rc-dialog-fade-appear-active {
    animation-name: ${rcDialogFadeIn};
    animation-play-state: running;
  }
  .rc-dialog-fade-leave.rc-dialog-fade-leave-active {
    animation-name: ${rcDialogFadeOut};
    animation-play-state: running;
  }
`;
