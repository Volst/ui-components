(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? factory(
              exports,
              require('react'),
              require('styled-components'),
              require('prop-types'),
              require('mobx-react'),
              require('mobx')
          )
        : typeof define === 'function' && define.amd
          ? define(
                [
                    'exports',
                    'react',
                    'styled-components',
                    'prop-types',
                    'mobx-react',
                    'mobx',
                ],
                factory
            )
          : factory(
                (global.reCyCle = {}),
                global.React,
                global.styled,
                global.PropTypes,
                global.mobxReact,
                global.mobx
            );
})(this, function(exports, React, styled, PropTypes, mobxReact, mobx) {
    'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    var styled__default = 'default' in styled ? styled['default'] : styled;
    PropTypes =
        PropTypes && PropTypes.hasOwnProperty('default')
            ? PropTypes['default']
            : PropTypes;

    const COLOR_TEXT = 'rgba(0, 0, 0, 0.7)';

    const injectGlobalStyles = () => styled.injectGlobal`
        html {
            box-sizing: border-box;
            font-family: Roboto, Arial, sans-serif;
            color: ${COLOR_TEXT};
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }

        html,
        body,
        #root {
            width: 100%;
            height: 100%;
            margin: 0;
        }

        input,
        textarea,
        button {
            font-family: inherit;
        }

        input:focus,
        button:focus {
            outline: 0;
        }
    `;

    let ReCyCleTheme = class ReCyCleTheme extends React.Component {
        componentDidMount() {
            injectGlobalStyles();
        }
        render() {
            return React__default.createElement(
                styled.ThemeProvider,
                this.props
            );
        }
    };

    var _class;
    var _descriptor;
    var _class2;
    var _temp2;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer
                ? descriptor.initializer.call(context)
                : void 0,
        });
    }

    function _applyDecoratedDescriptor(
        target,
        property,
        decorators,
        descriptor,
        context
    ) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function(key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer
                ? desc.initializer.call(context)
                : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    const StyledDiv = styled__default.div.withConfig({
        displayName: 'RadioButtons__StyledDiv',
    })(
        [
            'display:flex;align-items:stretch;border:1px solid transparent;border-radius:4px;',
            ';',
        ],
        props =>
            props.focus &&
            `
        border-color: ${props => props.theme.primary};
    `
    );

    const Option = styled__default.div.withConfig({
        displayName: 'RadioButtons__Option',
    })([
        'flex:1;display:flex;justify-content:center;&:first-child > label{border-top-left-radius:4px;border-bottom-left-radius:4px;border-left-width:1px;}&:last-child > label{border-top-right-radius:4px;border-bottom-right-radius:4px;}',
    ]);

    const StyledLabel = styled__default.label.withConfig({
        displayName: 'RadioButtons__StyledLabel',
    })(
        [
            'flex:1;cursor:',
            ';display:flex;align-items:center;justify-content:center;padding:6px;text-align:center;border:1px solid #ccc;border-left-width:0;background:#fff;font-size:14px;color:rgba(0,0,0,0.5);',
        ],
        props => (props.disabled ? 'not-allowed' : 'pointer')
    );

    const StyledInput = styled__default.input.withConfig({
        displayName: 'RadioButtons__StyledInput',
    })(
        [
            'position:fixed;left:-999999px;opacity:0;&:checked + label{background:',
            ';border-color:',
            ';color:#fff;box-shadow:-1px 0 ',
            ';}',
        ],
        props => props.theme.primary,
        props => props.theme.primary,
        props => props.theme.primary
    );

    var RadioButtons = mobxReact.observer(
        (
            (_class = (
                (_temp2 = _class2 = class RadioButtons extends React.Component {
                    constructor(...args) {
                        var _temp;

                        return (_temp = super(...args)), _initDefineProp(
                            this,
                            'hasFocus',
                            _descriptor,
                            this
                        ), (this.handleChange = value => {
                            if (!this.props.disabled) {
                                this.props.onChange(this.props.name, value);
                            }
                        }), (this.renderItem = item => {
                            const handleChange = () =>
                                this.handleChange(item.value);
                            return React__default.createElement(
                                Option,
                                { key: item.value },
                                React__default.createElement(StyledInput, {
                                    tabIndex: '0',
                                    type: 'radio',
                                    name: this.props.name,
                                    checked: item.value === this.props.value,
                                    onChange: handleChange,
                                    disabled: this.props.disabled,
                                }),
                                React__default.createElement(
                                    StyledLabel,
                                    {
                                        onClick: handleChange,
                                        disabled: this.props.disabled,
                                    },
                                    item.label
                                )
                            );
                        }), (this.handleFocus = () => {
                            this.hasFocus = true;
                        }), (this.handleBlur = () => {
                            this.hasFocus = false;
                        }), _temp;
                    }

                    render() {
                        return React__default.createElement(
                            StyledDiv,
                            {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur,
                                focus: this.hasFocus,
                            },
                            this.props.options.map(this.renderItem)
                        );
                    }
                }),
                (_class2.propTypes = {
                    onChange: PropTypes.func,
                    name: PropTypes.string,
                    disabled: PropTypes.bool,
                    options: PropTypes.array.isRequired,
                    value: PropTypes.oneOfType([
                        PropTypes.bool,
                        PropTypes.string,
                        PropTypes.number,
                    ]),
                }),
                _temp2
            )),
            (_descriptor = _applyDecoratedDescriptor(
                _class.prototype,
                'hasFocus',
                [mobx.observable],
                {
                    enumerable: true,
                    initializer: function() {
                        return false;
                    },
                }
            )),
            _class
        )
    );

    var _class$1;
    var _temp2$1;

    const Container = styled__default.div.withConfig({
        displayName: 'Modal__Container',
    })([
        'position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;',
    ]);

    const Background = styled__default.div.withConfig({
        displayName: 'Modal__Background',
    })([
        'position:absolute;background:rgba(0,0,0,0.5);width:100%;height:100%;cursor:pointer;',
    ]);

    const Content = styled__default.div.withConfig({
        displayName: 'Modal__Content',
    })([
        'position:relative;background:#fff;border-radius:4px;display:flex;overflow:hidden;height:80vh;width:80vw;max-width:800px;max-height:800px;',
    ]);

    const ESCAPE_KEY = 27;

    let Modal = (
        (_temp2$1 = _class$1 = class Modal extends React.Component {
            constructor(...args) {
                var _temp;

                return (_temp = super(...args)), (this.handleKeyDown = e => {
                    if (e.keyCode === ESCAPE_KEY) {
                        this.props.onClose();
                    }
                }), _temp;
            }

            componentWillMount() {
                document.addEventListener('keydown', this.handleKeyDown);
            }

            componentWillUnmount() {
                document.removeEventListener('keydown', this.handleKeyDown);
            }

            render() {
                return React__default.createElement(
                    Container,
                    null,
                    React__default.createElement(Background, {
                        onClick: this.props.onClose,
                    }),
                    React__default.createElement(
                        Content,
                        null,
                        this.props.children
                    )
                );
            }
        }),
        (_class$1.propTypes = {
            children: PropTypes.node.isRequired,
            onClose: PropTypes.func.isRequired,
        }),
        _temp2$1
    );

    exports.ReCyCleTheme = ReCyCleTheme;
    exports.RadioButtons = RadioButtons;
    exports.Modal = Modal;

    Object.defineProperty(exports, '__esModule', { value: true });
});
