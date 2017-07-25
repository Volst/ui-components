(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('styled-components'), require('prop-types'), require('react-router-dom'), require('mobx-react'), require('mobx'), require('react-custom-scrollbars')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components', 'prop-types', 'react-router-dom', 'mobx-react', 'mobx', 'react-custom-scrollbars'], factory) :
	(factory((global.reCyCle = {}),global.React,global.styled,global.PropTypes,global.ReactRouterDom,global.mobxReact,global.mobx,global.reactCustomScrollbars));
}(this, (function (exports,React,styled,PropTypes,reactRouterDom,mobxReact,mobx,reactCustomScrollbars) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
var styled__default = 'default' in styled ? styled['default'] : styled;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

const COLOR_TEXT = 'rgba(0, 0, 0, 0.7)';

const injectGlobalStyles = () => styled.injectGlobal`
    html {
        box-sizing: border-box;
        font-family: Roboto, Arial, sans-serif;
        color: ${COLOR_TEXT};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    input, textarea, button {
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
        return React__default.createElement(styled.ThemeProvider, this.props);
    }
};

var _class;
var _temp2;

const Container = styled__default.div.withConfig({
    displayName: 'Modal__Container'
})(['position:fixed;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;']);

const Background = styled__default.div.withConfig({
    displayName: 'Modal__Background'
})(['position:absolute;background:rgba(0,0,0,0.5);width:100%;height:100%;cursor:pointer;']);

const Content = styled__default.div.withConfig({
    displayName: 'Modal__Content'
})(['position:relative;background:#fff;border-radius:4px;display:flex;overflow:hidden;height:80vh;width:80vw;max-width:800px;max-height:800px;']);

const ESCAPE_KEY = 27;

let Modal = (_temp2 = _class = class Modal extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.handleKeyDown = e => {
            if (e.keyCode === ESCAPE_KEY) {
                this.props.onClose();
            }
        }, _temp;
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
            React__default.createElement(Background, { onClick: this.props.onClose }),
            React__default.createElement(
                Content,
                null,
                this.props.children
            )
        );
    }
}, _class.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
}, _temp2);

const Button = styled__default.button.attrs({
    // `type="submit"` is a really nasty default and we forget all the time to set this to type="button" manually...
    type: 'button'
}).withConfig({
    displayName: 'Button__Button'
})(['display:inline-flex;align-items:center;justify-content:center;margin:1px;padding:0;border:0;background:transparent;cursor:', ';line-height:1;', ' ', ';'], props => props.disabled ? 'not-allowed' : 'pointer', props => props.icon && `
        > svg {
            margin: ${props.unstyled ? '6px' : '0 6px 0 0'};
        }
    `, props => !props.unstyled && `
        background: ${props.theme.primary};
        height: 30px;
        color: #fff;
        padding: 0 10px;
        margin: 5px;
        text-decoration: none;
        border-radius: 4px;
        font-size: 16px;
        vertical-align: middle;

        ${props.fullWidth && `
            margin: 5px 0;
            width: 100%;
        `}
    `);

const ExternalLink = Button.withComponent('a');
const Link$1 = Button.withComponent(reactRouterDom.Link);

var _class$1;
var _descriptor;
var _class2;
var _temp2$1;

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

const StyledDiv = styled__default.div.withConfig({
    displayName: 'RadioButtons__StyledDiv'
})(['display:flex;align-items:stretch;border:1px solid transparent;border-radius:4px;', ';'], props => props.focus && `
        border-color: ${props => props.theme.primary};
    `);

const Option = styled__default.div.withConfig({
    displayName: 'RadioButtons__Option'
})(['flex:1;display:flex;justify-content:center;&:first-child > label{border-top-left-radius:4px;border-bottom-left-radius:4px;border-left-width:1px;}&:last-child > label{border-top-right-radius:4px;border-bottom-right-radius:4px;}']);

const StyledLabel = styled__default.label.withConfig({
    displayName: 'RadioButtons__StyledLabel'
})(['flex:1;cursor:', ';display:flex;align-items:center;justify-content:center;padding:6px 20px;text-align:center;border:1px solid #ccc;border-left-width:0;background:#fff;font-size:14px;color:rgba(0,0,0,0.5);'], props => props.disabled ? 'not-allowed' : 'pointer');

const StyledInput = styled__default.input.withConfig({
    displayName: 'RadioButtons__StyledInput'
})(['position:fixed;left:-999999px;opacity:0;&:checked + label{background:', ';border-color:', ';color:#fff;box-shadow:-1px 0 ', ';}'], props => props.theme.primary, props => props.theme.primary, props => props.theme.primary);

var RadioButtons = mobxReact.observer((_class$1 = (_temp2$1 = _class2 = class RadioButtons extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), _initDefineProp(this, 'hasFocus', _descriptor, this), this.handleChange = value => {
            if (!this.props.disabled) {
                this.props.onChange(this.props.name, value);
            }
        }, this.renderItem = item => {
            const handleChange = () => this.handleChange(item.value);
            return React__default.createElement(
                Option,
                { key: item.value },
                React__default.createElement(StyledInput, {
                    tabIndex: '0',
                    type: 'radio',
                    name: this.props.name,
                    checked: item.value === this.props.value,
                    onChange: handleChange,
                    disabled: this.props.disabled
                }),
                React__default.createElement(
                    StyledLabel,
                    {
                        onClick: handleChange,
                        disabled: this.props.disabled
                    },
                    item.label
                )
            );
        }, this.handleFocus = () => {
            this.hasFocus = true;
        }, this.handleBlur = () => {
            this.hasFocus = false;
        }, _temp;
    }

    render() {
        return React__default.createElement(
            StyledDiv,
            {
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                focus: this.hasFocus
            },
            this.props.options.map(this.renderItem)
        );
    }
}, _class2.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number])
}, _temp2$1), (_descriptor = _applyDecoratedDescriptor(_class$1.prototype, 'hasFocus', [mobx.observable], {
    enumerable: true,
    initializer: function () {
        return false;
    }
})), _class$1));

var _class$2;
var _temp2$2;

const StyledLabel$1 = styled__default.label.withConfig({
    displayName: 'Checkbox__StyledLabel'
})(['width:100%;display:block;margin-bottom:3px;cursor:pointer;']);

const StyledInput$1 = styled__default.input.withConfig({
    displayName: 'Checkbox__StyledInput'
})(['margin-right:5px;position:relative;top:-1px;']);

let Checkbox = (_temp2$2 = _class$2 = class Checkbox extends React.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.handleChange = e => {
            this.props.onChange(this.props.name, e.target.checked);
        }, _temp;
    }

    render() {
        return React__default.createElement(
            StyledLabel$1,
            null,
            React__default.createElement(StyledInput$1, {
                type: 'checkbox',
                onChange: this.handleChange,
                checked: this.props.value,
                disabled: this.props.disabled
            }),
            this.props.label
        );
    }
}, _class$2.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool
}, _temp2$2);

var AppContainer = styled__default.div.withConfig({
    displayName: 'AppContainer'
})(['width:100%;height:100%;position:relative;display:flex;flex-direction:column;']);

var Body = styled__default.div.withConfig({
    displayName: 'Body'
})(['flex:1;display:flex;flex-direction:column;']);

const StyledScrollbars = styled__default(reactCustomScrollbars.Scrollbars).withConfig({
    displayName: 'Content__StyledScrollbars'
})(['flex:1;']);

const Main = styled__default.main.withConfig({
    displayName: 'Content__Main'
})(['margin:0 auto;max-width:1500px;padding:20px;', ' transition:200ms filter ease;', ';'], props => props.blur ? `
        filter: blur(2px) grayscale(40%);
        pointer-events: none;
        opacity: 0.6;
    ` : null, props => props.center ? `
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    ` : null);

const Content$1 = props => React__default.createElement(
    StyledScrollbars,
    null,
    React__default.createElement(
        Main,
        { center: props.center, blur: props.blur },
        props.children
    )
);

Content$1.propTypes = {
    children: PropTypes.node,
    center: PropTypes.bool,
    blur: PropTypes.bool
};

var ContentContainer = styled__default.div.withConfig({
    displayName: 'ContentContainer'
})(['flex:1;display:flex;']);

const StyledAside = styled__default.aside.withConfig({
    displayName: 'Sidebar__StyledAside'
})(['width:', 'px;background:#eee;'], props => props.medium ? 450 : 350);

const Content$3 = styled__default.div.withConfig({
    displayName: 'Sidebar__Content'
})(['padding:25px;']);

const Sidebar = ({ children, medium }) => React__default.createElement(
    StyledAside,
    { medium: medium },
    React__default.createElement(
        reactCustomScrollbars.Scrollbars,
        null,
        React__default.createElement(
            Content$3,
            null,
            children
        )
    )
);

Sidebar.propTypes = {
    children: PropTypes.node,
    medium: PropTypes.bool
};

var Toolbar = styled__default.section.withConfig({
    displayName: 'Toolbar'
})(['height:40px;background-color:#d9ebf3;display:flex;align-items:center;']);

exports.ReCyCleTheme = ReCyCleTheme;
exports.Modal = Modal;
exports.Button = Button;
exports.ExternalLink = ExternalLink;
exports.RadioButtons = RadioButtons;
exports.Checkbox = Checkbox;
exports.AppContainer = AppContainer;
exports.Body = Body;
exports.Content = Content$1;
exports.ContentContainer = ContentContainer;
exports.Sidebar = Sidebar;
exports.Toolbar = Toolbar;

Object.defineProperty(exports, '__esModule', { value: true });

})));
