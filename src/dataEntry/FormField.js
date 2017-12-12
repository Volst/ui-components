import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import LabelText from './LabelText';
import { InlineText } from '../general/typography/Text';
import { readableColor } from '../config';
import { t } from 'i18next';
import { uniqueId } from 'lodash';

const Field = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    padding: ${props => (props.noPadding ? `0` : '0 0 15px')};
`;

// TODO: This tooltip should definitely be its own component
const ErrorTooltip = styled.div`
    position: absolute;
    top: 100%;
    font-size: 14px;
    background: ${props => props.theme.dangerColor};
    color: ${props => readableColor(props.theme.dangerColor)};
    padding: 5px 8px;
    border-radius: 4px;
    z-index: ${props => props.theme.zIndexTooltip};
    margin-top: -5px;
    max-width: 100%;
    word-break: break-word;

    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        border-style: solid;
        top: -5px;
        left: 10px;
        border-width: 0 5px 5px 5px;
        border-color: transparent transparent
            ${props => props.theme.dangerColor} transparent;
    }
`;

function validationErrorMapper(errorCode) {
    // Fallback to untranslated error message.
    // Forcing to String is important, since the error code Binder uses when a field is null, is `null` (not as string).
    return t([`form.validationErrors.${String(errorCode)}`, String(errorCode)]);
}

export default class FormField extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        label: PropTypes.string,
        helpText: PropTypes.string,
        // Also accepts an object because MobX arrays are objects.
        error: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
        // TODO: I don't like the name `noPadding`
        noPadding: PropTypes.bool,
        required: PropTypes.bool,
    };

    static childContextTypes = {
        formFieldHasError: PropTypes.bool,
    };

    getChildContext() {
        return {
            formFieldHasError: this.props.error && this.props.error.length > 0,
        };
    }

    componentWillMount() {
        this.uniqueId = `formfield-${uniqueId()}`;
    }

    renderLabel() {
        if (!this.props.label) return null;

        return (
            <LabelText helpText={this.props.helpText} htmlFor={this.uniqueId}>
                <div>
                    {this.props.label}
                    {this.props.required && (
                        <InlineText tone="danger">&nbsp;*</InlineText>
                    )}
                </div>
            </LabelText>
        );
    }

    renderError() {
        const { error } = this.props;
        if (!error || error.length < 1) return null;

        return (
            <ErrorTooltip>
                {error.map(validationErrorMapper).join(', ')}
            </ErrorTooltip>
        );
    }

    render() {
        return (
            <Field noPadding={this.props.noPadding}>
                {this.renderLabel()}
                {this.props.children}
                {this.renderError()}
            </Field>
        );
    }
}
