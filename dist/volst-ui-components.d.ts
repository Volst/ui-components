declare module '@volst/ui-components/src/config' {
	export interface ThemeInterface {
	    primaryColor: string;
	    successColor: string;
	    dangerColor: string;
	    warningColor: string;
	    darkColor: string;
	    lightColor: string;
	    textColor: string;
	    borderColor: string;
	    highlightColor: string;
	    disabledColor: string;
	    componentBackground: string;
	    bodyBackground: string;
	    fontFamily: string;
	    dateFormat: string;
	    zIndexNotificationStack: number;
	    zIndexModal: number;
	    zIndexDropdownMenu: number;
	    zIndexFancySelectDropdown: number;
	    zIndexTooltip: number;
	    zIndexSingleDatePickerOverlay: number;
	    headingTextColor?: string;
	    buttonPrimaryColor?: string;
	}
	export const defaultConfig: ThemeInterface;
	export const themeOverrides: {
	    buttonPrimaryColor: string;
	    headingTextColor: string;
	};
	export function readableColor(color: any): "#fff" | "#111";

}
declare module '@volst/ui-components/src/styled-components' {
	/// <reference types="react" />
	import * as React from 'react';
	import * as styledComponents from 'styled-components';
	import { StyledFunction, StyledComponentClass } from 'styled-components';
	import { ThemeInterface } from '@volst/ui-components/src/config';
	interface ThemeProps {
	    theme?: ThemeInterface;
	} const styled: styledComponents.ThemedBaseStyledInterface<ThemeInterface>, css: styledComponents.ThemedCssFunction<ThemeInterface>, injectGlobal: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => void, keyframes: (strings: TemplateStringsArray, ...interpolations: styledComponents.SimpleInterpolation[]) => string, ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<ThemeInterface>>, withTheme: <P extends {
	    theme?: ThemeInterface;
	}>(component: React.ComponentClass<P> | React.StatelessComponent<P>) => React.ComponentClass<Pick<P, ({ [P in keyof P]: P; } & {
	    theme: never;
	} & {
	    [x: string]: never;
	})[keyof P]> & {
	    theme?: ThemeInterface;
	}>;
	export { css, injectGlobal, keyframes, ThemeProvider, withTheme, styled, ThemeProps, StyledFunction, StyledComponentClass, ThemeInterface };
	export default styled;

}
declare module '@volst/ui-components/src/VolstTheme' {
	/// <reference types="react" />
	import * as React from 'react';
	export function getTheme(theme: any): any;
	export interface VolstThemeProps {
	    theme: any;
	}
	export default class VolstTheme extends React.Component<VolstThemeProps, {}> {
	    static defaultProps: {
	        theme: {};
	    };
	    componentDidMount(): void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/PropTypes' {
	export type ValuePropType = string | number | boolean;
	export type OptionsPropType = {
	    value: ValuePropType;
	    label: string;
	}[];
	export type TonePropType = 'primary' | 'success' | 'warning' | 'danger' | 'light' | 'dark';

}
declare module '@volst/ui-components/src/feedback/Loader' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export const showLoaderCss: string;
	export interface LoaderProps {
	    show?: boolean;
	} const Loader: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & LoaderProps, ThemeInterface, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & LoaderProps>;
	export default Loader;

}
declare module '@volst/ui-components/src/general/Button' {
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	import { TonePropType } from '@volst/ui-components/src/PropTypes';
	export interface ButtonProps {
	    onClick?: (e) => void;
	    link?: boolean;
	    ghost?: boolean;
	    fullWidth?: boolean;
	    disabled?: boolean;
	    tone?: TonePropType;
	    small?: boolean;
	    loading?: boolean;
	    tabIndex?: number;
	}
	export interface FullButtonProps extends ButtonProps {
	    type?: 'submit';
	}
	export const Button: StyledComponentClass<FullButtonProps & {
	    disabled: any;
	}, ThemeInterface, Pick<FullButtonProps, "link" | "small" | "type" | "onClick" | "ghost" | "fullWidth" | "disabled" | "tone" | "loading" | "tabIndex"> & {
	    theme?: ThemeInterface;
	}>;
	export interface ExternalLinkProps extends ButtonProps {
	    href?: string;
	}
	export const ExternalLink: StyledComponentClass<ExternalLinkProps & {
	    disabled: any;
	}, ThemeInterface, Pick<ExternalLinkProps, "link" | "small" | "onClick" | "ghost" | "fullWidth" | "disabled" | "tone" | "loading" | "tabIndex" | "href"> & {
	    theme?: ThemeInterface;
	}>;
	export interface LinkProps extends ButtonProps {
	    to?: string;
	}
	export const Link: StyledComponentClass<LinkProps & {
	    disabled: any;
	}, ThemeInterface, Pick<LinkProps, "link" | "small" | "onClick" | "ghost" | "fullWidth" | "disabled" | "tone" | "loading" | "tabIndex" | "to"> & {
	    theme?: ThemeInterface;
	}>;

}
declare module '@volst/ui-components/src/general/typography/Heading' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface HeadingProps extends ThemeProps {
	    color?: string;
	    compact?: boolean;
	} const Heading: StyledComponentClass<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & HeadingProps, ThemeInterface, React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & HeadingProps>;
	export default Heading;

}
declare module '@volst/ui-components/src/general/typography/Subheading' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface SubheadingProps extends ThemeProps {
	    color?: string;
	    compact?: boolean;
	} const Subheading: StyledComponentClass<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & SubheadingProps, ThemeInterface, React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & SubheadingProps>;
	export default Subheading;

}
declare module '@volst/ui-components/src/general/typography/SuperText' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface SuperTextProps {
	    color?: string;
	    compact?: boolean;
	} const SuperText: StyledComponentClass<React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & SuperTextProps, ThemeInterface, React.ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> & SuperTextProps>;
	export default SuperText;

}
declare module '@volst/ui-components/src/general/typography/Text' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	import { TonePropType } from '@volst/ui-components/src/PropTypes';
	export interface TextProps extends ThemeProps {
	    tone?: TonePropType;
	    bold?: boolean;
	    italic?: boolean;
	    small?: boolean;
	    compact?: boolean;
	}
	export const Text: StyledComponentClass<React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TextProps, ThemeInterface, React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TextProps>;
	export const InlineText: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, ThemeInterface, React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> & TextProps>;

}
declare module '@volst/ui-components/src/general/typography/Center' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const Center: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export default Center;

}
declare module '@volst/ui-components/src/general/typography/Code' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const Code: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
	export default Code;

}
declare module '@volst/ui-components/src/dataEntry/Form' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface FormProps {
	    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	}
	export default class Form extends React.Component<FormProps, {}> {
	    static propTypes: {
	        onSubmit: any;
	    };
	    handleKeydown: (e: any) => void;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    handleSubmit: (e: any) => void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/LabelText' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface LabelTextProps {
	    helpText?: string;
	    htmlFor?: string;
	}
	export default class LabelText extends React.PureComponent<LabelTextProps, {}> {
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/FormField' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface FormFieldProps {
	    label?: string;
	    helpText?: string;
	    error?: any | string[];
	    noPadding?: boolean;
	    required?: boolean;
	}
	export default class FormField extends React.Component<FormFieldProps, {}> {
	    static childContextTypes: {
	        formFieldHasError: any;
	    };
	    private uniqueId;
	    getChildContext(): {
	        formFieldHasError: boolean;
	    };
	    componentWillMount(): void;
	    renderLabel(): JSX.Element;
	    renderError(): JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/RadioButtons' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ValuePropType, OptionsPropType } from '@volst/ui-components/src/PropTypes';
	export interface RadioButtonsProps {
	    onChange?: (name: string, value: ValuePropType) => void;
	    name?: string;
	    disabled?: boolean;
	    options: OptionsPropType;
	    value?: ValuePropType;
	    vertical?: boolean;
	}
	export default class RadioButtons extends React.PureComponent<RadioButtonsProps, {
	    hasFocus: boolean;
	}> {
	    state: {
	        hasFocus: boolean;
	    };
	    handleChange: (value: any) => void;
	    renderItem: (item: any) => JSX.Element;
	    handleFocus: () => void;
	    handleBlur: () => void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/RadioList' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ValuePropType, OptionsPropType } from '@volst/ui-components/src/PropTypes';
	export interface RadioListProps {
	    onChange?: (name: string, value: string) => void;
	    name?: string;
	    disabled?: boolean;
	    options: OptionsPropType;
	    value: ValuePropType;
	}
	export default class RadioList extends React.PureComponent<RadioListProps, {}> {
	    renderItem: (item: any) => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/Checkbox' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface CheckboxProps {
	    onChange: (name: string, value: boolean) => void;
	    name?: string;
	    label?: string;
	    value?: boolean;
	    disabled?: boolean;
	}
	export default class Checkbox extends React.PureComponent<CheckboxProps, {}> {
	    handleChange: (e: any) => void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/TextInput' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface StyledInputProps extends ThemeProps, React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	    hasError?: boolean;
	    hasDropdown?: boolean;
	    _ref?: (c: any) => void;
	}
	export const StyledInput: StyledComponentClass<StyledInputProps, ThemeInterface, Pick<StyledInputProps, "form" | "style" | "title" | "pattern" | "children" | "type" | "onClick" | "disabled" | "tabIndex" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "list" | "step" | "ref" | "key" | "autoComplete" | "name" | "required" | "value" | "accept" | "alt" | "autoFocus" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "max" | "maxLength" | "min" | "minLength" | "multiple" | "placeholder" | "readOnly" | "size" | "src" | "width" | "hasError" | "hasDropdown" | "_ref"> & {
	    theme?: ThemeInterface;
	}>;
	export interface TextInputProps {
	    type?: 'text' | 'search' | 'password' | 'email' | 'tel';
	    onChange?: (name: string, value: string) => void;
	    onBlur?: (name: string, value: string) => void;
	    onFocus?: () => void;
	    placeholder?: string;
	    name?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    id?: string;
	    autoFocus?: boolean;
	    value?: string | number;
	    className?: string;
	    autoComplete?: boolean;
	    spellCheck?: boolean;
	    maxLength?: number;
	}
	export default class TextInput extends React.PureComponent<TextInputProps, {}> {
	    static defaultProps: {
	        type: string;
	        placeholder: string;
	        value: string;
	    };
	    private inputRef;
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    onChange: (e: any) => void;
	    onBlur: (e: any) => void;
	    setInputRef: (c: any) => void;
	    focus(): void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/NumberInput' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface NumberInputProps {
	    onChange?: (name: string, value: string) => void;
	    onBlur?: (name: string, value: string) => void;
	    onFocus?: (e: any) => void;
	    placeholder?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    maxLength?: string;
	    name?: string;
	    id?: string;
	    value?: string | number;
	    autoFocus?: boolean;
	    className?: string;
	    prefix?: string;
	    suffix?: string;
	    includeThousandsSeparator?: boolean;
	    thousandsSeparatorSymbol?: string;
	    allowDecimal?: boolean;
	    allowNegative?: boolean;
	    decimalSymbol?: string;
	    decimalLimit?: number;
	}
	export default class NumberInput extends React.PureComponent<NumberInputProps, {}> {
	    static defaultProps: {
	        placeholder: string;
	        value: string;
	        prefix: string;
	        includeThousandsSeparator: boolean;
	    };
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    parseValue: (e: any) => any;
	    onChange: (e: any) => void;
	    onBlur: (e: any) => void;
	    getMask(props: any): any;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/TimeInput' {
	/// <reference types="react" />
	import * as React from 'react';
	import moment from 'moment';
	export interface TimeInputProps {
	    onChange: (name: string, value: moment.Moment) => void;
	    placeholder?: string;
	    name?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    id?: string;
	    autoFocus?: boolean;
	    value?: moment.Moment;
	}
	export default class TimeInput extends React.PureComponent<TimeInputProps, {}> {
	    static defaultProps: {
	        placeholder: string;
	        value: string;
	    };
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    onChange: (e: any) => void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/TextArea' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface StyledTextareaProps extends ThemeProps, React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	    hasError?: boolean;
	}
	export const StyledTextarea: StyledComponentClass<StyledTextareaProps, ThemeInterface, Pick<StyledTextareaProps, "form" | "style" | "title" | "children" | "onClick" | "disabled" | "tabIndex" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "ref" | "key" | "autoComplete" | "name" | "required" | "value" | "autoFocus" | "maxLength" | "minLength" | "placeholder" | "readOnly" | "hasError" | "cols" | "dirName" | "rows" | "wrap"> & {
	    theme?: ThemeInterface;
	}>;
	export interface TextAreaProps {
	    onChange?: (name: string, value: string) => void;
	    onBlur?: () => void;
	    onFocus?: () => void;
	    placeholder?: string;
	    name?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    id?: string;
	    autoFocus?: boolean;
	    value?: string | number;
	    className?: string;
	    spellCheck?: boolean;
	    maxLength?: number;
	    autoSize?: boolean;
	    rows?: number;
	    maxRows?: number;
	}
	export default class TextArea extends React.PureComponent<TextAreaProps, {}> {
	    static defaultProps: {
	        placeholder: string;
	        value: string;
	        rows: number;
	    };
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    onChange: (e: any) => void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/general/Icon' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface IconProps {
	    /**
	     * Allows you to redefine what the coordinates without units mean inside an svg element.
	     * For example, if the SVG element is 500 (width) by 200 (height),
	     * and you pass viewBox="0 0 50 20",
	     * this means that the coordinates inside the svg will go from the top left corner (0,0)
	     * to bottom right (50,20) and each unit will be worth 10px.
	     */
	    viewBox: string;
	} const Icon: React.SFC<IconProps>;
	export default Icon;

}
declare module '@volst/ui-components/src/general/icon/IconArrowDropDown' {
	 let IconArrowDropDown: (props: any) => JSX.Element;
	export default IconArrowDropDown;

}
declare module '@volst/ui-components/src/general/icon/IconArrowDropUp' {
	 let IconArrowDropUp: (props: any) => JSX.Element;
	export default IconArrowDropUp;

}
declare module '@volst/ui-components/src/general/icon/IconClose' {
	 let IconClose: (props: any) => JSX.Element;
	export default IconClose;

}
declare module '@volst/ui-components/src/dataEntry/FancySelect' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	import { ValuePropType, OptionsPropType } from '@volst/ui-components/src/PropTypes';
	export const DropdownContainer: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const Dropdown: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const DropdownToggle: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export interface DropdownItemProps extends ThemeProps {
	    highlighted: boolean;
	    selected: boolean;
	}
	export const DropdownItem: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & DropdownItemProps, ThemeInterface, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & DropdownItemProps>;
	export function fuzzySearch(options: any, inputValue: any): any;
	export interface FancySelectProps {
	    onChange?: (name: string, value: ValuePropType) => void;
	    name?: string;
	    value?: ValuePropType;
	    options: OptionsPropType;
	    disabled?: boolean;
	    hasError?: boolean;
	    placeholder?: string;
	}
	export default class FancySelect extends React.PureComponent<FancySelectProps, {}> {
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    handleChange: (option: any) => void;
	    handleClear: () => void;
	    renderDropdown: ({ isOpen, getItemProps, inputValue, highlightedIndex, selectedItem, options, }: {
	        isOpen: any;
	        getItemProps: any;
	        inputValue: any;
	        highlightedIndex: any;
	        selectedItem: any;
	        options: any;
	    }) => JSX.Element;
	    itemToString(item: any): any;
	    renderDownshift: ({ getRootProps, getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem, openMenu, toggleMenu, clearItems, ...rest }: {
	        [x: string]: any;
	        getRootProps: any;
	        getInputProps: any;
	        getItemProps: any;
	        isOpen: any;
	        inputValue: any;
	        highlightedIndex: any;
	        selectedItem: any;
	        openMenu: any;
	        toggleMenu: any;
	        clearItems: any;
	    }) => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/TypeAhead' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ValuePropType, OptionsPropType } from '@volst/ui-components/src/PropTypes';
	export interface TypeAheadProps {
	    onChange?: (name: string, value: string) => void;
	    onSelect: (value: ValuePropType) => void;
	    name?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    value?: ValuePropType;
	    options: OptionsPropType;
	}
	export default class TypeAhead extends React.PureComponent<TypeAheadProps> {
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    handleSelect: (option: any) => void;
	    handleStateChange: (changes: any) => void;
	    renderDropdown: ({ getItemProps, inputValue, highlightedIndex, selectedItem, }: {
	        getItemProps: any;
	        inputValue: any;
	        highlightedIndex: any;
	        selectedItem: any;
	    }) => JSX.Element;
	    itemToString: (item: any) => any;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/SelectInput' {
	/// <reference types="react" />
	import * as React from 'react';
	import { OptionsPropType } from '@volst/ui-components/src/PropTypes';
	export interface SelectInputProps {
	    onChange: (name: string, value: string) => void;
	    name?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    id?: string;
	    placeholder?: string;
	    skipPlaceholder?: boolean;
	    value?: string | number;
	    options: OptionsPropType;
	    autoWidth?: boolean;
	}
	export default class SelectInput extends React.PureComponent<SelectInputProps, {}> {
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    onChange: (e: any) => void;
	    renderOption: (option: any) => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/MultiSelect' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ValuePropType, OptionsPropType } from '@volst/ui-components/src/PropTypes';
	export interface MultiSelectProps {
	    onChange: (name: string, value: ValuePropType[]) => void;
	    name?: string;
	    value: ValuePropType[];
	    options: OptionsPropType;
	    disabled?: boolean;
	    placeholder?: string;
	    hasError?: boolean;
	}
	export interface MultiSelectState {
	    inputValue: string;
	    focused: boolean;
	}
	export default class MultiSelect extends React.PureComponent<MultiSelectProps, MultiSelectState> {
	    static contextTypes: {
	        formFieldHasError: any;
	    };
	    state: {
	        inputValue: string;
	        focused: boolean;
	    };
	    private _input;
	    private _inputWrapper;
	    handleItemAdd: (option: any) => void;
	    handleItemRemove: (option: any) => void;
	    handleInputChange: (event: any) => void;
	    handleWrapperClick: (e: any) => void;
	    focusOnInput(): void;
	    popValue(): void;
	    handleInputKeyDown: (e: any) => void;
	    renderDropdown: ({ getItemProps, inputValue, highlightedIndex, selectedItem, options, }: {
	        getItemProps: any;
	        inputValue: any;
	        highlightedIndex: any;
	        selectedItem: any;
	        options: any;
	    }) => JSX.Element;
	    itemToString(item: any): any;
	    renderDownshift: ({ getRootProps, getInputProps, getItemProps, isOpen, inputValue, highlightedIndex, selectedItem, openMenu, toggleMenu, clearItems, ...rest }: {
	        [x: string]: any;
	        getRootProps: any;
	        getInputProps: any;
	        getItemProps: any;
	        isOpen: any;
	        inputValue: any;
	        highlightedIndex: any;
	        selectedItem: any;
	        openMenu: any;
	        toggleMenu: any;
	        clearItems: any;
	    }) => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataEntry/MultiPick/styles' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	import { FullButtonProps } from '@volst/ui-components/src/general/Button';
	export const Container: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const Dropdown: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const MultiPickButton: StyledComponentClass<FullButtonProps & {
	    disabled: any;
	}, ThemeInterface, Pick<FullButtonProps, "link" | "small" | "type" | "onClick" | "ghost" | "fullWidth" | "disabled" | "tone" | "loading" | "tabIndex"> & {
	    theme?: ThemeInterface;
	}>;
	export interface DropdownItemProps extends ThemeProps {
	    checked: boolean;
	}
	export const DropdownItem: StyledComponentClass<React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & DropdownItemProps, ThemeInterface, React.ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> & DropdownItemProps>;
	export const DropdownActionBar: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const DropdownList: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const DropdownSearch: StyledComponentClass<{}, ThemeInterface, any>;

}
declare module '@volst/ui-components/src/dataEntry/MultiPick/Dropdown' {
	/// <reference types="react" />
	import * as React from 'react';
	import { OptionsPropType, ValuePropType } from 'src/PropTypes';
	export interface MultipickDropdownProps {
	    options: OptionsPropType;
	    value: ValuePropType[];
	    filteredOptions: OptionsPropType;
	    onChange: (value: ValuePropType[]) => void;
	    searchAppearsAfterCount?: number;
	    searchValue: string;
	    onSearchChange: (value: string) => void;
	    searchPlaceholder?: string;
	    selectAllText?: string;
	    selectNoneText?: string;
	}
	export default class MultipickDropdown extends React.Component<MultipickDropdownProps, {}> {
	    static defaultProps: {
	        searchValue: string;
	    };
	    handleItemChange: (value: any, checked: any) => void;
	    handleSearchChange: (name: any, value: any) => void;
	    selectAll: () => void;
	    selectNone: () => void;
	    renderItem: (item: any) => JSX.Element;
	    renderSearch: () => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardArrowDown' {
	 let IconKeyboardArrowDown: (props: any) => JSX.Element;
	export default IconKeyboardArrowDown;

}
declare module '@volst/ui-components/src/dataEntry/MultiPick/index' {
	 const _default: any;
	export default _default;

}
declare module '@volst/ui-components/src/dataEntry/DatePickerWrapper' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const DatePickerWrapper: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export default DatePickerWrapper;

}
declare module '@volst/ui-components/src/dataEntry/SingleDatePicker' {
	/// <reference types="react" />
	import * as React from 'react';
	import moment from 'moment';
	import { ThemeInterface } from 'src/config';
	export interface SingleDatePickerProps {
	    onChange?: (name: string, value: moment.Moment) => void;
	    value?: moment.Moment;
	    name?: string;
	    placeholder?: string;
	    disabled?: boolean;
	    hasError?: boolean;
	    showWeekNumbers?: boolean;
	    disabledDays?: any;
	    theme: ThemeInterface;
	} const _default: React.ComponentClass<Pick<SingleDatePickerProps, "disabled" | "onChange" | "name" | "value" | "placeholder" | "hasError" | "showWeekNumbers" | "disabledDays"> & {
	    theme?: ThemeInterface;
	}>;
	export default _default;

}
declare module '@volst/ui-components/src/general/icon/IconClear' {
	 let IconClear: (props: any) => JSX.Element;
	export default IconClear;

}
declare module '@volst/ui-components/src/general/icon/IconNavigateNext' {
	 let IconNavigateNext: (props: any) => JSX.Element;
	export default IconNavigateNext;

}
declare module '@volst/ui-components/src/dataEntry/DateRangePicker' {
	/// <reference types="react" />
	import * as React from 'react';
	import moment from 'moment';
	import { ThemeInterface } from '@volst/ui-components/src/config';
	export interface DateRangePickerProps {
	    name: string;
	    onChange: (name: string, value: {
	        startDate?: moment.Moment;
	        endDate?: moment.Moment;
	    }) => void;
	    startDate?: moment.Moment;
	    endDate?: moment.Moment;
	    disabled?: boolean;
	    showWeekNumbers?: boolean;
	    disabledDays?: any;
	    hasError?: boolean;
	    placeholder?: string;
	    theme: ThemeInterface;
	} const _default: React.ComponentClass<Pick<DateRangePickerProps, "disabled" | "onChange" | "name" | "placeholder" | "hasError" | "showWeekNumbers" | "disabledDays" | "startDate" | "endDate"> & {
	    theme?: ThemeInterface;
	}>;
	export default _default;

}
declare module '@volst/ui-components/src/dataDisplay/Tooltip' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface TooltipProps {
	    message: string;
	    direction: 's' | 'n' | 'se' | 'sw';
	}
	export default class Tooltip extends React.Component<TooltipProps, {}> {
	    static defaultProps: {
	        direction: string;
	    };
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardArrowUp' {
	 let IconKeyboardArrowUp: (props: any) => JSX.Element;
	export default IconKeyboardArrowUp;

}
declare module '@volst/ui-components/src/dataDisplay/Accordion' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface AccordionProps {
	    title: string | React.ReactNode;
	    opened: boolean;
	    onChange: () => void;
	    action?: React.ReactNode;
	    contentBackground?: string;
	}
	export default class Accordion extends React.Component<AccordionProps, {}> {
	    handleClick: () => void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/dataDisplay/Table' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export const Table: StyledComponentClass<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, ThemeInterface, React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>>;
	export const TableHead: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
	export const TableBody: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>>;
	export interface TableRowProps extends ThemeProps {
	    highlight?: boolean;
	}
	export const TableRow: StyledComponentClass<React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> & TableRowProps, ThemeInterface, React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> & TableRowProps>;
	export interface TableHeaderProps {
	    alignRight?: boolean;
	}
	export const TableHeader: StyledComponentClass<React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> & TableHeaderProps, ThemeInterface, React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> & TableHeaderProps>;
	export interface TableDataProps extends ThemeProps {
	    alignRight?: boolean;
	    stretch?: boolean;
	    noWrap?: boolean;
	}
	export const TableData: StyledComponentClass<React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> & TableDataProps, ThemeInterface, React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> & TableDataProps>;

}
declare module '@volst/ui-components/src/layout/layout/AppContainer' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const _default: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export default _default;

}
declare module '@volst/ui-components/src/layout/layout/Body' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const _default: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export default _default;

}
declare module '@volst/ui-components/src/layout/layout/Content' {
	/// <reference types="react" />
	import * as React from 'react';
	export type AvailableTones = 'primary';
	export interface ContentProps {
	    center?: boolean;
	    blur?: boolean;
	    tone?: AvailableTones;
	} const Content: React.SFC<ContentProps>;
	export default Content;

}
declare module '@volst/ui-components/src/layout/layout/ContentContainer' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const _default: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export default _default;

}
declare module '@volst/ui-components/src/layout/layout/Sidebar' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface SidebarProps {
	    medium?: boolean;
	} const Sidebar: React.SFC<SidebarProps>;
	export default Sidebar;

}
declare module '@volst/ui-components/src/layout/layout/Toolbar' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const _default: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
	export default _default;

}
declare module '@volst/ui-components/src/layout/Grid' {
	export const Grid: any;
	export const Col: any;
	export const Row: any;

}
declare module '@volst/ui-components/src/layout/ActionBar' {
	/// <reference types="react" />
	import * as React from 'react'; const ActionBar: React.SFC;
	export default ActionBar;

}
declare module '@volst/ui-components/src/feedback/notification/Item' {
	/// <reference types="react" />
	import * as React from 'react';
	export type TYPE = 'info' | 'error';
	export interface NotificationItemProps {
	    key: string;
	    message: string;
	    onDismiss: () => void;
	    onClick?: () => void;
	    dismissAfter?: boolean | number;
	    dismissible?: boolean;
	    type?: TYPE;
	}
	export default class NotificationItem extends React.Component<NotificationItemProps, {
	    active: boolean;
	}> {
	    static defaultProps: {
	        dismissAfter: number;
	        type: string;
	    };
	    state: {
	        active: boolean;
	    };
	    private animateInTimeout;
	    private expireTimeout;
	    private transitionTimeout;
	    componentDidMount(): void;
	    componentWillUnmount(): void;
	    onDismiss: () => void;
	    animateIn(): void;
	    forceDismiss: (e: any) => void;
	    expire(): void;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/feedback/notification/Stack' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface Notification {
	    key: string;
	    message: string;
	    onClick?: (notification: Notification, dismiss: () => void) => void;
	    dismissAfter?: boolean | number;
	    dismissible?: boolean;
	    type?: string;
	}
	export interface NotificationStackProps {
	    notifications: Notification[];
	    onDismiss: (notification: Notification) => void;
	}
	export default class NotificationStack extends React.Component<NotificationStackProps, {}> {
	    renderNotification: (notification: any) => JSX.Element;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/feedback/modal/globalStyles' {
	 const _default: (theme: any) => void;
	export default _default;

}
declare module '@volst/ui-components/src/feedback/modal/Modal' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeInterface } from 'src/config';
	export interface ModalProps {
	    visible: boolean;
	    onClose: () => void;
	    afterClose?: () => void;
	    width?: string;
	    title?: string | React.ReactNode;
	    footer?: React.ReactNode;
	    theme: ThemeInterface;
	} const _default: React.ComponentClass<Pick<ModalProps, "footer" | "title" | "width" | "visible" | "onClose" | "afterClose"> & {
	    theme?: ThemeInterface;
	}>;
	export default _default;

}
declare module '@volst/ui-components/src/feedback/modal/confirm' {
	export default function confirm({theme, ...config}: {
	    [x: string]: any;
	    theme?: {};
	}): {
	    destroy: (...args: any[]) => void;
	};

}
declare module '@volst/ui-components/src/feedback/Badge' {
	/// <reference types="react" />
	import * as React from 'react';
	export interface BadgeProps {
	    count?: number;
	    className?: string;
	}
	export default class Badge extends React.Component<BadgeProps, {}> {
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/general/icon/IconNavigateBefore' {
	 let IconNavigateBefore: (props: any) => JSX.Element;
	export default IconNavigateBefore;

}
declare module '@volst/ui-components/src/navigation/PaginationControls' {
	/// <reference types="react" />
	import * as React from 'react';
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
	export default class PaginationControls extends React.Component<PaginationControlsProps, {}> {
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/navigation/topMenu/TopMenu' {
	/// <reference types="react" />
	import * as React from 'react';
	export default class TopMenu extends React.Component {
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/navigation/topMenu/Logo' {
	/// <reference types="react" />
	import * as React from 'react'; const Logo: React.SFC;
	export default Logo;

}
declare module '@volst/ui-components/src/navigation/topMenu/MenuRow' {
	/// <reference types="react" />
	import * as React from 'react';
	import { ThemeProps, StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface MenuRowProps extends ThemeProps {
	    inContent?: boolean;
	} const _default: StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & MenuRowProps, ThemeInterface, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & MenuRowProps>;
	export default _default;

}
declare module '@volst/ui-components/src/navigation/topMenu/NavItem' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	import { NavLinkProps } from 'react-router-dom';
	export const StyledNavLink: StyledComponentClass<NavLinkProps, ThemeInterface, Pick<NavLinkProps, "style" | "title" | "children" | "type" | "onClick" | "tabIndex" | "href" | "to" | "replace" | "download" | "hrefLang" | "media" | "rel" | "target" | "as" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "location" | "activeClassName" | "activeStyle" | "exact" | "strict" | "isActive"> & {
	    theme?: ThemeInterface;
	}>;
	export interface NavItemProps {
	    title: string | React.ReactNode;
	    to?: string;
	    onClick?: () => void;
	    activePath?: string;
	}
	export default class NavItem extends React.Component<NavItemProps, {}> {
	    checkActive: (match: any, location: any) => any;
	    render(): JSX.Element;
	}

}
declare module '@volst/ui-components/src/navigation/topMenu/NavItemExternal' {
	 const _default: any;
	export default _default;

}
declare module '@volst/ui-components/src/navigation/topMenu/NavMenu' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components'; const _default: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>;
	export default _default;

}
declare module '@volst/ui-components/src/navigation/Dropdown' {
	/// <reference types="react" />
	import * as React from 'react';
	import { StyledComponentClass, ThemeInterface } from '@volst/ui-components/src/styled-components';
	export interface DropdownProps {
	    overlay: React.ReactElement<any>;
	    opened?: boolean;
	    onChange?: (value: boolean) => void;
	}
	export const Dropdown: React.SFC<DropdownProps>;
	export const DropdownOverlay: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const DropdownMenu: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
	export const DropdownItem: StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeInterface, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;

}
declare module '@volst/ui-components/src/index' {
	export { default as VolstTheme } from '@volst/ui-components/src/VolstTheme';
	export { Button, Link, ExternalLink } from '@volst/ui-components/src/general/Button';
	export { default as Heading } from '@volst/ui-components/src/general/typography/Heading';
	export { default as Subheading } from '@volst/ui-components/src/general/typography/Subheading';
	export { default as SuperText } from '@volst/ui-components/src/general/typography/SuperText';
	export { Text, InlineText } from '@volst/ui-components/src/general/typography/Text';
	export { default as Center } from '@volst/ui-components/src/general/typography/Center';
	export { default as Code } from '@volst/ui-components/src/general/typography/Code';
	export { default as Form } from '@volst/ui-components/src/dataEntry/Form';
	export { default as FormField } from '@volst/ui-components/src/dataEntry/FormField';
	export { default as LabelText } from '@volst/ui-components/src/dataEntry/LabelText';
	export { default as RadioButtons } from '@volst/ui-components/src/dataEntry/RadioButtons';
	export { default as RadioList } from '@volst/ui-components/src/dataEntry/RadioList';
	export { default as Checkbox } from '@volst/ui-components/src/dataEntry/Checkbox';
	export { default as TextInput } from '@volst/ui-components/src/dataEntry/TextInput';
	export { default as NumberInput } from '@volst/ui-components/src/dataEntry/NumberInput';
	export { default as TimeInput } from '@volst/ui-components/src/dataEntry/TimeInput';
	export { default as TextArea } from '@volst/ui-components/src/dataEntry/TextArea';
	export { default as TypeAhead } from '@volst/ui-components/src/dataEntry/TypeAhead';
	export { default as SelectInput } from '@volst/ui-components/src/dataEntry/SelectInput';
	export { default as FancySelect } from '@volst/ui-components/src/dataEntry/FancySelect';
	export { default as MultiSelect } from '@volst/ui-components/src/dataEntry/MultiSelect';
	export { default as MultiPick } from '@volst/ui-components/src/dataEntry/MultiPick/index';
	export { default as SingleDatePicker } from '@volst/ui-components/src/dataEntry/SingleDatePicker';
	export { default as DateRangePicker } from '@volst/ui-components/src/dataEntry/DateRangePicker';
	export { default as Tooltip } from '@volst/ui-components/src/dataDisplay/Tooltip';
	export { default as Accordion } from '@volst/ui-components/src/dataDisplay/Accordion';
	export { Table, TableHead, TableBody, TableRow, TableHeader, TableData } from '@volst/ui-components/src/dataDisplay/Table';
	export { default as AppContainer } from '@volst/ui-components/src/layout/layout/AppContainer';
	export { default as Body } from '@volst/ui-components/src/layout/layout/Body';
	export { default as Content } from '@volst/ui-components/src/layout/layout/Content';
	export { default as ContentContainer } from '@volst/ui-components/src/layout/layout/ContentContainer';
	export { default as Sidebar } from '@volst/ui-components/src/layout/layout/Sidebar';
	export { default as Toolbar } from '@volst/ui-components/src/layout/layout/Toolbar';
	export { Row, Col, Grid } from '@volst/ui-components/src/layout/Grid';
	export { default as ActionBar } from '@volst/ui-components/src/layout/ActionBar';
	export { default as Loader } from '@volst/ui-components/src/feedback/Loader';
	export { default as NotificationStack } from '@volst/ui-components/src/feedback/notification/Stack';
	export { default as Modal } from '@volst/ui-components/src/feedback/modal/Modal';
	export { default as confirm } from '@volst/ui-components/src/feedback/modal/confirm';
	export { default as Badge } from '@volst/ui-components/src/feedback/Badge';
	export { default as PaginationControls } from '@volst/ui-components/src/navigation/PaginationControls';
	export { default as TopMenu } from '@volst/ui-components/src/navigation/topMenu/TopMenu';
	export { default as Logo } from '@volst/ui-components/src/navigation/topMenu/Logo';
	export { default as MenuRow } from '@volst/ui-components/src/navigation/topMenu/MenuRow';
	export { default as NavItem } from '@volst/ui-components/src/navigation/topMenu/NavItem';
	export { default as NavItemExternal } from '@volst/ui-components/src/navigation/topMenu/NavItemExternal';
	export { default as NavMenu } from '@volst/ui-components/src/navigation/topMenu/NavMenu';
	export { Dropdown, DropdownOverlay, DropdownMenu, DropdownItem } from '@volst/ui-components/src/navigation/Dropdown';

}
declare module '@volst/ui-components/src/general/icon/IconAccessAlarm' {
	 let IconAccessAlarm: (props: any) => JSX.Element;
	export default IconAccessAlarm;

}
declare module '@volst/ui-components/src/general/icon/IconAccessAlarms' {
	 let IconAccessAlarms: (props: any) => JSX.Element;
	export default IconAccessAlarms;

}
declare module '@volst/ui-components/src/general/icon/IconAccessibility' {
	 let IconAccessibility: (props: any) => JSX.Element;
	export default IconAccessibility;

}
declare module '@volst/ui-components/src/general/icon/IconAccessible' {
	 let IconAccessible: (props: any) => JSX.Element;
	export default IconAccessible;

}
declare module '@volst/ui-components/src/general/icon/IconAccessTime' {
	 let IconAccessTime: (props: any) => JSX.Element;
	export default IconAccessTime;

}
declare module '@volst/ui-components/src/general/icon/IconAccountBalance' {
	 let IconAccountBalance: (props: any) => JSX.Element;
	export default IconAccountBalance;

}
declare module '@volst/ui-components/src/general/icon/IconAccountBalanceWallet' {
	 let IconAccountBalanceWallet: (props: any) => JSX.Element;
	export default IconAccountBalanceWallet;

}
declare module '@volst/ui-components/src/general/icon/IconAccountBox' {
	 let IconAccountBox: (props: any) => JSX.Element;
	export default IconAccountBox;

}
declare module '@volst/ui-components/src/general/icon/IconAccountCircle' {
	 let IconAccountCircle: (props: any) => JSX.Element;
	export default IconAccountCircle;

}
declare module '@volst/ui-components/src/general/icon/IconAcUnit' {
	 let IconAcUnit: (props: any) => JSX.Element;
	export default IconAcUnit;

}
declare module '@volst/ui-components/src/general/icon/IconAdb' {
	 let IconAdb: (props: any) => JSX.Element;
	export default IconAdb;

}
declare module '@volst/ui-components/src/general/icon/IconAdd' {
	 let IconAdd: (props: any) => JSX.Element;
	export default IconAdd;

}
declare module '@volst/ui-components/src/general/icon/IconAddAlarm' {
	 let IconAddAlarm: (props: any) => JSX.Element;
	export default IconAddAlarm;

}
declare module '@volst/ui-components/src/general/icon/IconAddAlert' {
	 let IconAddAlert: (props: any) => JSX.Element;
	export default IconAddAlert;

}
declare module '@volst/ui-components/src/general/icon/IconAddAPhoto' {
	 let IconAddAPhoto: (props: any) => JSX.Element;
	export default IconAddAPhoto;

}
declare module '@volst/ui-components/src/general/icon/IconAddBox' {
	 let IconAddBox: (props: any) => JSX.Element;
	export default IconAddBox;

}
declare module '@volst/ui-components/src/general/icon/IconAddCircle' {
	 let IconAddCircle: (props: any) => JSX.Element;
	export default IconAddCircle;

}
declare module '@volst/ui-components/src/general/icon/IconAddCircleOutline' {
	 let IconAddCircleOutline: (props: any) => JSX.Element;
	export default IconAddCircleOutline;

}
declare module '@volst/ui-components/src/general/icon/IconAddLocation' {
	 let IconAddLocation: (props: any) => JSX.Element;
	export default IconAddLocation;

}
declare module '@volst/ui-components/src/general/icon/IconAddShoppingCart' {
	 let IconAddShoppingCart: (props: any) => JSX.Element;
	export default IconAddShoppingCart;

}
declare module '@volst/ui-components/src/general/icon/IconAddToPhotos' {
	 let IconAddToPhotos: (props: any) => JSX.Element;
	export default IconAddToPhotos;

}
declare module '@volst/ui-components/src/general/icon/IconAddToQueue' {
	 let IconAddToQueue: (props: any) => JSX.Element;
	export default IconAddToQueue;

}
declare module '@volst/ui-components/src/general/icon/IconAdjust' {
	 let IconAdjust: (props: any) => JSX.Element;
	export default IconAdjust;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatFlat' {
	 let IconAirlineSeatFlat: (props: any) => JSX.Element;
	export default IconAirlineSeatFlat;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatFlatAngled' {
	 let IconAirlineSeatFlatAngled: (props: any) => JSX.Element;
	export default IconAirlineSeatFlatAngled;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatIndividualSuite' {
	 let IconAirlineSeatIndividualSuite: (props: any) => JSX.Element;
	export default IconAirlineSeatIndividualSuite;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatLegroomExtra' {
	 let IconAirlineSeatLegroomExtra: (props: any) => JSX.Element;
	export default IconAirlineSeatLegroomExtra;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatLegroomNormal' {
	 let IconAirlineSeatLegroomNormal: (props: any) => JSX.Element;
	export default IconAirlineSeatLegroomNormal;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatLegroomReduced' {
	 let IconAirlineSeatLegroomReduced: (props: any) => JSX.Element;
	export default IconAirlineSeatLegroomReduced;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatReclineExtra' {
	 let IconAirlineSeatReclineExtra: (props: any) => JSX.Element;
	export default IconAirlineSeatReclineExtra;

}
declare module '@volst/ui-components/src/general/icon/IconAirlineSeatReclineNormal' {
	 let IconAirlineSeatReclineNormal: (props: any) => JSX.Element;
	export default IconAirlineSeatReclineNormal;

}
declare module '@volst/ui-components/src/general/icon/IconAirplanemodeActive' {
	 let IconAirplanemodeActive: (props: any) => JSX.Element;
	export default IconAirplanemodeActive;

}
declare module '@volst/ui-components/src/general/icon/IconAirplanemodeInactive' {
	 let IconAirplanemodeInactive: (props: any) => JSX.Element;
	export default IconAirplanemodeInactive;

}
declare module '@volst/ui-components/src/general/icon/IconAirplay' {
	 let IconAirplay: (props: any) => JSX.Element;
	export default IconAirplay;

}
declare module '@volst/ui-components/src/general/icon/IconAirportShuttle' {
	 let IconAirportShuttle: (props: any) => JSX.Element;
	export default IconAirportShuttle;

}
declare module '@volst/ui-components/src/general/icon/IconAlarm' {
	 let IconAlarm: (props: any) => JSX.Element;
	export default IconAlarm;

}
declare module '@volst/ui-components/src/general/icon/IconAlarmAdd' {
	 let IconAlarmAdd: (props: any) => JSX.Element;
	export default IconAlarmAdd;

}
declare module '@volst/ui-components/src/general/icon/IconAlarmOff' {
	 let IconAlarmOff: (props: any) => JSX.Element;
	export default IconAlarmOff;

}
declare module '@volst/ui-components/src/general/icon/IconAlarmOn' {
	 let IconAlarmOn: (props: any) => JSX.Element;
	export default IconAlarmOn;

}
declare module '@volst/ui-components/src/general/icon/IconAlbum' {
	 let IconAlbum: (props: any) => JSX.Element;
	export default IconAlbum;

}
declare module '@volst/ui-components/src/general/icon/IconAllInclusive' {
	 let IconAllInclusive: (props: any) => JSX.Element;
	export default IconAllInclusive;

}
declare module '@volst/ui-components/src/general/icon/IconAllOut' {
	 let IconAllOut: (props: any) => JSX.Element;
	export default IconAllOut;

}
declare module '@volst/ui-components/src/general/icon/IconAndroid' {
	 let IconAndroid: (props: any) => JSX.Element;
	export default IconAndroid;

}
declare module '@volst/ui-components/src/general/icon/IconAnnouncement' {
	 let IconAnnouncement: (props: any) => JSX.Element;
	export default IconAnnouncement;

}
declare module '@volst/ui-components/src/general/icon/IconApps' {
	 let IconApps: (props: any) => JSX.Element;
	export default IconApps;

}
declare module '@volst/ui-components/src/general/icon/IconArchive' {
	 let IconArchive: (props: any) => JSX.Element;
	export default IconArchive;

}
declare module '@volst/ui-components/src/general/icon/IconArrowBack' {
	 let IconArrowBack: (props: any) => JSX.Element;
	export default IconArrowBack;

}
declare module '@volst/ui-components/src/general/icon/IconArrowDownward' {
	 let IconArrowDownward: (props: any) => JSX.Element;
	export default IconArrowDownward;

}
declare module '@volst/ui-components/src/general/icon/IconArrowDropDownCircle' {
	 let IconArrowDropDownCircle: (props: any) => JSX.Element;
	export default IconArrowDropDownCircle;

}
declare module '@volst/ui-components/src/general/icon/IconArrowForward' {
	 let IconArrowForward: (props: any) => JSX.Element;
	export default IconArrowForward;

}
declare module '@volst/ui-components/src/general/icon/IconArrowUpward' {
	 let IconArrowUpward: (props: any) => JSX.Element;
	export default IconArrowUpward;

}
declare module '@volst/ui-components/src/general/icon/IconArtTrack' {
	 let IconArtTrack: (props: any) => JSX.Element;
	export default IconArtTrack;

}
declare module '@volst/ui-components/src/general/icon/IconAspectRatio' {
	 let IconAspectRatio: (props: any) => JSX.Element;
	export default IconAspectRatio;

}
declare module '@volst/ui-components/src/general/icon/IconAssessment' {
	 let IconAssessment: (props: any) => JSX.Element;
	export default IconAssessment;

}
declare module '@volst/ui-components/src/general/icon/IconAssignment' {
	 let IconAssignment: (props: any) => JSX.Element;
	export default IconAssignment;

}
declare module '@volst/ui-components/src/general/icon/IconAssignmentInd' {
	 let IconAssignmentInd: (props: any) => JSX.Element;
	export default IconAssignmentInd;

}
declare module '@volst/ui-components/src/general/icon/IconAssignmentLate' {
	 let IconAssignmentLate: (props: any) => JSX.Element;
	export default IconAssignmentLate;

}
declare module '@volst/ui-components/src/general/icon/IconAssignmentReturn' {
	 let IconAssignmentReturn: (props: any) => JSX.Element;
	export default IconAssignmentReturn;

}
declare module '@volst/ui-components/src/general/icon/IconAssignmentReturned' {
	 let IconAssignmentReturned: (props: any) => JSX.Element;
	export default IconAssignmentReturned;

}
declare module '@volst/ui-components/src/general/icon/IconAssignmentTurnedIn' {
	 let IconAssignmentTurnedIn: (props: any) => JSX.Element;
	export default IconAssignmentTurnedIn;

}
declare module '@volst/ui-components/src/general/icon/IconAssistant' {
	 let IconAssistant: (props: any) => JSX.Element;
	export default IconAssistant;

}
declare module '@volst/ui-components/src/general/icon/IconAssistantPhoto' {
	 let IconAssistantPhoto: (props: any) => JSX.Element;
	export default IconAssistantPhoto;

}
declare module '@volst/ui-components/src/general/icon/IconAttachFile' {
	 let IconAttachFile: (props: any) => JSX.Element;
	export default IconAttachFile;

}
declare module '@volst/ui-components/src/general/icon/IconAttachment' {
	 let IconAttachment: (props: any) => JSX.Element;
	export default IconAttachment;

}
declare module '@volst/ui-components/src/general/icon/IconAttachMoney' {
	 let IconAttachMoney: (props: any) => JSX.Element;
	export default IconAttachMoney;

}
declare module '@volst/ui-components/src/general/icon/IconAudiotrack' {
	 let IconAudiotrack: (props: any) => JSX.Element;
	export default IconAudiotrack;

}
declare module '@volst/ui-components/src/general/icon/IconAutorenew' {
	 let IconAutorenew: (props: any) => JSX.Element;
	export default IconAutorenew;

}
declare module '@volst/ui-components/src/general/icon/IconAvTimer' {
	 let IconAvTimer: (props: any) => JSX.Element;
	export default IconAvTimer;

}
declare module '@volst/ui-components/src/general/icon/IconBackspace' {
	 let IconBackspace: (props: any) => JSX.Element;
	export default IconBackspace;

}
declare module '@volst/ui-components/src/general/icon/IconBackup' {
	 let IconBackup: (props: any) => JSX.Element;
	export default IconBackup;

}
declare module '@volst/ui-components/src/general/icon/IconBattery20' {
	 let IconBattery20: (props: any) => JSX.Element;
	export default IconBattery20;

}
declare module '@volst/ui-components/src/general/icon/IconBattery30' {
	 let IconBattery30: (props: any) => JSX.Element;
	export default IconBattery30;

}
declare module '@volst/ui-components/src/general/icon/IconBattery50' {
	 let IconBattery50: (props: any) => JSX.Element;
	export default IconBattery50;

}
declare module '@volst/ui-components/src/general/icon/IconBattery60' {
	 let IconBattery60: (props: any) => JSX.Element;
	export default IconBattery60;

}
declare module '@volst/ui-components/src/general/icon/IconBattery80' {
	 let IconBattery80: (props: any) => JSX.Element;
	export default IconBattery80;

}
declare module '@volst/ui-components/src/general/icon/IconBattery90' {
	 let IconBattery90: (props: any) => JSX.Element;
	export default IconBattery90;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryAlert' {
	 let IconBatteryAlert: (props: any) => JSX.Element;
	export default IconBatteryAlert;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryCharging20' {
	 let IconBatteryCharging20: (props: any) => JSX.Element;
	export default IconBatteryCharging20;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryCharging30' {
	 let IconBatteryCharging30: (props: any) => JSX.Element;
	export default IconBatteryCharging30;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryCharging50' {
	 let IconBatteryCharging50: (props: any) => JSX.Element;
	export default IconBatteryCharging50;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryCharging60' {
	 let IconBatteryCharging60: (props: any) => JSX.Element;
	export default IconBatteryCharging60;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryCharging80' {
	 let IconBatteryCharging80: (props: any) => JSX.Element;
	export default IconBatteryCharging80;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryCharging90' {
	 let IconBatteryCharging90: (props: any) => JSX.Element;
	export default IconBatteryCharging90;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryChargingFull' {
	 let IconBatteryChargingFull: (props: any) => JSX.Element;
	export default IconBatteryChargingFull;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryFull' {
	 let IconBatteryFull: (props: any) => JSX.Element;
	export default IconBatteryFull;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryStd' {
	 let IconBatteryStd: (props: any) => JSX.Element;
	export default IconBatteryStd;

}
declare module '@volst/ui-components/src/general/icon/IconBatteryUnknown' {
	 let IconBatteryUnknown: (props: any) => JSX.Element;
	export default IconBatteryUnknown;

}
declare module '@volst/ui-components/src/general/icon/IconBeachAccess' {
	 let IconBeachAccess: (props: any) => JSX.Element;
	export default IconBeachAccess;

}
declare module '@volst/ui-components/src/general/icon/IconBeenhere' {
	 let IconBeenhere: (props: any) => JSX.Element;
	export default IconBeenhere;

}
declare module '@volst/ui-components/src/general/icon/IconBlock' {
	 let IconBlock: (props: any) => JSX.Element;
	export default IconBlock;

}
declare module '@volst/ui-components/src/general/icon/IconBluetooth' {
	 let IconBluetooth: (props: any) => JSX.Element;
	export default IconBluetooth;

}
declare module '@volst/ui-components/src/general/icon/IconBluetoothAudio' {
	 let IconBluetoothAudio: (props: any) => JSX.Element;
	export default IconBluetoothAudio;

}
declare module '@volst/ui-components/src/general/icon/IconBluetoothConnected' {
	 let IconBluetoothConnected: (props: any) => JSX.Element;
	export default IconBluetoothConnected;

}
declare module '@volst/ui-components/src/general/icon/IconBluetoothDisabled' {
	 let IconBluetoothDisabled: (props: any) => JSX.Element;
	export default IconBluetoothDisabled;

}
declare module '@volst/ui-components/src/general/icon/IconBluetoothSearching' {
	 let IconBluetoothSearching: (props: any) => JSX.Element;
	export default IconBluetoothSearching;

}
declare module '@volst/ui-components/src/general/icon/IconBlurCircular' {
	 let IconBlurCircular: (props: any) => JSX.Element;
	export default IconBlurCircular;

}
declare module '@volst/ui-components/src/general/icon/IconBlurLinear' {
	 let IconBlurLinear: (props: any) => JSX.Element;
	export default IconBlurLinear;

}
declare module '@volst/ui-components/src/general/icon/IconBlurOff' {
	 let IconBlurOff: (props: any) => JSX.Element;
	export default IconBlurOff;

}
declare module '@volst/ui-components/src/general/icon/IconBlurOn' {
	 let IconBlurOn: (props: any) => JSX.Element;
	export default IconBlurOn;

}
declare module '@volst/ui-components/src/general/icon/IconBook' {
	 let IconBook: (props: any) => JSX.Element;
	export default IconBook;

}
declare module '@volst/ui-components/src/general/icon/IconBookmark' {
	 let IconBookmark: (props: any) => JSX.Element;
	export default IconBookmark;

}
declare module '@volst/ui-components/src/general/icon/IconBookmarkBorder' {
	 let IconBookmarkBorder: (props: any) => JSX.Element;
	export default IconBookmarkBorder;

}
declare module '@volst/ui-components/src/general/icon/IconBorderAll' {
	 let IconBorderAll: (props: any) => JSX.Element;
	export default IconBorderAll;

}
declare module '@volst/ui-components/src/general/icon/IconBorderBottom' {
	 let IconBorderBottom: (props: any) => JSX.Element;
	export default IconBorderBottom;

}
declare module '@volst/ui-components/src/general/icon/IconBorderClear' {
	 let IconBorderClear: (props: any) => JSX.Element;
	export default IconBorderClear;

}
declare module '@volst/ui-components/src/general/icon/IconBorderColor' {
	 let IconBorderColor: (props: any) => JSX.Element;
	export default IconBorderColor;

}
declare module '@volst/ui-components/src/general/icon/IconBorderHorizontal' {
	 let IconBorderHorizontal: (props: any) => JSX.Element;
	export default IconBorderHorizontal;

}
declare module '@volst/ui-components/src/general/icon/IconBorderInner' {
	 let IconBorderInner: (props: any) => JSX.Element;
	export default IconBorderInner;

}
declare module '@volst/ui-components/src/general/icon/IconBorderLeft' {
	 let IconBorderLeft: (props: any) => JSX.Element;
	export default IconBorderLeft;

}
declare module '@volst/ui-components/src/general/icon/IconBorderOuter' {
	 let IconBorderOuter: (props: any) => JSX.Element;
	export default IconBorderOuter;

}
declare module '@volst/ui-components/src/general/icon/IconBorderRight' {
	 let IconBorderRight: (props: any) => JSX.Element;
	export default IconBorderRight;

}
declare module '@volst/ui-components/src/general/icon/IconBorderStyle' {
	 let IconBorderStyle: (props: any) => JSX.Element;
	export default IconBorderStyle;

}
declare module '@volst/ui-components/src/general/icon/IconBorderTop' {
	 let IconBorderTop: (props: any) => JSX.Element;
	export default IconBorderTop;

}
declare module '@volst/ui-components/src/general/icon/IconBorderVertical' {
	 let IconBorderVertical: (props: any) => JSX.Element;
	export default IconBorderVertical;

}
declare module '@volst/ui-components/src/general/icon/IconBrandingWatermark' {
	 let IconBrandingWatermark: (props: any) => JSX.Element;
	export default IconBrandingWatermark;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness1' {
	 let IconBrightness1: (props: any) => JSX.Element;
	export default IconBrightness1;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness2' {
	 let IconBrightness2: (props: any) => JSX.Element;
	export default IconBrightness2;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness3' {
	 let IconBrightness3: (props: any) => JSX.Element;
	export default IconBrightness3;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness4' {
	 let IconBrightness4: (props: any) => JSX.Element;
	export default IconBrightness4;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness5' {
	 let IconBrightness5: (props: any) => JSX.Element;
	export default IconBrightness5;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness6' {
	 let IconBrightness6: (props: any) => JSX.Element;
	export default IconBrightness6;

}
declare module '@volst/ui-components/src/general/icon/IconBrightness7' {
	 let IconBrightness7: (props: any) => JSX.Element;
	export default IconBrightness7;

}
declare module '@volst/ui-components/src/general/icon/IconBrightnessAuto' {
	 let IconBrightnessAuto: (props: any) => JSX.Element;
	export default IconBrightnessAuto;

}
declare module '@volst/ui-components/src/general/icon/IconBrightnessHigh' {
	 let IconBrightnessHigh: (props: any) => JSX.Element;
	export default IconBrightnessHigh;

}
declare module '@volst/ui-components/src/general/icon/IconBrightnessLow' {
	 let IconBrightnessLow: (props: any) => JSX.Element;
	export default IconBrightnessLow;

}
declare module '@volst/ui-components/src/general/icon/IconBrightnessMedium' {
	 let IconBrightnessMedium: (props: any) => JSX.Element;
	export default IconBrightnessMedium;

}
declare module '@volst/ui-components/src/general/icon/IconBrokenImage' {
	 let IconBrokenImage: (props: any) => JSX.Element;
	export default IconBrokenImage;

}
declare module '@volst/ui-components/src/general/icon/IconBrush' {
	 let IconBrush: (props: any) => JSX.Element;
	export default IconBrush;

}
declare module '@volst/ui-components/src/general/icon/IconBubbleChart' {
	 let IconBubbleChart: (props: any) => JSX.Element;
	export default IconBubbleChart;

}
declare module '@volst/ui-components/src/general/icon/IconBugReport' {
	 let IconBugReport: (props: any) => JSX.Element;
	export default IconBugReport;

}
declare module '@volst/ui-components/src/general/icon/IconBuild' {
	 let IconBuild: (props: any) => JSX.Element;
	export default IconBuild;

}
declare module '@volst/ui-components/src/general/icon/IconBurstMode' {
	 let IconBurstMode: (props: any) => JSX.Element;
	export default IconBurstMode;

}
declare module '@volst/ui-components/src/general/icon/IconBusiness' {
	 let IconBusiness: (props: any) => JSX.Element;
	export default IconBusiness;

}
declare module '@volst/ui-components/src/general/icon/IconBusinessCenter' {
	 let IconBusinessCenter: (props: any) => JSX.Element;
	export default IconBusinessCenter;

}
declare module '@volst/ui-components/src/general/icon/IconCached' {
	 let IconCached: (props: any) => JSX.Element;
	export default IconCached;

}
declare module '@volst/ui-components/src/general/icon/IconCake' {
	 let IconCake: (props: any) => JSX.Element;
	export default IconCake;

}
declare module '@volst/ui-components/src/general/icon/IconCall' {
	 let IconCall: (props: any) => JSX.Element;
	export default IconCall;

}
declare module '@volst/ui-components/src/general/icon/IconCallEnd' {
	 let IconCallEnd: (props: any) => JSX.Element;
	export default IconCallEnd;

}
declare module '@volst/ui-components/src/general/icon/IconCallMade' {
	 let IconCallMade: (props: any) => JSX.Element;
	export default IconCallMade;

}
declare module '@volst/ui-components/src/general/icon/IconCallMerge' {
	 let IconCallMerge: (props: any) => JSX.Element;
	export default IconCallMerge;

}
declare module '@volst/ui-components/src/general/icon/IconCallMissed' {
	 let IconCallMissed: (props: any) => JSX.Element;
	export default IconCallMissed;

}
declare module '@volst/ui-components/src/general/icon/IconCallMissedOutgoing' {
	 let IconCallMissedOutgoing: (props: any) => JSX.Element;
	export default IconCallMissedOutgoing;

}
declare module '@volst/ui-components/src/general/icon/IconCallReceived' {
	 let IconCallReceived: (props: any) => JSX.Element;
	export default IconCallReceived;

}
declare module '@volst/ui-components/src/general/icon/IconCallSplit' {
	 let IconCallSplit: (props: any) => JSX.Element;
	export default IconCallSplit;

}
declare module '@volst/ui-components/src/general/icon/IconCallToAction' {
	 let IconCallToAction: (props: any) => JSX.Element;
	export default IconCallToAction;

}
declare module '@volst/ui-components/src/general/icon/IconCamera' {
	 let IconCamera: (props: any) => JSX.Element;
	export default IconCamera;

}
declare module '@volst/ui-components/src/general/icon/IconCameraAlt' {
	 let IconCameraAlt: (props: any) => JSX.Element;
	export default IconCameraAlt;

}
declare module '@volst/ui-components/src/general/icon/IconCameraEnhance' {
	 let IconCameraEnhance: (props: any) => JSX.Element;
	export default IconCameraEnhance;

}
declare module '@volst/ui-components/src/general/icon/IconCameraFront' {
	 let IconCameraFront: (props: any) => JSX.Element;
	export default IconCameraFront;

}
declare module '@volst/ui-components/src/general/icon/IconCameraRear' {
	 let IconCameraRear: (props: any) => JSX.Element;
	export default IconCameraRear;

}
declare module '@volst/ui-components/src/general/icon/IconCameraRoll' {
	 let IconCameraRoll: (props: any) => JSX.Element;
	export default IconCameraRoll;

}
declare module '@volst/ui-components/src/general/icon/IconCancel' {
	 let IconCancel: (props: any) => JSX.Element;
	export default IconCancel;

}
declare module '@volst/ui-components/src/general/icon/IconCardGiftcard' {
	 let IconCardGiftcard: (props: any) => JSX.Element;
	export default IconCardGiftcard;

}
declare module '@volst/ui-components/src/general/icon/IconCardMembership' {
	 let IconCardMembership: (props: any) => JSX.Element;
	export default IconCardMembership;

}
declare module '@volst/ui-components/src/general/icon/IconCardTravel' {
	 let IconCardTravel: (props: any) => JSX.Element;
	export default IconCardTravel;

}
declare module '@volst/ui-components/src/general/icon/IconCasino' {
	 let IconCasino: (props: any) => JSX.Element;
	export default IconCasino;

}
declare module '@volst/ui-components/src/general/icon/IconCast' {
	 let IconCast: (props: any) => JSX.Element;
	export default IconCast;

}
declare module '@volst/ui-components/src/general/icon/IconCastConnected' {
	 let IconCastConnected: (props: any) => JSX.Element;
	export default IconCastConnected;

}
declare module '@volst/ui-components/src/general/icon/IconCenterFocusStrong' {
	 let IconCenterFocusStrong: (props: any) => JSX.Element;
	export default IconCenterFocusStrong;

}
declare module '@volst/ui-components/src/general/icon/IconCenterFocusWeak' {
	 let IconCenterFocusWeak: (props: any) => JSX.Element;
	export default IconCenterFocusWeak;

}
declare module '@volst/ui-components/src/general/icon/IconChangeHistory' {
	 let IconChangeHistory: (props: any) => JSX.Element;
	export default IconChangeHistory;

}
declare module '@volst/ui-components/src/general/icon/IconChat' {
	 let IconChat: (props: any) => JSX.Element;
	export default IconChat;

}
declare module '@volst/ui-components/src/general/icon/IconChatBubble' {
	 let IconChatBubble: (props: any) => JSX.Element;
	export default IconChatBubble;

}
declare module '@volst/ui-components/src/general/icon/IconChatBubbleOutline' {
	 let IconChatBubbleOutline: (props: any) => JSX.Element;
	export default IconChatBubbleOutline;

}
declare module '@volst/ui-components/src/general/icon/IconCheck' {
	 let IconCheck: (props: any) => JSX.Element;
	export default IconCheck;

}
declare module '@volst/ui-components/src/general/icon/IconCheckBox' {
	 let IconCheckBox: (props: any) => JSX.Element;
	export default IconCheckBox;

}
declare module '@volst/ui-components/src/general/icon/IconCheckBoxOutlineBlank' {
	 let IconCheckBoxOutlineBlank: (props: any) => JSX.Element;
	export default IconCheckBoxOutlineBlank;

}
declare module '@volst/ui-components/src/general/icon/IconCheckCircle' {
	 let IconCheckCircle: (props: any) => JSX.Element;
	export default IconCheckCircle;

}
declare module '@volst/ui-components/src/general/icon/IconChevronLeft' {
	 let IconChevronLeft: (props: any) => JSX.Element;
	export default IconChevronLeft;

}
declare module '@volst/ui-components/src/general/icon/IconChevronRight' {
	 let IconChevronRight: (props: any) => JSX.Element;
	export default IconChevronRight;

}
declare module '@volst/ui-components/src/general/icon/IconChildCare' {
	 let IconChildCare: (props: any) => JSX.Element;
	export default IconChildCare;

}
declare module '@volst/ui-components/src/general/icon/IconChildFriendly' {
	 let IconChildFriendly: (props: any) => JSX.Element;
	export default IconChildFriendly;

}
declare module '@volst/ui-components/src/general/icon/IconChromeReaderMode' {
	 let IconChromeReaderMode: (props: any) => JSX.Element;
	export default IconChromeReaderMode;

}
declare module '@volst/ui-components/src/general/icon/IconClass' {
	 let IconClass: (props: any) => JSX.Element;
	export default IconClass;

}
declare module '@volst/ui-components/src/general/icon/IconClearAll' {
	 let IconClearAll: (props: any) => JSX.Element;
	export default IconClearAll;

}
declare module '@volst/ui-components/src/general/icon/IconClosedCaption' {
	 let IconClosedCaption: (props: any) => JSX.Element;
	export default IconClosedCaption;

}
declare module '@volst/ui-components/src/general/icon/IconCloud' {
	 let IconCloud: (props: any) => JSX.Element;
	export default IconCloud;

}
declare module '@volst/ui-components/src/general/icon/IconCloudCircle' {
	 let IconCloudCircle: (props: any) => JSX.Element;
	export default IconCloudCircle;

}
declare module '@volst/ui-components/src/general/icon/IconCloudDone' {
	 let IconCloudDone: (props: any) => JSX.Element;
	export default IconCloudDone;

}
declare module '@volst/ui-components/src/general/icon/IconCloudDownload' {
	 let IconCloudDownload: (props: any) => JSX.Element;
	export default IconCloudDownload;

}
declare module '@volst/ui-components/src/general/icon/IconCloudOff' {
	 let IconCloudOff: (props: any) => JSX.Element;
	export default IconCloudOff;

}
declare module '@volst/ui-components/src/general/icon/IconCloudQueue' {
	 let IconCloudQueue: (props: any) => JSX.Element;
	export default IconCloudQueue;

}
declare module '@volst/ui-components/src/general/icon/IconCloudUpload' {
	 let IconCloudUpload: (props: any) => JSX.Element;
	export default IconCloudUpload;

}
declare module '@volst/ui-components/src/general/icon/IconCode' {
	 let IconCode: (props: any) => JSX.Element;
	export default IconCode;

}
declare module '@volst/ui-components/src/general/icon/IconCollections' {
	 let IconCollections: (props: any) => JSX.Element;
	export default IconCollections;

}
declare module '@volst/ui-components/src/general/icon/IconCollectionsBookmark' {
	 let IconCollectionsBookmark: (props: any) => JSX.Element;
	export default IconCollectionsBookmark;

}
declare module '@volst/ui-components/src/general/icon/IconColorize' {
	 let IconColorize: (props: any) => JSX.Element;
	export default IconColorize;

}
declare module '@volst/ui-components/src/general/icon/IconColorLens' {
	 let IconColorLens: (props: any) => JSX.Element;
	export default IconColorLens;

}
declare module '@volst/ui-components/src/general/icon/IconComment' {
	 let IconComment: (props: any) => JSX.Element;
	export default IconComment;

}
declare module '@volst/ui-components/src/general/icon/IconCompare' {
	 let IconCompare: (props: any) => JSX.Element;
	export default IconCompare;

}
declare module '@volst/ui-components/src/general/icon/IconCompareArrows' {
	 let IconCompareArrows: (props: any) => JSX.Element;
	export default IconCompareArrows;

}
declare module '@volst/ui-components/src/general/icon/IconComputer' {
	 let IconComputer: (props: any) => JSX.Element;
	export default IconComputer;

}
declare module '@volst/ui-components/src/general/icon/IconConfirmationNumber' {
	 let IconConfirmationNumber: (props: any) => JSX.Element;
	export default IconConfirmationNumber;

}
declare module '@volst/ui-components/src/general/icon/IconContactMail' {
	 let IconContactMail: (props: any) => JSX.Element;
	export default IconContactMail;

}
declare module '@volst/ui-components/src/general/icon/IconContactPhone' {
	 let IconContactPhone: (props: any) => JSX.Element;
	export default IconContactPhone;

}
declare module '@volst/ui-components/src/general/icon/IconContacts' {
	 let IconContacts: (props: any) => JSX.Element;
	export default IconContacts;

}
declare module '@volst/ui-components/src/general/icon/IconContentCopy' {
	 let IconContentCopy: (props: any) => JSX.Element;
	export default IconContentCopy;

}
declare module '@volst/ui-components/src/general/icon/IconContentCut' {
	 let IconContentCut: (props: any) => JSX.Element;
	export default IconContentCut;

}
declare module '@volst/ui-components/src/general/icon/IconContentPaste' {
	 let IconContentPaste: (props: any) => JSX.Element;
	export default IconContentPaste;

}
declare module '@volst/ui-components/src/general/icon/IconControlPoint' {
	 let IconControlPoint: (props: any) => JSX.Element;
	export default IconControlPoint;

}
declare module '@volst/ui-components/src/general/icon/IconControlPointDuplicate' {
	 let IconControlPointDuplicate: (props: any) => JSX.Element;
	export default IconControlPointDuplicate;

}
declare module '@volst/ui-components/src/general/icon/IconCopyright' {
	 let IconCopyright: (props: any) => JSX.Element;
	export default IconCopyright;

}
declare module '@volst/ui-components/src/general/icon/IconCreate' {
	 let IconCreate: (props: any) => JSX.Element;
	export default IconCreate;

}
declare module '@volst/ui-components/src/general/icon/IconCreateNewFolder' {
	 let IconCreateNewFolder: (props: any) => JSX.Element;
	export default IconCreateNewFolder;

}
declare module '@volst/ui-components/src/general/icon/IconCreditCard' {
	 let IconCreditCard: (props: any) => JSX.Element;
	export default IconCreditCard;

}
declare module '@volst/ui-components/src/general/icon/IconCrop' {
	 let IconCrop: (props: any) => JSX.Element;
	export default IconCrop;

}
declare module '@volst/ui-components/src/general/icon/IconCrop169' {
	 let IconCrop169: (props: any) => JSX.Element;
	export default IconCrop169;

}
declare module '@volst/ui-components/src/general/icon/IconCrop32' {
	 let IconCrop32: (props: any) => JSX.Element;
	export default IconCrop32;

}
declare module '@volst/ui-components/src/general/icon/IconCrop54' {
	 let IconCrop54: (props: any) => JSX.Element;
	export default IconCrop54;

}
declare module '@volst/ui-components/src/general/icon/IconCrop75' {
	 let IconCrop75: (props: any) => JSX.Element;
	export default IconCrop75;

}
declare module '@volst/ui-components/src/general/icon/IconCropDin' {
	 let IconCropDin: (props: any) => JSX.Element;
	export default IconCropDin;

}
declare module '@volst/ui-components/src/general/icon/IconCropFree' {
	 let IconCropFree: (props: any) => JSX.Element;
	export default IconCropFree;

}
declare module '@volst/ui-components/src/general/icon/IconCropLandscape' {
	 let IconCropLandscape: (props: any) => JSX.Element;
	export default IconCropLandscape;

}
declare module '@volst/ui-components/src/general/icon/IconCropOriginal' {
	 let IconCropOriginal: (props: any) => JSX.Element;
	export default IconCropOriginal;

}
declare module '@volst/ui-components/src/general/icon/IconCropPortrait' {
	 let IconCropPortrait: (props: any) => JSX.Element;
	export default IconCropPortrait;

}
declare module '@volst/ui-components/src/general/icon/IconCropRotate' {
	 let IconCropRotate: (props: any) => JSX.Element;
	export default IconCropRotate;

}
declare module '@volst/ui-components/src/general/icon/IconCropSquare' {
	 let IconCropSquare: (props: any) => JSX.Element;
	export default IconCropSquare;

}
declare module '@volst/ui-components/src/general/icon/IconDashboard' {
	 let IconDashboard: (props: any) => JSX.Element;
	export default IconDashboard;

}
declare module '@volst/ui-components/src/general/icon/IconDataUsage' {
	 let IconDataUsage: (props: any) => JSX.Element;
	export default IconDataUsage;

}
declare module '@volst/ui-components/src/general/icon/IconDateRange' {
	 let IconDateRange: (props: any) => JSX.Element;
	export default IconDateRange;

}
declare module '@volst/ui-components/src/general/icon/IconDehaze' {
	 let IconDehaze: (props: any) => JSX.Element;
	export default IconDehaze;

}
declare module '@volst/ui-components/src/general/icon/IconDelete' {
	 let IconDelete: (props: any) => JSX.Element;
	export default IconDelete;

}
declare module '@volst/ui-components/src/general/icon/IconDeleteForever' {
	 let IconDeleteForever: (props: any) => JSX.Element;
	export default IconDeleteForever;

}
declare module '@volst/ui-components/src/general/icon/IconDeleteSweep' {
	 let IconDeleteSweep: (props: any) => JSX.Element;
	export default IconDeleteSweep;

}
declare module '@volst/ui-components/src/general/icon/IconDescription' {
	 let IconDescription: (props: any) => JSX.Element;
	export default IconDescription;

}
declare module '@volst/ui-components/src/general/icon/IconDesktopMac' {
	 let IconDesktopMac: (props: any) => JSX.Element;
	export default IconDesktopMac;

}
declare module '@volst/ui-components/src/general/icon/IconDesktopWindows' {
	 let IconDesktopWindows: (props: any) => JSX.Element;
	export default IconDesktopWindows;

}
declare module '@volst/ui-components/src/general/icon/IconDetails' {
	 let IconDetails: (props: any) => JSX.Element;
	export default IconDetails;

}
declare module '@volst/ui-components/src/general/icon/IconDeveloperBoard' {
	 let IconDeveloperBoard: (props: any) => JSX.Element;
	export default IconDeveloperBoard;

}
declare module '@volst/ui-components/src/general/icon/IconDeveloperMode' {
	 let IconDeveloperMode: (props: any) => JSX.Element;
	export default IconDeveloperMode;

}
declare module '@volst/ui-components/src/general/icon/IconDeviceHub' {
	 let IconDeviceHub: (props: any) => JSX.Element;
	export default IconDeviceHub;

}
declare module '@volst/ui-components/src/general/icon/IconDevices' {
	 let IconDevices: (props: any) => JSX.Element;
	export default IconDevices;

}
declare module '@volst/ui-components/src/general/icon/IconDevicesOther' {
	 let IconDevicesOther: (props: any) => JSX.Element;
	export default IconDevicesOther;

}
declare module '@volst/ui-components/src/general/icon/IconDialerSip' {
	 let IconDialerSip: (props: any) => JSX.Element;
	export default IconDialerSip;

}
declare module '@volst/ui-components/src/general/icon/IconDialpad' {
	 let IconDialpad: (props: any) => JSX.Element;
	export default IconDialpad;

}
declare module '@volst/ui-components/src/general/icon/IconDirections' {
	 let IconDirections: (props: any) => JSX.Element;
	export default IconDirections;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsBike' {
	 let IconDirectionsBike: (props: any) => JSX.Element;
	export default IconDirectionsBike;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsBoat' {
	 let IconDirectionsBoat: (props: any) => JSX.Element;
	export default IconDirectionsBoat;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsBus' {
	 let IconDirectionsBus: (props: any) => JSX.Element;
	export default IconDirectionsBus;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsCar' {
	 let IconDirectionsCar: (props: any) => JSX.Element;
	export default IconDirectionsCar;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsRailway' {
	 let IconDirectionsRailway: (props: any) => JSX.Element;
	export default IconDirectionsRailway;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsRun' {
	 let IconDirectionsRun: (props: any) => JSX.Element;
	export default IconDirectionsRun;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsSubway' {
	 let IconDirectionsSubway: (props: any) => JSX.Element;
	export default IconDirectionsSubway;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsTransit' {
	 let IconDirectionsTransit: (props: any) => JSX.Element;
	export default IconDirectionsTransit;

}
declare module '@volst/ui-components/src/general/icon/IconDirectionsWalk' {
	 let IconDirectionsWalk: (props: any) => JSX.Element;
	export default IconDirectionsWalk;

}
declare module '@volst/ui-components/src/general/icon/IconDiscFull' {
	 let IconDiscFull: (props: any) => JSX.Element;
	export default IconDiscFull;

}
declare module '@volst/ui-components/src/general/icon/IconDns' {
	 let IconDns: (props: any) => JSX.Element;
	export default IconDns;

}
declare module '@volst/ui-components/src/general/icon/IconDock' {
	 let IconDock: (props: any) => JSX.Element;
	export default IconDock;

}
declare module '@volst/ui-components/src/general/icon/IconDomain' {
	 let IconDomain: (props: any) => JSX.Element;
	export default IconDomain;

}
declare module '@volst/ui-components/src/general/icon/IconDone' {
	 let IconDone: (props: any) => JSX.Element;
	export default IconDone;

}
declare module '@volst/ui-components/src/general/icon/IconDoneAll' {
	 let IconDoneAll: (props: any) => JSX.Element;
	export default IconDoneAll;

}
declare module '@volst/ui-components/src/general/icon/IconDoNotDisturb' {
	 let IconDoNotDisturb: (props: any) => JSX.Element;
	export default IconDoNotDisturb;

}
declare module '@volst/ui-components/src/general/icon/IconDoNotDisturbAlt' {
	 let IconDoNotDisturbAlt: (props: any) => JSX.Element;
	export default IconDoNotDisturbAlt;

}
declare module '@volst/ui-components/src/general/icon/IconDoNotDisturbOff' {
	 let IconDoNotDisturbOff: (props: any) => JSX.Element;
	export default IconDoNotDisturbOff;

}
declare module '@volst/ui-components/src/general/icon/IconDoNotDisturbOn' {
	 let IconDoNotDisturbOn: (props: any) => JSX.Element;
	export default IconDoNotDisturbOn;

}
declare module '@volst/ui-components/src/general/icon/IconDonutLarge' {
	 let IconDonutLarge: (props: any) => JSX.Element;
	export default IconDonutLarge;

}
declare module '@volst/ui-components/src/general/icon/IconDonutSmall' {
	 let IconDonutSmall: (props: any) => JSX.Element;
	export default IconDonutSmall;

}
declare module '@volst/ui-components/src/general/icon/IconDrafts' {
	 let IconDrafts: (props: any) => JSX.Element;
	export default IconDrafts;

}
declare module '@volst/ui-components/src/general/icon/IconDragHandle' {
	 let IconDragHandle: (props: any) => JSX.Element;
	export default IconDragHandle;

}
declare module '@volst/ui-components/src/general/icon/IconDriveEta' {
	 let IconDriveEta: (props: any) => JSX.Element;
	export default IconDriveEta;

}
declare module '@volst/ui-components/src/general/icon/IconDvr' {
	 let IconDvr: (props: any) => JSX.Element;
	export default IconDvr;

}
declare module '@volst/ui-components/src/general/icon/IconEdit' {
	 let IconEdit: (props: any) => JSX.Element;
	export default IconEdit;

}
declare module '@volst/ui-components/src/general/icon/IconEditLocation' {
	 let IconEditLocation: (props: any) => JSX.Element;
	export default IconEditLocation;

}
declare module '@volst/ui-components/src/general/icon/IconEject' {
	 let IconEject: (props: any) => JSX.Element;
	export default IconEject;

}
declare module '@volst/ui-components/src/general/icon/IconEmail' {
	 let IconEmail: (props: any) => JSX.Element;
	export default IconEmail;

}
declare module '@volst/ui-components/src/general/icon/IconEnhancedEncryption' {
	 let IconEnhancedEncryption: (props: any) => JSX.Element;
	export default IconEnhancedEncryption;

}
declare module '@volst/ui-components/src/general/icon/IconEqualizer' {
	 let IconEqualizer: (props: any) => JSX.Element;
	export default IconEqualizer;

}
declare module '@volst/ui-components/src/general/icon/IconError' {
	 let IconError: (props: any) => JSX.Element;
	export default IconError;

}
declare module '@volst/ui-components/src/general/icon/IconErrorOutline' {
	 let IconErrorOutline: (props: any) => JSX.Element;
	export default IconErrorOutline;

}
declare module '@volst/ui-components/src/general/icon/IconEuroSymbol' {
	 let IconEuroSymbol: (props: any) => JSX.Element;
	export default IconEuroSymbol;

}
declare module '@volst/ui-components/src/general/icon/IconEvent' {
	 let IconEvent: (props: any) => JSX.Element;
	export default IconEvent;

}
declare module '@volst/ui-components/src/general/icon/IconEventAvailable' {
	 let IconEventAvailable: (props: any) => JSX.Element;
	export default IconEventAvailable;

}
declare module '@volst/ui-components/src/general/icon/IconEventBusy' {
	 let IconEventBusy: (props: any) => JSX.Element;
	export default IconEventBusy;

}
declare module '@volst/ui-components/src/general/icon/IconEventNote' {
	 let IconEventNote: (props: any) => JSX.Element;
	export default IconEventNote;

}
declare module '@volst/ui-components/src/general/icon/IconEventSeat' {
	 let IconEventSeat: (props: any) => JSX.Element;
	export default IconEventSeat;

}
declare module '@volst/ui-components/src/general/icon/IconEvStation' {
	 let IconEvStation: (props: any) => JSX.Element;
	export default IconEvStation;

}
declare module '@volst/ui-components/src/general/icon/IconExitToApp' {
	 let IconExitToApp: (props: any) => JSX.Element;
	export default IconExitToApp;

}
declare module '@volst/ui-components/src/general/icon/IconExpandLess' {
	 let IconExpandLess: (props: any) => JSX.Element;
	export default IconExpandLess;

}
declare module '@volst/ui-components/src/general/icon/IconExpandMore' {
	 let IconExpandMore: (props: any) => JSX.Element;
	export default IconExpandMore;

}
declare module '@volst/ui-components/src/general/icon/IconExplicit' {
	 let IconExplicit: (props: any) => JSX.Element;
	export default IconExplicit;

}
declare module '@volst/ui-components/src/general/icon/IconExplore' {
	 let IconExplore: (props: any) => JSX.Element;
	export default IconExplore;

}
declare module '@volst/ui-components/src/general/icon/IconExposure' {
	 let IconExposure: (props: any) => JSX.Element;
	export default IconExposure;

}
declare module '@volst/ui-components/src/general/icon/IconExposureNeg1' {
	 let IconExposureNeg1: (props: any) => JSX.Element;
	export default IconExposureNeg1;

}
declare module '@volst/ui-components/src/general/icon/IconExposureNeg2' {
	 let IconExposureNeg2: (props: any) => JSX.Element;
	export default IconExposureNeg2;

}
declare module '@volst/ui-components/src/general/icon/IconExposurePlus1' {
	 let IconExposurePlus1: (props: any) => JSX.Element;
	export default IconExposurePlus1;

}
declare module '@volst/ui-components/src/general/icon/IconExposurePlus2' {
	 let IconExposurePlus2: (props: any) => JSX.Element;
	export default IconExposurePlus2;

}
declare module '@volst/ui-components/src/general/icon/IconExposureZero' {
	 let IconExposureZero: (props: any) => JSX.Element;
	export default IconExposureZero;

}
declare module '@volst/ui-components/src/general/icon/IconExtension' {
	 let IconExtension: (props: any) => JSX.Element;
	export default IconExtension;

}
declare module '@volst/ui-components/src/general/icon/IconFace' {
	 let IconFace: (props: any) => JSX.Element;
	export default IconFace;

}
declare module '@volst/ui-components/src/general/icon/IconFastForward' {
	 let IconFastForward: (props: any) => JSX.Element;
	export default IconFastForward;

}
declare module '@volst/ui-components/src/general/icon/IconFastRewind' {
	 let IconFastRewind: (props: any) => JSX.Element;
	export default IconFastRewind;

}
declare module '@volst/ui-components/src/general/icon/IconFavorite' {
	 let IconFavorite: (props: any) => JSX.Element;
	export default IconFavorite;

}
declare module '@volst/ui-components/src/general/icon/IconFavoriteBorder' {
	 let IconFavoriteBorder: (props: any) => JSX.Element;
	export default IconFavoriteBorder;

}
declare module '@volst/ui-components/src/general/icon/IconFeaturedPlayList' {
	 let IconFeaturedPlayList: (props: any) => JSX.Element;
	export default IconFeaturedPlayList;

}
declare module '@volst/ui-components/src/general/icon/IconFeaturedVideo' {
	 let IconFeaturedVideo: (props: any) => JSX.Element;
	export default IconFeaturedVideo;

}
declare module '@volst/ui-components/src/general/icon/IconFeedback' {
	 let IconFeedback: (props: any) => JSX.Element;
	export default IconFeedback;

}
declare module '@volst/ui-components/src/general/icon/IconFiberDvr' {
	 let IconFiberDvr: (props: any) => JSX.Element;
	export default IconFiberDvr;

}
declare module '@volst/ui-components/src/general/icon/IconFiberManualRecord' {
	 let IconFiberManualRecord: (props: any) => JSX.Element;
	export default IconFiberManualRecord;

}
declare module '@volst/ui-components/src/general/icon/IconFiberNew' {
	 let IconFiberNew: (props: any) => JSX.Element;
	export default IconFiberNew;

}
declare module '@volst/ui-components/src/general/icon/IconFiberPin' {
	 let IconFiberPin: (props: any) => JSX.Element;
	export default IconFiberPin;

}
declare module '@volst/ui-components/src/general/icon/IconFiberSmartRecord' {
	 let IconFiberSmartRecord: (props: any) => JSX.Element;
	export default IconFiberSmartRecord;

}
declare module '@volst/ui-components/src/general/icon/IconFileDownload' {
	 let IconFileDownload: (props: any) => JSX.Element;
	export default IconFileDownload;

}
declare module '@volst/ui-components/src/general/icon/IconFileUpload' {
	 let IconFileUpload: (props: any) => JSX.Element;
	export default IconFileUpload;

}
declare module '@volst/ui-components/src/general/icon/IconFilter' {
	 let IconFilter: (props: any) => JSX.Element;
	export default IconFilter;

}
declare module '@volst/ui-components/src/general/icon/IconFilter1' {
	 let IconFilter1: (props: any) => JSX.Element;
	export default IconFilter1;

}
declare module '@volst/ui-components/src/general/icon/IconFilter2' {
	 let IconFilter2: (props: any) => JSX.Element;
	export default IconFilter2;

}
declare module '@volst/ui-components/src/general/icon/IconFilter3' {
	 let IconFilter3: (props: any) => JSX.Element;
	export default IconFilter3;

}
declare module '@volst/ui-components/src/general/icon/IconFilter4' {
	 let IconFilter4: (props: any) => JSX.Element;
	export default IconFilter4;

}
declare module '@volst/ui-components/src/general/icon/IconFilter5' {
	 let IconFilter5: (props: any) => JSX.Element;
	export default IconFilter5;

}
declare module '@volst/ui-components/src/general/icon/IconFilter6' {
	 let IconFilter6: (props: any) => JSX.Element;
	export default IconFilter6;

}
declare module '@volst/ui-components/src/general/icon/IconFilter7' {
	 let IconFilter7: (props: any) => JSX.Element;
	export default IconFilter7;

}
declare module '@volst/ui-components/src/general/icon/IconFilter8' {
	 let IconFilter8: (props: any) => JSX.Element;
	export default IconFilter8;

}
declare module '@volst/ui-components/src/general/icon/IconFilter9' {
	 let IconFilter9: (props: any) => JSX.Element;
	export default IconFilter9;

}
declare module '@volst/ui-components/src/general/icon/IconFilter9Plus' {
	 let IconFilter9Plus: (props: any) => JSX.Element;
	export default IconFilter9Plus;

}
declare module '@volst/ui-components/src/general/icon/IconFilterBAndW' {
	 let IconFilterBAndW: (props: any) => JSX.Element;
	export default IconFilterBAndW;

}
declare module '@volst/ui-components/src/general/icon/IconFilterCenterFocus' {
	 let IconFilterCenterFocus: (props: any) => JSX.Element;
	export default IconFilterCenterFocus;

}
declare module '@volst/ui-components/src/general/icon/IconFilterDrama' {
	 let IconFilterDrama: (props: any) => JSX.Element;
	export default IconFilterDrama;

}
declare module '@volst/ui-components/src/general/icon/IconFilterFrames' {
	 let IconFilterFrames: (props: any) => JSX.Element;
	export default IconFilterFrames;

}
declare module '@volst/ui-components/src/general/icon/IconFilterHdr' {
	 let IconFilterHdr: (props: any) => JSX.Element;
	export default IconFilterHdr;

}
declare module '@volst/ui-components/src/general/icon/IconFilterList' {
	 let IconFilterList: (props: any) => JSX.Element;
	export default IconFilterList;

}
declare module '@volst/ui-components/src/general/icon/IconFilterNone' {
	 let IconFilterNone: (props: any) => JSX.Element;
	export default IconFilterNone;

}
declare module '@volst/ui-components/src/general/icon/IconFilterTiltShift' {
	 let IconFilterTiltShift: (props: any) => JSX.Element;
	export default IconFilterTiltShift;

}
declare module '@volst/ui-components/src/general/icon/IconFilterVintage' {
	 let IconFilterVintage: (props: any) => JSX.Element;
	export default IconFilterVintage;

}
declare module '@volst/ui-components/src/general/icon/IconFindInPage' {
	 let IconFindInPage: (props: any) => JSX.Element;
	export default IconFindInPage;

}
declare module '@volst/ui-components/src/general/icon/IconFindReplace' {
	 let IconFindReplace: (props: any) => JSX.Element;
	export default IconFindReplace;

}
declare module '@volst/ui-components/src/general/icon/IconFingerprint' {
	 let IconFingerprint: (props: any) => JSX.Element;
	export default IconFingerprint;

}
declare module '@volst/ui-components/src/general/icon/IconFirstPage' {
	 let IconFirstPage: (props: any) => JSX.Element;
	export default IconFirstPage;

}
declare module '@volst/ui-components/src/general/icon/IconFitnessCenter' {
	 let IconFitnessCenter: (props: any) => JSX.Element;
	export default IconFitnessCenter;

}
declare module '@volst/ui-components/src/general/icon/IconFlag' {
	 let IconFlag: (props: any) => JSX.Element;
	export default IconFlag;

}
declare module '@volst/ui-components/src/general/icon/IconFlare' {
	 let IconFlare: (props: any) => JSX.Element;
	export default IconFlare;

}
declare module '@volst/ui-components/src/general/icon/IconFlashAuto' {
	 let IconFlashAuto: (props: any) => JSX.Element;
	export default IconFlashAuto;

}
declare module '@volst/ui-components/src/general/icon/IconFlashOff' {
	 let IconFlashOff: (props: any) => JSX.Element;
	export default IconFlashOff;

}
declare module '@volst/ui-components/src/general/icon/IconFlashOn' {
	 let IconFlashOn: (props: any) => JSX.Element;
	export default IconFlashOn;

}
declare module '@volst/ui-components/src/general/icon/IconFlight' {
	 let IconFlight: (props: any) => JSX.Element;
	export default IconFlight;

}
declare module '@volst/ui-components/src/general/icon/IconFlightLand' {
	 let IconFlightLand: (props: any) => JSX.Element;
	export default IconFlightLand;

}
declare module '@volst/ui-components/src/general/icon/IconFlightTakeoff' {
	 let IconFlightTakeoff: (props: any) => JSX.Element;
	export default IconFlightTakeoff;

}
declare module '@volst/ui-components/src/general/icon/IconFlip' {
	 let IconFlip: (props: any) => JSX.Element;
	export default IconFlip;

}
declare module '@volst/ui-components/src/general/icon/IconFlipToBack' {
	 let IconFlipToBack: (props: any) => JSX.Element;
	export default IconFlipToBack;

}
declare module '@volst/ui-components/src/general/icon/IconFlipToFront' {
	 let IconFlipToFront: (props: any) => JSX.Element;
	export default IconFlipToFront;

}
declare module '@volst/ui-components/src/general/icon/IconFolder' {
	 let IconFolder: (props: any) => JSX.Element;
	export default IconFolder;

}
declare module '@volst/ui-components/src/general/icon/IconFolderOpen' {
	 let IconFolderOpen: (props: any) => JSX.Element;
	export default IconFolderOpen;

}
declare module '@volst/ui-components/src/general/icon/IconFolderShared' {
	 let IconFolderShared: (props: any) => JSX.Element;
	export default IconFolderShared;

}
declare module '@volst/ui-components/src/general/icon/IconFolderSpecial' {
	 let IconFolderSpecial: (props: any) => JSX.Element;
	export default IconFolderSpecial;

}
declare module '@volst/ui-components/src/general/icon/IconFontDownload' {
	 let IconFontDownload: (props: any) => JSX.Element;
	export default IconFontDownload;

}
declare module '@volst/ui-components/src/general/icon/IconFormatAlignCenter' {
	 let IconFormatAlignCenter: (props: any) => JSX.Element;
	export default IconFormatAlignCenter;

}
declare module '@volst/ui-components/src/general/icon/IconFormatAlignJustify' {
	 let IconFormatAlignJustify: (props: any) => JSX.Element;
	export default IconFormatAlignJustify;

}
declare module '@volst/ui-components/src/general/icon/IconFormatAlignLeft' {
	 let IconFormatAlignLeft: (props: any) => JSX.Element;
	export default IconFormatAlignLeft;

}
declare module '@volst/ui-components/src/general/icon/IconFormatAlignRight' {
	 let IconFormatAlignRight: (props: any) => JSX.Element;
	export default IconFormatAlignRight;

}
declare module '@volst/ui-components/src/general/icon/IconFormatBold' {
	 let IconFormatBold: (props: any) => JSX.Element;
	export default IconFormatBold;

}
declare module '@volst/ui-components/src/general/icon/IconFormatClear' {
	 let IconFormatClear: (props: any) => JSX.Element;
	export default IconFormatClear;

}
declare module '@volst/ui-components/src/general/icon/IconFormatColorFill' {
	 let IconFormatColorFill: (props: any) => JSX.Element;
	export default IconFormatColorFill;

}
declare module '@volst/ui-components/src/general/icon/IconFormatColorReset' {
	 let IconFormatColorReset: (props: any) => JSX.Element;
	export default IconFormatColorReset;

}
declare module '@volst/ui-components/src/general/icon/IconFormatColorText' {
	 let IconFormatColorText: (props: any) => JSX.Element;
	export default IconFormatColorText;

}
declare module '@volst/ui-components/src/general/icon/IconFormatIndentDecrease' {
	 let IconFormatIndentDecrease: (props: any) => JSX.Element;
	export default IconFormatIndentDecrease;

}
declare module '@volst/ui-components/src/general/icon/IconFormatIndentIncrease' {
	 let IconFormatIndentIncrease: (props: any) => JSX.Element;
	export default IconFormatIndentIncrease;

}
declare module '@volst/ui-components/src/general/icon/IconFormatItalic' {
	 let IconFormatItalic: (props: any) => JSX.Element;
	export default IconFormatItalic;

}
declare module '@volst/ui-components/src/general/icon/IconFormatLineSpacing' {
	 let IconFormatLineSpacing: (props: any) => JSX.Element;
	export default IconFormatLineSpacing;

}
declare module '@volst/ui-components/src/general/icon/IconFormatListBulleted' {
	 let IconFormatListBulleted: (props: any) => JSX.Element;
	export default IconFormatListBulleted;

}
declare module '@volst/ui-components/src/general/icon/IconFormatListNumbered' {
	 let IconFormatListNumbered: (props: any) => JSX.Element;
	export default IconFormatListNumbered;

}
declare module '@volst/ui-components/src/general/icon/IconFormatPaint' {
	 let IconFormatPaint: (props: any) => JSX.Element;
	export default IconFormatPaint;

}
declare module '@volst/ui-components/src/general/icon/IconFormatQuote' {
	 let IconFormatQuote: (props: any) => JSX.Element;
	export default IconFormatQuote;

}
declare module '@volst/ui-components/src/general/icon/IconFormatShapes' {
	 let IconFormatShapes: (props: any) => JSX.Element;
	export default IconFormatShapes;

}
declare module '@volst/ui-components/src/general/icon/IconFormatSize' {
	 let IconFormatSize: (props: any) => JSX.Element;
	export default IconFormatSize;

}
declare module '@volst/ui-components/src/general/icon/IconFormatStrikethrough' {
	 let IconFormatStrikethrough: (props: any) => JSX.Element;
	export default IconFormatStrikethrough;

}
declare module '@volst/ui-components/src/general/icon/IconFormatTextdirectionLToR' {
	 let IconFormatTextdirectionLToR: (props: any) => JSX.Element;
	export default IconFormatTextdirectionLToR;

}
declare module '@volst/ui-components/src/general/icon/IconFormatTextdirectionRToL' {
	 let IconFormatTextdirectionRToL: (props: any) => JSX.Element;
	export default IconFormatTextdirectionRToL;

}
declare module '@volst/ui-components/src/general/icon/IconFormatUnderlined' {
	 let IconFormatUnderlined: (props: any) => JSX.Element;
	export default IconFormatUnderlined;

}
declare module '@volst/ui-components/src/general/icon/IconForum' {
	 let IconForum: (props: any) => JSX.Element;
	export default IconForum;

}
declare module '@volst/ui-components/src/general/icon/IconForward' {
	 let IconForward: (props: any) => JSX.Element;
	export default IconForward;

}
declare module '@volst/ui-components/src/general/icon/IconForward10' {
	 let IconForward10: (props: any) => JSX.Element;
	export default IconForward10;

}
declare module '@volst/ui-components/src/general/icon/IconForward30' {
	 let IconForward30: (props: any) => JSX.Element;
	export default IconForward30;

}
declare module '@volst/ui-components/src/general/icon/IconForward5' {
	 let IconForward5: (props: any) => JSX.Element;
	export default IconForward5;

}
declare module '@volst/ui-components/src/general/icon/IconFreeBreakfast' {
	 let IconFreeBreakfast: (props: any) => JSX.Element;
	export default IconFreeBreakfast;

}
declare module '@volst/ui-components/src/general/icon/IconFullscreen' {
	 let IconFullscreen: (props: any) => JSX.Element;
	export default IconFullscreen;

}
declare module '@volst/ui-components/src/general/icon/IconFullscreenExit' {
	 let IconFullscreenExit: (props: any) => JSX.Element;
	export default IconFullscreenExit;

}
declare module '@volst/ui-components/src/general/icon/IconFunctions' {
	 let IconFunctions: (props: any) => JSX.Element;
	export default IconFunctions;

}
declare module '@volst/ui-components/src/general/icon/IconGamepad' {
	 let IconGamepad: (props: any) => JSX.Element;
	export default IconGamepad;

}
declare module '@volst/ui-components/src/general/icon/IconGames' {
	 let IconGames: (props: any) => JSX.Element;
	export default IconGames;

}
declare module '@volst/ui-components/src/general/icon/IconGavel' {
	 let IconGavel: (props: any) => JSX.Element;
	export default IconGavel;

}
declare module '@volst/ui-components/src/general/icon/IconGesture' {
	 let IconGesture: (props: any) => JSX.Element;
	export default IconGesture;

}
declare module '@volst/ui-components/src/general/icon/IconGetApp' {
	 let IconGetApp: (props: any) => JSX.Element;
	export default IconGetApp;

}
declare module '@volst/ui-components/src/general/icon/IconGif' {
	 let IconGif: (props: any) => JSX.Element;
	export default IconGif;

}
declare module '@volst/ui-components/src/general/icon/IconGolfCourse' {
	 let IconGolfCourse: (props: any) => JSX.Element;
	export default IconGolfCourse;

}
declare module '@volst/ui-components/src/general/icon/IconGpsFixed' {
	 let IconGpsFixed: (props: any) => JSX.Element;
	export default IconGpsFixed;

}
declare module '@volst/ui-components/src/general/icon/IconGpsNotFixed' {
	 let IconGpsNotFixed: (props: any) => JSX.Element;
	export default IconGpsNotFixed;

}
declare module '@volst/ui-components/src/general/icon/IconGpsOff' {
	 let IconGpsOff: (props: any) => JSX.Element;
	export default IconGpsOff;

}
declare module '@volst/ui-components/src/general/icon/IconGrade' {
	 let IconGrade: (props: any) => JSX.Element;
	export default IconGrade;

}
declare module '@volst/ui-components/src/general/icon/IconGradient' {
	 let IconGradient: (props: any) => JSX.Element;
	export default IconGradient;

}
declare module '@volst/ui-components/src/general/icon/IconGrain' {
	 let IconGrain: (props: any) => JSX.Element;
	export default IconGrain;

}
declare module '@volst/ui-components/src/general/icon/IconGraphicEq' {
	 let IconGraphicEq: (props: any) => JSX.Element;
	export default IconGraphicEq;

}
declare module '@volst/ui-components/src/general/icon/IconGridOff' {
	 let IconGridOff: (props: any) => JSX.Element;
	export default IconGridOff;

}
declare module '@volst/ui-components/src/general/icon/IconGridOn' {
	 let IconGridOn: (props: any) => JSX.Element;
	export default IconGridOn;

}
declare module '@volst/ui-components/src/general/icon/IconGroup' {
	 let IconGroup: (props: any) => JSX.Element;
	export default IconGroup;

}
declare module '@volst/ui-components/src/general/icon/IconGroupAdd' {
	 let IconGroupAdd: (props: any) => JSX.Element;
	export default IconGroupAdd;

}
declare module '@volst/ui-components/src/general/icon/IconGroupWork' {
	 let IconGroupWork: (props: any) => JSX.Element;
	export default IconGroupWork;

}
declare module '@volst/ui-components/src/general/icon/IconGTranslate' {
	 let IconGTranslate: (props: any) => JSX.Element;
	export default IconGTranslate;

}
declare module '@volst/ui-components/src/general/icon/IconHd' {
	 let IconHd: (props: any) => JSX.Element;
	export default IconHd;

}
declare module '@volst/ui-components/src/general/icon/IconHdrOff' {
	 let IconHdrOff: (props: any) => JSX.Element;
	export default IconHdrOff;

}
declare module '@volst/ui-components/src/general/icon/IconHdrOn' {
	 let IconHdrOn: (props: any) => JSX.Element;
	export default IconHdrOn;

}
declare module '@volst/ui-components/src/general/icon/IconHdrStrong' {
	 let IconHdrStrong: (props: any) => JSX.Element;
	export default IconHdrStrong;

}
declare module '@volst/ui-components/src/general/icon/IconHdrWeak' {
	 let IconHdrWeak: (props: any) => JSX.Element;
	export default IconHdrWeak;

}
declare module '@volst/ui-components/src/general/icon/IconHeadset' {
	 let IconHeadset: (props: any) => JSX.Element;
	export default IconHeadset;

}
declare module '@volst/ui-components/src/general/icon/IconHeadsetMic' {
	 let IconHeadsetMic: (props: any) => JSX.Element;
	export default IconHeadsetMic;

}
declare module '@volst/ui-components/src/general/icon/IconHealing' {
	 let IconHealing: (props: any) => JSX.Element;
	export default IconHealing;

}
declare module '@volst/ui-components/src/general/icon/IconHearing' {
	 let IconHearing: (props: any) => JSX.Element;
	export default IconHearing;

}
declare module '@volst/ui-components/src/general/icon/IconHelp' {
	 let IconHelp: (props: any) => JSX.Element;
	export default IconHelp;

}
declare module '@volst/ui-components/src/general/icon/IconHelpOutline' {
	 let IconHelpOutline: (props: any) => JSX.Element;
	export default IconHelpOutline;

}
declare module '@volst/ui-components/src/general/icon/IconHighlight' {
	 let IconHighlight: (props: any) => JSX.Element;
	export default IconHighlight;

}
declare module '@volst/ui-components/src/general/icon/IconHighlightOff' {
	 let IconHighlightOff: (props: any) => JSX.Element;
	export default IconHighlightOff;

}
declare module '@volst/ui-components/src/general/icon/IconHighQuality' {
	 let IconHighQuality: (props: any) => JSX.Element;
	export default IconHighQuality;

}
declare module '@volst/ui-components/src/general/icon/IconHistory' {
	 let IconHistory: (props: any) => JSX.Element;
	export default IconHistory;

}
declare module '@volst/ui-components/src/general/icon/IconHome' {
	 let IconHome: (props: any) => JSX.Element;
	export default IconHome;

}
declare module '@volst/ui-components/src/general/icon/IconHotel' {
	 let IconHotel: (props: any) => JSX.Element;
	export default IconHotel;

}
declare module '@volst/ui-components/src/general/icon/IconHotTub' {
	 let IconHotTub: (props: any) => JSX.Element;
	export default IconHotTub;

}
declare module '@volst/ui-components/src/general/icon/IconHourglassEmpty' {
	 let IconHourglassEmpty: (props: any) => JSX.Element;
	export default IconHourglassEmpty;

}
declare module '@volst/ui-components/src/general/icon/IconHourglassFull' {
	 let IconHourglassFull: (props: any) => JSX.Element;
	export default IconHourglassFull;

}
declare module '@volst/ui-components/src/general/icon/IconHttp' {
	 let IconHttp: (props: any) => JSX.Element;
	export default IconHttp;

}
declare module '@volst/ui-components/src/general/icon/IconHttps' {
	 let IconHttps: (props: any) => JSX.Element;
	export default IconHttps;

}
declare module '@volst/ui-components/src/general/icon/IconImage' {
	 let IconImage: (props: any) => JSX.Element;
	export default IconImage;

}
declare module '@volst/ui-components/src/general/icon/IconImageAspectRatio' {
	 let IconImageAspectRatio: (props: any) => JSX.Element;
	export default IconImageAspectRatio;

}
declare module '@volst/ui-components/src/general/icon/IconImportantDevices' {
	 let IconImportantDevices: (props: any) => JSX.Element;
	export default IconImportantDevices;

}
declare module '@volst/ui-components/src/general/icon/IconImportContacts' {
	 let IconImportContacts: (props: any) => JSX.Element;
	export default IconImportContacts;

}
declare module '@volst/ui-components/src/general/icon/IconImportExport' {
	 let IconImportExport: (props: any) => JSX.Element;
	export default IconImportExport;

}
declare module '@volst/ui-components/src/general/icon/IconInbox' {
	 let IconInbox: (props: any) => JSX.Element;
	export default IconInbox;

}
declare module '@volst/ui-components/src/general/icon/IconIndeterminateCheckBox' {
	 let IconIndeterminateCheckBox: (props: any) => JSX.Element;
	export default IconIndeterminateCheckBox;

}
declare module '@volst/ui-components/src/general/icon/IconInfo' {
	 let IconInfo: (props: any) => JSX.Element;
	export default IconInfo;

}
declare module '@volst/ui-components/src/general/icon/IconInfoOutline' {
	 let IconInfoOutline: (props: any) => JSX.Element;
	export default IconInfoOutline;

}
declare module '@volst/ui-components/src/general/icon/IconInput' {
	 let IconInput: (props: any) => JSX.Element;
	export default IconInput;

}
declare module '@volst/ui-components/src/general/icon/IconInsertChart' {
	 let IconInsertChart: (props: any) => JSX.Element;
	export default IconInsertChart;

}
declare module '@volst/ui-components/src/general/icon/IconInsertComment' {
	 let IconInsertComment: (props: any) => JSX.Element;
	export default IconInsertComment;

}
declare module '@volst/ui-components/src/general/icon/IconInsertDriveFile' {
	 let IconInsertDriveFile: (props: any) => JSX.Element;
	export default IconInsertDriveFile;

}
declare module '@volst/ui-components/src/general/icon/IconInsertEmoticon' {
	 let IconInsertEmoticon: (props: any) => JSX.Element;
	export default IconInsertEmoticon;

}
declare module '@volst/ui-components/src/general/icon/IconInsertInvitation' {
	 let IconInsertInvitation: (props: any) => JSX.Element;
	export default IconInsertInvitation;

}
declare module '@volst/ui-components/src/general/icon/IconInsertLink' {
	 let IconInsertLink: (props: any) => JSX.Element;
	export default IconInsertLink;

}
declare module '@volst/ui-components/src/general/icon/IconInsertPhoto' {
	 let IconInsertPhoto: (props: any) => JSX.Element;
	export default IconInsertPhoto;

}
declare module '@volst/ui-components/src/general/icon/IconInvertColors' {
	 let IconInvertColors: (props: any) => JSX.Element;
	export default IconInvertColors;

}
declare module '@volst/ui-components/src/general/icon/IconInvertColorsOff' {
	 let IconInvertColorsOff: (props: any) => JSX.Element;
	export default IconInvertColorsOff;

}
declare module '@volst/ui-components/src/general/icon/IconIso' {
	 let IconIso: (props: any) => JSX.Element;
	export default IconIso;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboard' {
	 let IconKeyboard: (props: any) => JSX.Element;
	export default IconKeyboard;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardArrowLeft' {
	 let IconKeyboardArrowLeft: (props: any) => JSX.Element;
	export default IconKeyboardArrowLeft;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardArrowRight' {
	 let IconKeyboardArrowRight: (props: any) => JSX.Element;
	export default IconKeyboardArrowRight;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardBackspace' {
	 let IconKeyboardBackspace: (props: any) => JSX.Element;
	export default IconKeyboardBackspace;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardCapslock' {
	 let IconKeyboardCapslock: (props: any) => JSX.Element;
	export default IconKeyboardCapslock;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardHide' {
	 let IconKeyboardHide: (props: any) => JSX.Element;
	export default IconKeyboardHide;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardReturn' {
	 let IconKeyboardReturn: (props: any) => JSX.Element;
	export default IconKeyboardReturn;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardTab' {
	 let IconKeyboardTab: (props: any) => JSX.Element;
	export default IconKeyboardTab;

}
declare module '@volst/ui-components/src/general/icon/IconKeyboardVoice' {
	 let IconKeyboardVoice: (props: any) => JSX.Element;
	export default IconKeyboardVoice;

}
declare module '@volst/ui-components/src/general/icon/IconKitchen' {
	 let IconKitchen: (props: any) => JSX.Element;
	export default IconKitchen;

}
declare module '@volst/ui-components/src/general/icon/IconLabel' {
	 let IconLabel: (props: any) => JSX.Element;
	export default IconLabel;

}
declare module '@volst/ui-components/src/general/icon/IconLabelOutline' {
	 let IconLabelOutline: (props: any) => JSX.Element;
	export default IconLabelOutline;

}
declare module '@volst/ui-components/src/general/icon/IconLandscape' {
	 let IconLandscape: (props: any) => JSX.Element;
	export default IconLandscape;

}
declare module '@volst/ui-components/src/general/icon/IconLanguage' {
	 let IconLanguage: (props: any) => JSX.Element;
	export default IconLanguage;

}
declare module '@volst/ui-components/src/general/icon/IconLaptop' {
	 let IconLaptop: (props: any) => JSX.Element;
	export default IconLaptop;

}
declare module '@volst/ui-components/src/general/icon/IconLaptopChromebook' {
	 let IconLaptopChromebook: (props: any) => JSX.Element;
	export default IconLaptopChromebook;

}
declare module '@volst/ui-components/src/general/icon/IconLaptopMac' {
	 let IconLaptopMac: (props: any) => JSX.Element;
	export default IconLaptopMac;

}
declare module '@volst/ui-components/src/general/icon/IconLaptopWindows' {
	 let IconLaptopWindows: (props: any) => JSX.Element;
	export default IconLaptopWindows;

}
declare module '@volst/ui-components/src/general/icon/IconLastPage' {
	 let IconLastPage: (props: any) => JSX.Element;
	export default IconLastPage;

}
declare module '@volst/ui-components/src/general/icon/IconLaunch' {
	 let IconLaunch: (props: any) => JSX.Element;
	export default IconLaunch;

}
declare module '@volst/ui-components/src/general/icon/IconLayers' {
	 let IconLayers: (props: any) => JSX.Element;
	export default IconLayers;

}
declare module '@volst/ui-components/src/general/icon/IconLayersClear' {
	 let IconLayersClear: (props: any) => JSX.Element;
	export default IconLayersClear;

}
declare module '@volst/ui-components/src/general/icon/IconLeakAdd' {
	 let IconLeakAdd: (props: any) => JSX.Element;
	export default IconLeakAdd;

}
declare module '@volst/ui-components/src/general/icon/IconLeakRemove' {
	 let IconLeakRemove: (props: any) => JSX.Element;
	export default IconLeakRemove;

}
declare module '@volst/ui-components/src/general/icon/IconLens' {
	 let IconLens: (props: any) => JSX.Element;
	export default IconLens;

}
declare module '@volst/ui-components/src/general/icon/IconLibraryAdd' {
	 let IconLibraryAdd: (props: any) => JSX.Element;
	export default IconLibraryAdd;

}
declare module '@volst/ui-components/src/general/icon/IconLibraryBooks' {
	 let IconLibraryBooks: (props: any) => JSX.Element;
	export default IconLibraryBooks;

}
declare module '@volst/ui-components/src/general/icon/IconLibraryMusic' {
	 let IconLibraryMusic: (props: any) => JSX.Element;
	export default IconLibraryMusic;

}
declare module '@volst/ui-components/src/general/icon/IconLightbulbOutline' {
	 let IconLightbulbOutline: (props: any) => JSX.Element;
	export default IconLightbulbOutline;

}
declare module '@volst/ui-components/src/general/icon/IconLinearScale' {
	 let IconLinearScale: (props: any) => JSX.Element;
	export default IconLinearScale;

}
declare module '@volst/ui-components/src/general/icon/IconLineStyle' {
	 let IconLineStyle: (props: any) => JSX.Element;
	export default IconLineStyle;

}
declare module '@volst/ui-components/src/general/icon/IconLineWeight' {
	 let IconLineWeight: (props: any) => JSX.Element;
	export default IconLineWeight;

}
declare module '@volst/ui-components/src/general/icon/IconLink' {
	 let IconLink: (props: any) => JSX.Element;
	export default IconLink;

}
declare module '@volst/ui-components/src/general/icon/IconLinkedCamera' {
	 let IconLinkedCamera: (props: any) => JSX.Element;
	export default IconLinkedCamera;

}
declare module '@volst/ui-components/src/general/icon/IconList' {
	 let IconList: (props: any) => JSX.Element;
	export default IconList;

}
declare module '@volst/ui-components/src/general/icon/IconLiveHelp' {
	 let IconLiveHelp: (props: any) => JSX.Element;
	export default IconLiveHelp;

}
declare module '@volst/ui-components/src/general/icon/IconLiveTv' {
	 let IconLiveTv: (props: any) => JSX.Element;
	export default IconLiveTv;

}
declare module '@volst/ui-components/src/general/icon/IconLocalActivity' {
	 let IconLocalActivity: (props: any) => JSX.Element;
	export default IconLocalActivity;

}
declare module '@volst/ui-components/src/general/icon/IconLocalAirport' {
	 let IconLocalAirport: (props: any) => JSX.Element;
	export default IconLocalAirport;

}
declare module '@volst/ui-components/src/general/icon/IconLocalAtm' {
	 let IconLocalAtm: (props: any) => JSX.Element;
	export default IconLocalAtm;

}
declare module '@volst/ui-components/src/general/icon/IconLocalBar' {
	 let IconLocalBar: (props: any) => JSX.Element;
	export default IconLocalBar;

}
declare module '@volst/ui-components/src/general/icon/IconLocalCafe' {
	 let IconLocalCafe: (props: any) => JSX.Element;
	export default IconLocalCafe;

}
declare module '@volst/ui-components/src/general/icon/IconLocalCarWash' {
	 let IconLocalCarWash: (props: any) => JSX.Element;
	export default IconLocalCarWash;

}
declare module '@volst/ui-components/src/general/icon/IconLocalConvenienceStore' {
	 let IconLocalConvenienceStore: (props: any) => JSX.Element;
	export default IconLocalConvenienceStore;

}
declare module '@volst/ui-components/src/general/icon/IconLocalDining' {
	 let IconLocalDining: (props: any) => JSX.Element;
	export default IconLocalDining;

}
declare module '@volst/ui-components/src/general/icon/IconLocalDrink' {
	 let IconLocalDrink: (props: any) => JSX.Element;
	export default IconLocalDrink;

}
declare module '@volst/ui-components/src/general/icon/IconLocalFlorist' {
	 let IconLocalFlorist: (props: any) => JSX.Element;
	export default IconLocalFlorist;

}
declare module '@volst/ui-components/src/general/icon/IconLocalGasStation' {
	 let IconLocalGasStation: (props: any) => JSX.Element;
	export default IconLocalGasStation;

}
declare module '@volst/ui-components/src/general/icon/IconLocalGroceryStore' {
	 let IconLocalGroceryStore: (props: any) => JSX.Element;
	export default IconLocalGroceryStore;

}
declare module '@volst/ui-components/src/general/icon/IconLocalHospital' {
	 let IconLocalHospital: (props: any) => JSX.Element;
	export default IconLocalHospital;

}
declare module '@volst/ui-components/src/general/icon/IconLocalHotel' {
	 let IconLocalHotel: (props: any) => JSX.Element;
	export default IconLocalHotel;

}
declare module '@volst/ui-components/src/general/icon/IconLocalLaundryService' {
	 let IconLocalLaundryService: (props: any) => JSX.Element;
	export default IconLocalLaundryService;

}
declare module '@volst/ui-components/src/general/icon/IconLocalLibrary' {
	 let IconLocalLibrary: (props: any) => JSX.Element;
	export default IconLocalLibrary;

}
declare module '@volst/ui-components/src/general/icon/IconLocalMall' {
	 let IconLocalMall: (props: any) => JSX.Element;
	export default IconLocalMall;

}
declare module '@volst/ui-components/src/general/icon/IconLocalMovies' {
	 let IconLocalMovies: (props: any) => JSX.Element;
	export default IconLocalMovies;

}
declare module '@volst/ui-components/src/general/icon/IconLocalOffer' {
	 let IconLocalOffer: (props: any) => JSX.Element;
	export default IconLocalOffer;

}
declare module '@volst/ui-components/src/general/icon/IconLocalParking' {
	 let IconLocalParking: (props: any) => JSX.Element;
	export default IconLocalParking;

}
declare module '@volst/ui-components/src/general/icon/IconLocalPharmacy' {
	 let IconLocalPharmacy: (props: any) => JSX.Element;
	export default IconLocalPharmacy;

}
declare module '@volst/ui-components/src/general/icon/IconLocalPhone' {
	 let IconLocalPhone: (props: any) => JSX.Element;
	export default IconLocalPhone;

}
declare module '@volst/ui-components/src/general/icon/IconLocalPizza' {
	 let IconLocalPizza: (props: any) => JSX.Element;
	export default IconLocalPizza;

}
declare module '@volst/ui-components/src/general/icon/IconLocalPlay' {
	 let IconLocalPlay: (props: any) => JSX.Element;
	export default IconLocalPlay;

}
declare module '@volst/ui-components/src/general/icon/IconLocalPostOffice' {
	 let IconLocalPostOffice: (props: any) => JSX.Element;
	export default IconLocalPostOffice;

}
declare module '@volst/ui-components/src/general/icon/IconLocalPrintshop' {
	 let IconLocalPrintshop: (props: any) => JSX.Element;
	export default IconLocalPrintshop;

}
declare module '@volst/ui-components/src/general/icon/IconLocalSee' {
	 let IconLocalSee: (props: any) => JSX.Element;
	export default IconLocalSee;

}
declare module '@volst/ui-components/src/general/icon/IconLocalShipping' {
	 let IconLocalShipping: (props: any) => JSX.Element;
	export default IconLocalShipping;

}
declare module '@volst/ui-components/src/general/icon/IconLocalTaxi' {
	 let IconLocalTaxi: (props: any) => JSX.Element;
	export default IconLocalTaxi;

}
declare module '@volst/ui-components/src/general/icon/IconLocationCity' {
	 let IconLocationCity: (props: any) => JSX.Element;
	export default IconLocationCity;

}
declare module '@volst/ui-components/src/general/icon/IconLocationDisabled' {
	 let IconLocationDisabled: (props: any) => JSX.Element;
	export default IconLocationDisabled;

}
declare module '@volst/ui-components/src/general/icon/IconLocationOff' {
	 let IconLocationOff: (props: any) => JSX.Element;
	export default IconLocationOff;

}
declare module '@volst/ui-components/src/general/icon/IconLocationOn' {
	 let IconLocationOn: (props: any) => JSX.Element;
	export default IconLocationOn;

}
declare module '@volst/ui-components/src/general/icon/IconLocationSearching' {
	 let IconLocationSearching: (props: any) => JSX.Element;
	export default IconLocationSearching;

}
declare module '@volst/ui-components/src/general/icon/IconLock' {
	 let IconLock: (props: any) => JSX.Element;
	export default IconLock;

}
declare module '@volst/ui-components/src/general/icon/IconLockOpen' {
	 let IconLockOpen: (props: any) => JSX.Element;
	export default IconLockOpen;

}
declare module '@volst/ui-components/src/general/icon/IconLockOutline' {
	 let IconLockOutline: (props: any) => JSX.Element;
	export default IconLockOutline;

}
declare module '@volst/ui-components/src/general/icon/IconLooks' {
	 let IconLooks: (props: any) => JSX.Element;
	export default IconLooks;

}
declare module '@volst/ui-components/src/general/icon/IconLooks3' {
	 let IconLooks3: (props: any) => JSX.Element;
	export default IconLooks3;

}
declare module '@volst/ui-components/src/general/icon/IconLooks4' {
	 let IconLooks4: (props: any) => JSX.Element;
	export default IconLooks4;

}
declare module '@volst/ui-components/src/general/icon/IconLooks5' {
	 let IconLooks5: (props: any) => JSX.Element;
	export default IconLooks5;

}
declare module '@volst/ui-components/src/general/icon/IconLooks6' {
	 let IconLooks6: (props: any) => JSX.Element;
	export default IconLooks6;

}
declare module '@volst/ui-components/src/general/icon/IconLooksOne' {
	 let IconLooksOne: (props: any) => JSX.Element;
	export default IconLooksOne;

}
declare module '@volst/ui-components/src/general/icon/IconLooksTwo' {
	 let IconLooksTwo: (props: any) => JSX.Element;
	export default IconLooksTwo;

}
declare module '@volst/ui-components/src/general/icon/IconLoop' {
	 let IconLoop: (props: any) => JSX.Element;
	export default IconLoop;

}
declare module '@volst/ui-components/src/general/icon/IconLoupe' {
	 let IconLoupe: (props: any) => JSX.Element;
	export default IconLoupe;

}
declare module '@volst/ui-components/src/general/icon/IconLowPriority' {
	 let IconLowPriority: (props: any) => JSX.Element;
	export default IconLowPriority;

}
declare module '@volst/ui-components/src/general/icon/IconLoyalty' {
	 let IconLoyalty: (props: any) => JSX.Element;
	export default IconLoyalty;

}
declare module '@volst/ui-components/src/general/icon/IconMail' {
	 let IconMail: (props: any) => JSX.Element;
	export default IconMail;

}
declare module '@volst/ui-components/src/general/icon/IconMailOutline' {
	 let IconMailOutline: (props: any) => JSX.Element;
	export default IconMailOutline;

}
declare module '@volst/ui-components/src/general/icon/IconMap' {
	 let IconMap: (props: any) => JSX.Element;
	export default IconMap;

}
declare module '@volst/ui-components/src/general/icon/IconMarkunread' {
	 let IconMarkunread: (props: any) => JSX.Element;
	export default IconMarkunread;

}
declare module '@volst/ui-components/src/general/icon/IconMarkunreadMailbox' {
	 let IconMarkunreadMailbox: (props: any) => JSX.Element;
	export default IconMarkunreadMailbox;

}
declare module '@volst/ui-components/src/general/icon/IconMemory' {
	 let IconMemory: (props: any) => JSX.Element;
	export default IconMemory;

}
declare module '@volst/ui-components/src/general/icon/IconMenu' {
	 let IconMenu: (props: any) => JSX.Element;
	export default IconMenu;

}
declare module '@volst/ui-components/src/general/icon/IconMergeType' {
	 let IconMergeType: (props: any) => JSX.Element;
	export default IconMergeType;

}
declare module '@volst/ui-components/src/general/icon/IconMessage' {
	 let IconMessage: (props: any) => JSX.Element;
	export default IconMessage;

}
declare module '@volst/ui-components/src/general/icon/IconMic' {
	 let IconMic: (props: any) => JSX.Element;
	export default IconMic;

}
declare module '@volst/ui-components/src/general/icon/IconMicNone' {
	 let IconMicNone: (props: any) => JSX.Element;
	export default IconMicNone;

}
declare module '@volst/ui-components/src/general/icon/IconMicOff' {
	 let IconMicOff: (props: any) => JSX.Element;
	export default IconMicOff;

}
declare module '@volst/ui-components/src/general/icon/IconMms' {
	 let IconMms: (props: any) => JSX.Element;
	export default IconMms;

}
declare module '@volst/ui-components/src/general/icon/IconModeComment' {
	 let IconModeComment: (props: any) => JSX.Element;
	export default IconModeComment;

}
declare module '@volst/ui-components/src/general/icon/IconModeEdit' {
	 let IconModeEdit: (props: any) => JSX.Element;
	export default IconModeEdit;

}
declare module '@volst/ui-components/src/general/icon/IconMonetizationOn' {
	 let IconMonetizationOn: (props: any) => JSX.Element;
	export default IconMonetizationOn;

}
declare module '@volst/ui-components/src/general/icon/IconMoneyOff' {
	 let IconMoneyOff: (props: any) => JSX.Element;
	export default IconMoneyOff;

}
declare module '@volst/ui-components/src/general/icon/IconMonochromePhotos' {
	 let IconMonochromePhotos: (props: any) => JSX.Element;
	export default IconMonochromePhotos;

}
declare module '@volst/ui-components/src/general/icon/IconMood' {
	 let IconMood: (props: any) => JSX.Element;
	export default IconMood;

}
declare module '@volst/ui-components/src/general/icon/IconMoodBad' {
	 let IconMoodBad: (props: any) => JSX.Element;
	export default IconMoodBad;

}
declare module '@volst/ui-components/src/general/icon/IconMore' {
	 let IconMore: (props: any) => JSX.Element;
	export default IconMore;

}
declare module '@volst/ui-components/src/general/icon/IconMoreHoriz' {
	 let IconMoreHoriz: (props: any) => JSX.Element;
	export default IconMoreHoriz;

}
declare module '@volst/ui-components/src/general/icon/IconMoreVert' {
	 let IconMoreVert: (props: any) => JSX.Element;
	export default IconMoreVert;

}
declare module '@volst/ui-components/src/general/icon/IconMotorcycle' {
	 let IconMotorcycle: (props: any) => JSX.Element;
	export default IconMotorcycle;

}
declare module '@volst/ui-components/src/general/icon/IconMouse' {
	 let IconMouse: (props: any) => JSX.Element;
	export default IconMouse;

}
declare module '@volst/ui-components/src/general/icon/IconMoveToInbox' {
	 let IconMoveToInbox: (props: any) => JSX.Element;
	export default IconMoveToInbox;

}
declare module '@volst/ui-components/src/general/icon/IconMovie' {
	 let IconMovie: (props: any) => JSX.Element;
	export default IconMovie;

}
declare module '@volst/ui-components/src/general/icon/IconMovieCreation' {
	 let IconMovieCreation: (props: any) => JSX.Element;
	export default IconMovieCreation;

}
declare module '@volst/ui-components/src/general/icon/IconMovieFilter' {
	 let IconMovieFilter: (props: any) => JSX.Element;
	export default IconMovieFilter;

}
declare module '@volst/ui-components/src/general/icon/IconMultilineChart' {
	 let IconMultilineChart: (props: any) => JSX.Element;
	export default IconMultilineChart;

}
declare module '@volst/ui-components/src/general/icon/IconMusicNote' {
	 let IconMusicNote: (props: any) => JSX.Element;
	export default IconMusicNote;

}
declare module '@volst/ui-components/src/general/icon/IconMusicVideo' {
	 let IconMusicVideo: (props: any) => JSX.Element;
	export default IconMusicVideo;

}
declare module '@volst/ui-components/src/general/icon/IconMyLocation' {
	 let IconMyLocation: (props: any) => JSX.Element;
	export default IconMyLocation;

}
declare module '@volst/ui-components/src/general/icon/IconNature' {
	 let IconNature: (props: any) => JSX.Element;
	export default IconNature;

}
declare module '@volst/ui-components/src/general/icon/IconNaturePeople' {
	 let IconNaturePeople: (props: any) => JSX.Element;
	export default IconNaturePeople;

}
declare module '@volst/ui-components/src/general/icon/IconNavigation' {
	 let IconNavigation: (props: any) => JSX.Element;
	export default IconNavigation;

}
declare module '@volst/ui-components/src/general/icon/IconNearMe' {
	 let IconNearMe: (props: any) => JSX.Element;
	export default IconNearMe;

}
declare module '@volst/ui-components/src/general/icon/IconNetworkCell' {
	 let IconNetworkCell: (props: any) => JSX.Element;
	export default IconNetworkCell;

}
declare module '@volst/ui-components/src/general/icon/IconNetworkCheck' {
	 let IconNetworkCheck: (props: any) => JSX.Element;
	export default IconNetworkCheck;

}
declare module '@volst/ui-components/src/general/icon/IconNetworkLocked' {
	 let IconNetworkLocked: (props: any) => JSX.Element;
	export default IconNetworkLocked;

}
declare module '@volst/ui-components/src/general/icon/IconNetworkWifi' {
	 let IconNetworkWifi: (props: any) => JSX.Element;
	export default IconNetworkWifi;

}
declare module '@volst/ui-components/src/general/icon/IconNewReleases' {
	 let IconNewReleases: (props: any) => JSX.Element;
	export default IconNewReleases;

}
declare module '@volst/ui-components/src/general/icon/IconNextWeek' {
	 let IconNextWeek: (props: any) => JSX.Element;
	export default IconNextWeek;

}
declare module '@volst/ui-components/src/general/icon/IconNfc' {
	 let IconNfc: (props: any) => JSX.Element;
	export default IconNfc;

}
declare module '@volst/ui-components/src/general/icon/IconNoEncryption' {
	 let IconNoEncryption: (props: any) => JSX.Element;
	export default IconNoEncryption;

}
declare module '@volst/ui-components/src/general/icon/IconNoSim' {
	 let IconNoSim: (props: any) => JSX.Element;
	export default IconNoSim;

}
declare module '@volst/ui-components/src/general/icon/IconNote' {
	 let IconNote: (props: any) => JSX.Element;
	export default IconNote;

}
declare module '@volst/ui-components/src/general/icon/IconNoteAdd' {
	 let IconNoteAdd: (props: any) => JSX.Element;
	export default IconNoteAdd;

}
declare module '@volst/ui-components/src/general/icon/IconNotifications' {
	 let IconNotifications: (props: any) => JSX.Element;
	export default IconNotifications;

}
declare module '@volst/ui-components/src/general/icon/IconNotificationsActive' {
	 let IconNotificationsActive: (props: any) => JSX.Element;
	export default IconNotificationsActive;

}
declare module '@volst/ui-components/src/general/icon/IconNotificationsNone' {
	 let IconNotificationsNone: (props: any) => JSX.Element;
	export default IconNotificationsNone;

}
declare module '@volst/ui-components/src/general/icon/IconNotificationsOff' {
	 let IconNotificationsOff: (props: any) => JSX.Element;
	export default IconNotificationsOff;

}
declare module '@volst/ui-components/src/general/icon/IconNotificationsPaused' {
	 let IconNotificationsPaused: (props: any) => JSX.Element;
	export default IconNotificationsPaused;

}
declare module '@volst/ui-components/src/general/icon/IconNotInterested' {
	 let IconNotInterested: (props: any) => JSX.Element;
	export default IconNotInterested;

}
declare module '@volst/ui-components/src/general/icon/IconOfflinePin' {
	 let IconOfflinePin: (props: any) => JSX.Element;
	export default IconOfflinePin;

}
declare module '@volst/ui-components/src/general/icon/IconOndemandVideo' {
	 let IconOndemandVideo: (props: any) => JSX.Element;
	export default IconOndemandVideo;

}
declare module '@volst/ui-components/src/general/icon/IconOpacity' {
	 let IconOpacity: (props: any) => JSX.Element;
	export default IconOpacity;

}
declare module '@volst/ui-components/src/general/icon/IconOpenInBrowser' {
	 let IconOpenInBrowser: (props: any) => JSX.Element;
	export default IconOpenInBrowser;

}
declare module '@volst/ui-components/src/general/icon/IconOpenInNew' {
	 let IconOpenInNew: (props: any) => JSX.Element;
	export default IconOpenInNew;

}
declare module '@volst/ui-components/src/general/icon/IconOpenWith' {
	 let IconOpenWith: (props: any) => JSX.Element;
	export default IconOpenWith;

}
declare module '@volst/ui-components/src/general/icon/IconPages' {
	 let IconPages: (props: any) => JSX.Element;
	export default IconPages;

}
declare module '@volst/ui-components/src/general/icon/IconPageview' {
	 let IconPageview: (props: any) => JSX.Element;
	export default IconPageview;

}
declare module '@volst/ui-components/src/general/icon/IconPalette' {
	 let IconPalette: (props: any) => JSX.Element;
	export default IconPalette;

}
declare module '@volst/ui-components/src/general/icon/IconPanorama' {
	 let IconPanorama: (props: any) => JSX.Element;
	export default IconPanorama;

}
declare module '@volst/ui-components/src/general/icon/IconPanoramaFishEye' {
	 let IconPanoramaFishEye: (props: any) => JSX.Element;
	export default IconPanoramaFishEye;

}
declare module '@volst/ui-components/src/general/icon/IconPanoramaHorizontal' {
	 let IconPanoramaHorizontal: (props: any) => JSX.Element;
	export default IconPanoramaHorizontal;

}
declare module '@volst/ui-components/src/general/icon/IconPanoramaVertical' {
	 let IconPanoramaVertical: (props: any) => JSX.Element;
	export default IconPanoramaVertical;

}
declare module '@volst/ui-components/src/general/icon/IconPanoramaWideAngle' {
	 let IconPanoramaWideAngle: (props: any) => JSX.Element;
	export default IconPanoramaWideAngle;

}
declare module '@volst/ui-components/src/general/icon/IconPanTool' {
	 let IconPanTool: (props: any) => JSX.Element;
	export default IconPanTool;

}
declare module '@volst/ui-components/src/general/icon/IconPartyMode' {
	 let IconPartyMode: (props: any) => JSX.Element;
	export default IconPartyMode;

}
declare module '@volst/ui-components/src/general/icon/IconPause' {
	 let IconPause: (props: any) => JSX.Element;
	export default IconPause;

}
declare module '@volst/ui-components/src/general/icon/IconPauseCircleFilled' {
	 let IconPauseCircleFilled: (props: any) => JSX.Element;
	export default IconPauseCircleFilled;

}
declare module '@volst/ui-components/src/general/icon/IconPauseCircleOutline' {
	 let IconPauseCircleOutline: (props: any) => JSX.Element;
	export default IconPauseCircleOutline;

}
declare module '@volst/ui-components/src/general/icon/IconPayment' {
	 let IconPayment: (props: any) => JSX.Element;
	export default IconPayment;

}
declare module '@volst/ui-components/src/general/icon/IconPeople' {
	 let IconPeople: (props: any) => JSX.Element;
	export default IconPeople;

}
declare module '@volst/ui-components/src/general/icon/IconPeopleOutline' {
	 let IconPeopleOutline: (props: any) => JSX.Element;
	export default IconPeopleOutline;

}
declare module '@volst/ui-components/src/general/icon/IconPermCameraMic' {
	 let IconPermCameraMic: (props: any) => JSX.Element;
	export default IconPermCameraMic;

}
declare module '@volst/ui-components/src/general/icon/IconPermContactCalendar' {
	 let IconPermContactCalendar: (props: any) => JSX.Element;
	export default IconPermContactCalendar;

}
declare module '@volst/ui-components/src/general/icon/IconPermDataSetting' {
	 let IconPermDataSetting: (props: any) => JSX.Element;
	export default IconPermDataSetting;

}
declare module '@volst/ui-components/src/general/icon/IconPermDeviceInformation' {
	 let IconPermDeviceInformation: (props: any) => JSX.Element;
	export default IconPermDeviceInformation;

}
declare module '@volst/ui-components/src/general/icon/IconPermIdentity' {
	 let IconPermIdentity: (props: any) => JSX.Element;
	export default IconPermIdentity;

}
declare module '@volst/ui-components/src/general/icon/IconPermMedia' {
	 let IconPermMedia: (props: any) => JSX.Element;
	export default IconPermMedia;

}
declare module '@volst/ui-components/src/general/icon/IconPermPhoneMsg' {
	 let IconPermPhoneMsg: (props: any) => JSX.Element;
	export default IconPermPhoneMsg;

}
declare module '@volst/ui-components/src/general/icon/IconPermScanWifi' {
	 let IconPermScanWifi: (props: any) => JSX.Element;
	export default IconPermScanWifi;

}
declare module '@volst/ui-components/src/general/icon/IconPerson' {
	 let IconPerson: (props: any) => JSX.Element;
	export default IconPerson;

}
declare module '@volst/ui-components/src/general/icon/IconPersonAdd' {
	 let IconPersonAdd: (props: any) => JSX.Element;
	export default IconPersonAdd;

}
declare module '@volst/ui-components/src/general/icon/IconPersonalVideo' {
	 let IconPersonalVideo: (props: any) => JSX.Element;
	export default IconPersonalVideo;

}
declare module '@volst/ui-components/src/general/icon/IconPersonOutline' {
	 let IconPersonOutline: (props: any) => JSX.Element;
	export default IconPersonOutline;

}
declare module '@volst/ui-components/src/general/icon/IconPersonPin' {
	 let IconPersonPin: (props: any) => JSX.Element;
	export default IconPersonPin;

}
declare module '@volst/ui-components/src/general/icon/IconPersonPinCircle' {
	 let IconPersonPinCircle: (props: any) => JSX.Element;
	export default IconPersonPinCircle;

}
declare module '@volst/ui-components/src/general/icon/IconPets' {
	 let IconPets: (props: any) => JSX.Element;
	export default IconPets;

}
declare module '@volst/ui-components/src/general/icon/IconPhone' {
	 let IconPhone: (props: any) => JSX.Element;
	export default IconPhone;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneAndroid' {
	 let IconPhoneAndroid: (props: any) => JSX.Element;
	export default IconPhoneAndroid;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneBluetoothSpeaker' {
	 let IconPhoneBluetoothSpeaker: (props: any) => JSX.Element;
	export default IconPhoneBluetoothSpeaker;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneForwarded' {
	 let IconPhoneForwarded: (props: any) => JSX.Element;
	export default IconPhoneForwarded;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneInTalk' {
	 let IconPhoneInTalk: (props: any) => JSX.Element;
	export default IconPhoneInTalk;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneIphone' {
	 let IconPhoneIphone: (props: any) => JSX.Element;
	export default IconPhoneIphone;

}
declare module '@volst/ui-components/src/general/icon/IconPhonelink' {
	 let IconPhonelink: (props: any) => JSX.Element;
	export default IconPhonelink;

}
declare module '@volst/ui-components/src/general/icon/IconPhonelinkErase' {
	 let IconPhonelinkErase: (props: any) => JSX.Element;
	export default IconPhonelinkErase;

}
declare module '@volst/ui-components/src/general/icon/IconPhonelinkLock' {
	 let IconPhonelinkLock: (props: any) => JSX.Element;
	export default IconPhonelinkLock;

}
declare module '@volst/ui-components/src/general/icon/IconPhonelinkOff' {
	 let IconPhonelinkOff: (props: any) => JSX.Element;
	export default IconPhonelinkOff;

}
declare module '@volst/ui-components/src/general/icon/IconPhonelinkRing' {
	 let IconPhonelinkRing: (props: any) => JSX.Element;
	export default IconPhonelinkRing;

}
declare module '@volst/ui-components/src/general/icon/IconPhonelinkSetup' {
	 let IconPhonelinkSetup: (props: any) => JSX.Element;
	export default IconPhonelinkSetup;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneLocked' {
	 let IconPhoneLocked: (props: any) => JSX.Element;
	export default IconPhoneLocked;

}
declare module '@volst/ui-components/src/general/icon/IconPhoneMissed' {
	 let IconPhoneMissed: (props: any) => JSX.Element;
	export default IconPhoneMissed;

}
declare module '@volst/ui-components/src/general/icon/IconPhonePaused' {
	 let IconPhonePaused: (props: any) => JSX.Element;
	export default IconPhonePaused;

}
declare module '@volst/ui-components/src/general/icon/IconPhoto' {
	 let IconPhoto: (props: any) => JSX.Element;
	export default IconPhoto;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoAlbum' {
	 let IconPhotoAlbum: (props: any) => JSX.Element;
	export default IconPhotoAlbum;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoCamera' {
	 let IconPhotoCamera: (props: any) => JSX.Element;
	export default IconPhotoCamera;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoFilter' {
	 let IconPhotoFilter: (props: any) => JSX.Element;
	export default IconPhotoFilter;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoLibrary' {
	 let IconPhotoLibrary: (props: any) => JSX.Element;
	export default IconPhotoLibrary;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoSizeSelectActual' {
	 let IconPhotoSizeSelectActual: (props: any) => JSX.Element;
	export default IconPhotoSizeSelectActual;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoSizeSelectLarge' {
	 let IconPhotoSizeSelectLarge: (props: any) => JSX.Element;
	export default IconPhotoSizeSelectLarge;

}
declare module '@volst/ui-components/src/general/icon/IconPhotoSizeSelectSmall' {
	 let IconPhotoSizeSelectSmall: (props: any) => JSX.Element;
	export default IconPhotoSizeSelectSmall;

}
declare module '@volst/ui-components/src/general/icon/IconPictureAsPdf' {
	 let IconPictureAsPdf: (props: any) => JSX.Element;
	export default IconPictureAsPdf;

}
declare module '@volst/ui-components/src/general/icon/IconPictureInPicture' {
	 let IconPictureInPicture: (props: any) => JSX.Element;
	export default IconPictureInPicture;

}
declare module '@volst/ui-components/src/general/icon/IconPictureInPictureAlt' {
	 let IconPictureInPictureAlt: (props: any) => JSX.Element;
	export default IconPictureInPictureAlt;

}
declare module '@volst/ui-components/src/general/icon/IconPieChart' {
	 let IconPieChart: (props: any) => JSX.Element;
	export default IconPieChart;

}
declare module '@volst/ui-components/src/general/icon/IconPieChartOutlined' {
	 let IconPieChartOutlined: (props: any) => JSX.Element;
	export default IconPieChartOutlined;

}
declare module '@volst/ui-components/src/general/icon/IconPinDrop' {
	 let IconPinDrop: (props: any) => JSX.Element;
	export default IconPinDrop;

}
declare module '@volst/ui-components/src/general/icon/IconPlace' {
	 let IconPlace: (props: any) => JSX.Element;
	export default IconPlace;

}
declare module '@volst/ui-components/src/general/icon/IconPlayArrow' {
	 let IconPlayArrow: (props: any) => JSX.Element;
	export default IconPlayArrow;

}
declare module '@volst/ui-components/src/general/icon/IconPlayCircleFilled' {
	 let IconPlayCircleFilled: (props: any) => JSX.Element;
	export default IconPlayCircleFilled;

}
declare module '@volst/ui-components/src/general/icon/IconPlayCircleOutline' {
	 let IconPlayCircleOutline: (props: any) => JSX.Element;
	export default IconPlayCircleOutline;

}
declare module '@volst/ui-components/src/general/icon/IconPlayForWork' {
	 let IconPlayForWork: (props: any) => JSX.Element;
	export default IconPlayForWork;

}
declare module '@volst/ui-components/src/general/icon/IconPlaylistAdd' {
	 let IconPlaylistAdd: (props: any) => JSX.Element;
	export default IconPlaylistAdd;

}
declare module '@volst/ui-components/src/general/icon/IconPlaylistAddCheck' {
	 let IconPlaylistAddCheck: (props: any) => JSX.Element;
	export default IconPlaylistAddCheck;

}
declare module '@volst/ui-components/src/general/icon/IconPlaylistPlay' {
	 let IconPlaylistPlay: (props: any) => JSX.Element;
	export default IconPlaylistPlay;

}
declare module '@volst/ui-components/src/general/icon/IconPlusOne' {
	 let IconPlusOne: (props: any) => JSX.Element;
	export default IconPlusOne;

}
declare module '@volst/ui-components/src/general/icon/IconPoll' {
	 let IconPoll: (props: any) => JSX.Element;
	export default IconPoll;

}
declare module '@volst/ui-components/src/general/icon/IconPolymer' {
	 let IconPolymer: (props: any) => JSX.Element;
	export default IconPolymer;

}
declare module '@volst/ui-components/src/general/icon/IconPool' {
	 let IconPool: (props: any) => JSX.Element;
	export default IconPool;

}
declare module '@volst/ui-components/src/general/icon/IconPortableWifiOff' {
	 let IconPortableWifiOff: (props: any) => JSX.Element;
	export default IconPortableWifiOff;

}
declare module '@volst/ui-components/src/general/icon/IconPortrait' {
	 let IconPortrait: (props: any) => JSX.Element;
	export default IconPortrait;

}
declare module '@volst/ui-components/src/general/icon/IconPower' {
	 let IconPower: (props: any) => JSX.Element;
	export default IconPower;

}
declare module '@volst/ui-components/src/general/icon/IconPowerInput' {
	 let IconPowerInput: (props: any) => JSX.Element;
	export default IconPowerInput;

}
declare module '@volst/ui-components/src/general/icon/IconPowerSettingsNew' {
	 let IconPowerSettingsNew: (props: any) => JSX.Element;
	export default IconPowerSettingsNew;

}
declare module '@volst/ui-components/src/general/icon/IconPregnantWoman' {
	 let IconPregnantWoman: (props: any) => JSX.Element;
	export default IconPregnantWoman;

}
declare module '@volst/ui-components/src/general/icon/IconPresentToAll' {
	 let IconPresentToAll: (props: any) => JSX.Element;
	export default IconPresentToAll;

}
declare module '@volst/ui-components/src/general/icon/IconPrint' {
	 let IconPrint: (props: any) => JSX.Element;
	export default IconPrint;

}
declare module '@volst/ui-components/src/general/icon/IconPriorityHigh' {
	 let IconPriorityHigh: (props: any) => JSX.Element;
	export default IconPriorityHigh;

}
declare module '@volst/ui-components/src/general/icon/IconPublic' {
	 let IconPublic: (props: any) => JSX.Element;
	export default IconPublic;

}
declare module '@volst/ui-components/src/general/icon/IconPublish' {
	 let IconPublish: (props: any) => JSX.Element;
	export default IconPublish;

}
declare module '@volst/ui-components/src/general/icon/IconQueryBuilder' {
	 let IconQueryBuilder: (props: any) => JSX.Element;
	export default IconQueryBuilder;

}
declare module '@volst/ui-components/src/general/icon/IconQuestionAnswer' {
	 let IconQuestionAnswer: (props: any) => JSX.Element;
	export default IconQuestionAnswer;

}
declare module '@volst/ui-components/src/general/icon/IconQueue' {
	 let IconQueue: (props: any) => JSX.Element;
	export default IconQueue;

}
declare module '@volst/ui-components/src/general/icon/IconQueueMusic' {
	 let IconQueueMusic: (props: any) => JSX.Element;
	export default IconQueueMusic;

}
declare module '@volst/ui-components/src/general/icon/IconQueuePlayNext' {
	 let IconQueuePlayNext: (props: any) => JSX.Element;
	export default IconQueuePlayNext;

}
declare module '@volst/ui-components/src/general/icon/IconRadio' {
	 let IconRadio: (props: any) => JSX.Element;
	export default IconRadio;

}
declare module '@volst/ui-components/src/general/icon/IconRadioButtonChecked' {
	 let IconRadioButtonChecked: (props: any) => JSX.Element;
	export default IconRadioButtonChecked;

}
declare module '@volst/ui-components/src/general/icon/IconRadioButtonUnchecked' {
	 let IconRadioButtonUnchecked: (props: any) => JSX.Element;
	export default IconRadioButtonUnchecked;

}
declare module '@volst/ui-components/src/general/icon/IconRateReview' {
	 let IconRateReview: (props: any) => JSX.Element;
	export default IconRateReview;

}
declare module '@volst/ui-components/src/general/icon/IconReceipt' {
	 let IconReceipt: (props: any) => JSX.Element;
	export default IconReceipt;

}
declare module '@volst/ui-components/src/general/icon/IconRecentActors' {
	 let IconRecentActors: (props: any) => JSX.Element;
	export default IconRecentActors;

}
declare module '@volst/ui-components/src/general/icon/IconRecordVoiceOver' {
	 let IconRecordVoiceOver: (props: any) => JSX.Element;
	export default IconRecordVoiceOver;

}
declare module '@volst/ui-components/src/general/icon/IconRedeem' {
	 let IconRedeem: (props: any) => JSX.Element;
	export default IconRedeem;

}
declare module '@volst/ui-components/src/general/icon/IconRedo' {
	 let IconRedo: (props: any) => JSX.Element;
	export default IconRedo;

}
declare module '@volst/ui-components/src/general/icon/IconRefresh' {
	 let IconRefresh: (props: any) => JSX.Element;
	export default IconRefresh;

}
declare module '@volst/ui-components/src/general/icon/IconRemove' {
	 let IconRemove: (props: any) => JSX.Element;
	export default IconRemove;

}
declare module '@volst/ui-components/src/general/icon/IconRemoveCircle' {
	 let IconRemoveCircle: (props: any) => JSX.Element;
	export default IconRemoveCircle;

}
declare module '@volst/ui-components/src/general/icon/IconRemoveCircleOutline' {
	 let IconRemoveCircleOutline: (props: any) => JSX.Element;
	export default IconRemoveCircleOutline;

}
declare module '@volst/ui-components/src/general/icon/IconRemoveFromQueue' {
	 let IconRemoveFromQueue: (props: any) => JSX.Element;
	export default IconRemoveFromQueue;

}
declare module '@volst/ui-components/src/general/icon/IconRemoveRedEye' {
	 let IconRemoveRedEye: (props: any) => JSX.Element;
	export default IconRemoveRedEye;

}
declare module '@volst/ui-components/src/general/icon/IconRemoveShoppingCart' {
	 let IconRemoveShoppingCart: (props: any) => JSX.Element;
	export default IconRemoveShoppingCart;

}
declare module '@volst/ui-components/src/general/icon/IconReorder' {
	 let IconReorder: (props: any) => JSX.Element;
	export default IconReorder;

}
declare module '@volst/ui-components/src/general/icon/IconRepeat' {
	 let IconRepeat: (props: any) => JSX.Element;
	export default IconRepeat;

}
declare module '@volst/ui-components/src/general/icon/IconRepeatOne' {
	 let IconRepeatOne: (props: any) => JSX.Element;
	export default IconRepeatOne;

}
declare module '@volst/ui-components/src/general/icon/IconReplay' {
	 let IconReplay: (props: any) => JSX.Element;
	export default IconReplay;

}
declare module '@volst/ui-components/src/general/icon/IconReplay10' {
	 let IconReplay10: (props: any) => JSX.Element;
	export default IconReplay10;

}
declare module '@volst/ui-components/src/general/icon/IconReplay30' {
	 let IconReplay30: (props: any) => JSX.Element;
	export default IconReplay30;

}
declare module '@volst/ui-components/src/general/icon/IconReplay5' {
	 let IconReplay5: (props: any) => JSX.Element;
	export default IconReplay5;

}
declare module '@volst/ui-components/src/general/icon/IconReply' {
	 let IconReply: (props: any) => JSX.Element;
	export default IconReply;

}
declare module '@volst/ui-components/src/general/icon/IconReplyAll' {
	 let IconReplyAll: (props: any) => JSX.Element;
	export default IconReplyAll;

}
declare module '@volst/ui-components/src/general/icon/IconReport' {
	 let IconReport: (props: any) => JSX.Element;
	export default IconReport;

}
declare module '@volst/ui-components/src/general/icon/IconReportProblem' {
	 let IconReportProblem: (props: any) => JSX.Element;
	export default IconReportProblem;

}
declare module '@volst/ui-components/src/general/icon/IconRestaurant' {
	 let IconRestaurant: (props: any) => JSX.Element;
	export default IconRestaurant;

}
declare module '@volst/ui-components/src/general/icon/IconRestaurantMenu' {
	 let IconRestaurantMenu: (props: any) => JSX.Element;
	export default IconRestaurantMenu;

}
declare module '@volst/ui-components/src/general/icon/IconRestore' {
	 let IconRestore: (props: any) => JSX.Element;
	export default IconRestore;

}
declare module '@volst/ui-components/src/general/icon/IconRestorePage' {
	 let IconRestorePage: (props: any) => JSX.Element;
	export default IconRestorePage;

}
declare module '@volst/ui-components/src/general/icon/IconRingVolume' {
	 let IconRingVolume: (props: any) => JSX.Element;
	export default IconRingVolume;

}
declare module '@volst/ui-components/src/general/icon/IconRoom' {
	 let IconRoom: (props: any) => JSX.Element;
	export default IconRoom;

}
declare module '@volst/ui-components/src/general/icon/IconRoomService' {
	 let IconRoomService: (props: any) => JSX.Element;
	export default IconRoomService;

}
declare module '@volst/ui-components/src/general/icon/IconRotate90DegreesCcw' {
	 let IconRotate90DegreesCcw: (props: any) => JSX.Element;
	export default IconRotate90DegreesCcw;

}
declare module '@volst/ui-components/src/general/icon/IconRotateLeft' {
	 let IconRotateLeft: (props: any) => JSX.Element;
	export default IconRotateLeft;

}
declare module '@volst/ui-components/src/general/icon/IconRotateRight' {
	 let IconRotateRight: (props: any) => JSX.Element;
	export default IconRotateRight;

}
declare module '@volst/ui-components/src/general/icon/IconRoundedCorner' {
	 let IconRoundedCorner: (props: any) => JSX.Element;
	export default IconRoundedCorner;

}
declare module '@volst/ui-components/src/general/icon/IconRouter' {
	 let IconRouter: (props: any) => JSX.Element;
	export default IconRouter;

}
declare module '@volst/ui-components/src/general/icon/IconRowing' {
	 let IconRowing: (props: any) => JSX.Element;
	export default IconRowing;

}
declare module '@volst/ui-components/src/general/icon/IconRssFeed' {
	 let IconRssFeed: (props: any) => JSX.Element;
	export default IconRssFeed;

}
declare module '@volst/ui-components/src/general/icon/IconRvHookup' {
	 let IconRvHookup: (props: any) => JSX.Element;
	export default IconRvHookup;

}
declare module '@volst/ui-components/src/general/icon/IconSatellite' {
	 let IconSatellite: (props: any) => JSX.Element;
	export default IconSatellite;

}
declare module '@volst/ui-components/src/general/icon/IconSave' {
	 let IconSave: (props: any) => JSX.Element;
	export default IconSave;

}
declare module '@volst/ui-components/src/general/icon/IconScanner' {
	 let IconScanner: (props: any) => JSX.Element;
	export default IconScanner;

}
declare module '@volst/ui-components/src/general/icon/IconSchedule' {
	 let IconSchedule: (props: any) => JSX.Element;
	export default IconSchedule;

}
declare module '@volst/ui-components/src/general/icon/IconSchool' {
	 let IconSchool: (props: any) => JSX.Element;
	export default IconSchool;

}
declare module '@volst/ui-components/src/general/icon/IconScreenLockLandscape' {
	 let IconScreenLockLandscape: (props: any) => JSX.Element;
	export default IconScreenLockLandscape;

}
declare module '@volst/ui-components/src/general/icon/IconScreenLockPortrait' {
	 let IconScreenLockPortrait: (props: any) => JSX.Element;
	export default IconScreenLockPortrait;

}
declare module '@volst/ui-components/src/general/icon/IconScreenLockRotation' {
	 let IconScreenLockRotation: (props: any) => JSX.Element;
	export default IconScreenLockRotation;

}
declare module '@volst/ui-components/src/general/icon/IconScreenRotation' {
	 let IconScreenRotation: (props: any) => JSX.Element;
	export default IconScreenRotation;

}
declare module '@volst/ui-components/src/general/icon/IconScreenShare' {
	 let IconScreenShare: (props: any) => JSX.Element;
	export default IconScreenShare;

}
declare module '@volst/ui-components/src/general/icon/IconSdCard' {
	 let IconSdCard: (props: any) => JSX.Element;
	export default IconSdCard;

}
declare module '@volst/ui-components/src/general/icon/IconSdStorage' {
	 let IconSdStorage: (props: any) => JSX.Element;
	export default IconSdStorage;

}
declare module '@volst/ui-components/src/general/icon/IconSearch' {
	 let IconSearch: (props: any) => JSX.Element;
	export default IconSearch;

}
declare module '@volst/ui-components/src/general/icon/IconSecurity' {
	 let IconSecurity: (props: any) => JSX.Element;
	export default IconSecurity;

}
declare module '@volst/ui-components/src/general/icon/IconSelectAll' {
	 let IconSelectAll: (props: any) => JSX.Element;
	export default IconSelectAll;

}
declare module '@volst/ui-components/src/general/icon/IconSend' {
	 let IconSend: (props: any) => JSX.Element;
	export default IconSend;

}
declare module '@volst/ui-components/src/general/icon/IconSentimentDissatisfied' {
	 let IconSentimentDissatisfied: (props: any) => JSX.Element;
	export default IconSentimentDissatisfied;

}
declare module '@volst/ui-components/src/general/icon/IconSentimentNeutral' {
	 let IconSentimentNeutral: (props: any) => JSX.Element;
	export default IconSentimentNeutral;

}
declare module '@volst/ui-components/src/general/icon/IconSentimentSatisfied' {
	 let IconSentimentSatisfied: (props: any) => JSX.Element;
	export default IconSentimentSatisfied;

}
declare module '@volst/ui-components/src/general/icon/IconSentimentVeryDissatisfied' {
	 let IconSentimentVeryDissatisfied: (props: any) => JSX.Element;
	export default IconSentimentVeryDissatisfied;

}
declare module '@volst/ui-components/src/general/icon/IconSentimentVerySatisfied' {
	 let IconSentimentVerySatisfied: (props: any) => JSX.Element;
	export default IconSentimentVerySatisfied;

}
declare module '@volst/ui-components/src/general/icon/IconSettings' {
	 let IconSettings: (props: any) => JSX.Element;
	export default IconSettings;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsApplications' {
	 let IconSettingsApplications: (props: any) => JSX.Element;
	export default IconSettingsApplications;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsBackupRestore' {
	 let IconSettingsBackupRestore: (props: any) => JSX.Element;
	export default IconSettingsBackupRestore;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsBluetooth' {
	 let IconSettingsBluetooth: (props: any) => JSX.Element;
	export default IconSettingsBluetooth;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsBrightness' {
	 let IconSettingsBrightness: (props: any) => JSX.Element;
	export default IconSettingsBrightness;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsCell' {
	 let IconSettingsCell: (props: any) => JSX.Element;
	export default IconSettingsCell;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsEthernet' {
	 let IconSettingsEthernet: (props: any) => JSX.Element;
	export default IconSettingsEthernet;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsInputAntenna' {
	 let IconSettingsInputAntenna: (props: any) => JSX.Element;
	export default IconSettingsInputAntenna;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsInputComponent' {
	 let IconSettingsInputComponent: (props: any) => JSX.Element;
	export default IconSettingsInputComponent;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsInputComposite' {
	 let IconSettingsInputComposite: (props: any) => JSX.Element;
	export default IconSettingsInputComposite;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsInputHdmi' {
	 let IconSettingsInputHdmi: (props: any) => JSX.Element;
	export default IconSettingsInputHdmi;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsInputSvideo' {
	 let IconSettingsInputSvideo: (props: any) => JSX.Element;
	export default IconSettingsInputSvideo;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsOverscan' {
	 let IconSettingsOverscan: (props: any) => JSX.Element;
	export default IconSettingsOverscan;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsPhone' {
	 let IconSettingsPhone: (props: any) => JSX.Element;
	export default IconSettingsPhone;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsPower' {
	 let IconSettingsPower: (props: any) => JSX.Element;
	export default IconSettingsPower;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsRemote' {
	 let IconSettingsRemote: (props: any) => JSX.Element;
	export default IconSettingsRemote;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsSystemDaydream' {
	 let IconSettingsSystemDaydream: (props: any) => JSX.Element;
	export default IconSettingsSystemDaydream;

}
declare module '@volst/ui-components/src/general/icon/IconSettingsVoice' {
	 let IconSettingsVoice: (props: any) => JSX.Element;
	export default IconSettingsVoice;

}
declare module '@volst/ui-components/src/general/icon/IconShare' {
	 let IconShare: (props: any) => JSX.Element;
	export default IconShare;

}
declare module '@volst/ui-components/src/general/icon/IconShop' {
	 let IconShop: (props: any) => JSX.Element;
	export default IconShop;

}
declare module '@volst/ui-components/src/general/icon/IconShoppingBasket' {
	 let IconShoppingBasket: (props: any) => JSX.Element;
	export default IconShoppingBasket;

}
declare module '@volst/ui-components/src/general/icon/IconShoppingCart' {
	 let IconShoppingCart: (props: any) => JSX.Element;
	export default IconShoppingCart;

}
declare module '@volst/ui-components/src/general/icon/IconShopTwo' {
	 let IconShopTwo: (props: any) => JSX.Element;
	export default IconShopTwo;

}
declare module '@volst/ui-components/src/general/icon/IconShortText' {
	 let IconShortText: (props: any) => JSX.Element;
	export default IconShortText;

}
declare module '@volst/ui-components/src/general/icon/IconShowChart' {
	 let IconShowChart: (props: any) => JSX.Element;
	export default IconShowChart;

}
declare module '@volst/ui-components/src/general/icon/IconShuffle' {
	 let IconShuffle: (props: any) => JSX.Element;
	export default IconShuffle;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellular0Bar' {
	 let IconSignalCellular0Bar: (props: any) => JSX.Element;
	export default IconSignalCellular0Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellular1Bar' {
	 let IconSignalCellular1Bar: (props: any) => JSX.Element;
	export default IconSignalCellular1Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellular2Bar' {
	 let IconSignalCellular2Bar: (props: any) => JSX.Element;
	export default IconSignalCellular2Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellular3Bar' {
	 let IconSignalCellular3Bar: (props: any) => JSX.Element;
	export default IconSignalCellular3Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellular4Bar' {
	 let IconSignalCellular4Bar: (props: any) => JSX.Element;
	export default IconSignalCellular4Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet0Bar' {
	 let IconSignalCellularConnectedNoInternet0Bar: (props: any) => JSX.Element;
	export default IconSignalCellularConnectedNoInternet0Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet1Bar' {
	 let IconSignalCellularConnectedNoInternet1Bar: (props: any) => JSX.Element;
	export default IconSignalCellularConnectedNoInternet1Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet2Bar' {
	 let IconSignalCellularConnectedNoInternet2Bar: (props: any) => JSX.Element;
	export default IconSignalCellularConnectedNoInternet2Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet3Bar' {
	 let IconSignalCellularConnectedNoInternet3Bar: (props: any) => JSX.Element;
	export default IconSignalCellularConnectedNoInternet3Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet4Bar' {
	 let IconSignalCellularConnectedNoInternet4Bar: (props: any) => JSX.Element;
	export default IconSignalCellularConnectedNoInternet4Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularNoSim' {
	 let IconSignalCellularNoSim: (props: any) => JSX.Element;
	export default IconSignalCellularNoSim;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularNull' {
	 let IconSignalCellularNull: (props: any) => JSX.Element;
	export default IconSignalCellularNull;

}
declare module '@volst/ui-components/src/general/icon/IconSignalCellularOff' {
	 let IconSignalCellularOff: (props: any) => JSX.Element;
	export default IconSignalCellularOff;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi0Bar' {
	 let IconSignalWifi0Bar: (props: any) => JSX.Element;
	export default IconSignalWifi0Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi1Bar' {
	 let IconSignalWifi1Bar: (props: any) => JSX.Element;
	export default IconSignalWifi1Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi1BarLock' {
	 let IconSignalWifi1BarLock: (props: any) => JSX.Element;
	export default IconSignalWifi1BarLock;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi2Bar' {
	 let IconSignalWifi2Bar: (props: any) => JSX.Element;
	export default IconSignalWifi2Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi2BarLock' {
	 let IconSignalWifi2BarLock: (props: any) => JSX.Element;
	export default IconSignalWifi2BarLock;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi3Bar' {
	 let IconSignalWifi3Bar: (props: any) => JSX.Element;
	export default IconSignalWifi3Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi3BarLock' {
	 let IconSignalWifi3BarLock: (props: any) => JSX.Element;
	export default IconSignalWifi3BarLock;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi4Bar' {
	 let IconSignalWifi4Bar: (props: any) => JSX.Element;
	export default IconSignalWifi4Bar;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifi4BarLock' {
	 let IconSignalWifi4BarLock: (props: any) => JSX.Element;
	export default IconSignalWifi4BarLock;

}
declare module '@volst/ui-components/src/general/icon/IconSignalWifiOff' {
	 let IconSignalWifiOff: (props: any) => JSX.Element;
	export default IconSignalWifiOff;

}
declare module '@volst/ui-components/src/general/icon/IconSimCard' {
	 let IconSimCard: (props: any) => JSX.Element;
	export default IconSimCard;

}
declare module '@volst/ui-components/src/general/icon/IconSimCardAlert' {
	 let IconSimCardAlert: (props: any) => JSX.Element;
	export default IconSimCardAlert;

}
declare module '@volst/ui-components/src/general/icon/IconSkipNext' {
	 let IconSkipNext: (props: any) => JSX.Element;
	export default IconSkipNext;

}
declare module '@volst/ui-components/src/general/icon/IconSkipPrevious' {
	 let IconSkipPrevious: (props: any) => JSX.Element;
	export default IconSkipPrevious;

}
declare module '@volst/ui-components/src/general/icon/IconSlideshow' {
	 let IconSlideshow: (props: any) => JSX.Element;
	export default IconSlideshow;

}
declare module '@volst/ui-components/src/general/icon/IconSlowMotionVideo' {
	 let IconSlowMotionVideo: (props: any) => JSX.Element;
	export default IconSlowMotionVideo;

}
declare module '@volst/ui-components/src/general/icon/IconSmartphone' {
	 let IconSmartphone: (props: any) => JSX.Element;
	export default IconSmartphone;

}
declare module '@volst/ui-components/src/general/icon/IconSmokeFree' {
	 let IconSmokeFree: (props: any) => JSX.Element;
	export default IconSmokeFree;

}
declare module '@volst/ui-components/src/general/icon/IconSmokingRooms' {
	 let IconSmokingRooms: (props: any) => JSX.Element;
	export default IconSmokingRooms;

}
declare module '@volst/ui-components/src/general/icon/IconSms' {
	 let IconSms: (props: any) => JSX.Element;
	export default IconSms;

}
declare module '@volst/ui-components/src/general/icon/IconSmsFailed' {
	 let IconSmsFailed: (props: any) => JSX.Element;
	export default IconSmsFailed;

}
declare module '@volst/ui-components/src/general/icon/IconSnooze' {
	 let IconSnooze: (props: any) => JSX.Element;
	export default IconSnooze;

}
declare module '@volst/ui-components/src/general/icon/IconSort' {
	 let IconSort: (props: any) => JSX.Element;
	export default IconSort;

}
declare module '@volst/ui-components/src/general/icon/IconSortByAlpha' {
	 let IconSortByAlpha: (props: any) => JSX.Element;
	export default IconSortByAlpha;

}
declare module '@volst/ui-components/src/general/icon/IconSpa' {
	 let IconSpa: (props: any) => JSX.Element;
	export default IconSpa;

}
declare module '@volst/ui-components/src/general/icon/IconSpaceBar' {
	 let IconSpaceBar: (props: any) => JSX.Element;
	export default IconSpaceBar;

}
declare module '@volst/ui-components/src/general/icon/IconSpeaker' {
	 let IconSpeaker: (props: any) => JSX.Element;
	export default IconSpeaker;

}
declare module '@volst/ui-components/src/general/icon/IconSpeakerGroup' {
	 let IconSpeakerGroup: (props: any) => JSX.Element;
	export default IconSpeakerGroup;

}
declare module '@volst/ui-components/src/general/icon/IconSpeakerNotes' {
	 let IconSpeakerNotes: (props: any) => JSX.Element;
	export default IconSpeakerNotes;

}
declare module '@volst/ui-components/src/general/icon/IconSpeakerNotesOff' {
	 let IconSpeakerNotesOff: (props: any) => JSX.Element;
	export default IconSpeakerNotesOff;

}
declare module '@volst/ui-components/src/general/icon/IconSpeakerPhone' {
	 let IconSpeakerPhone: (props: any) => JSX.Element;
	export default IconSpeakerPhone;

}
declare module '@volst/ui-components/src/general/icon/IconSpellcheck' {
	 let IconSpellcheck: (props: any) => JSX.Element;
	export default IconSpellcheck;

}
declare module '@volst/ui-components/src/general/icon/IconStar' {
	 let IconStar: (props: any) => JSX.Element;
	export default IconStar;

}
declare module '@volst/ui-components/src/general/icon/IconStarBorder' {
	 let IconStarBorder: (props: any) => JSX.Element;
	export default IconStarBorder;

}
declare module '@volst/ui-components/src/general/icon/IconStarHalf' {
	 let IconStarHalf: (props: any) => JSX.Element;
	export default IconStarHalf;

}
declare module '@volst/ui-components/src/general/icon/IconStars' {
	 let IconStars: (props: any) => JSX.Element;
	export default IconStars;

}
declare module '@volst/ui-components/src/general/icon/IconStayCurrentLandscape' {
	 let IconStayCurrentLandscape: (props: any) => JSX.Element;
	export default IconStayCurrentLandscape;

}
declare module '@volst/ui-components/src/general/icon/IconStayCurrentPortrait' {
	 let IconStayCurrentPortrait: (props: any) => JSX.Element;
	export default IconStayCurrentPortrait;

}
declare module '@volst/ui-components/src/general/icon/IconStayPrimaryLandscape' {
	 let IconStayPrimaryLandscape: (props: any) => JSX.Element;
	export default IconStayPrimaryLandscape;

}
declare module '@volst/ui-components/src/general/icon/IconStayPrimaryPortrait' {
	 let IconStayPrimaryPortrait: (props: any) => JSX.Element;
	export default IconStayPrimaryPortrait;

}
declare module '@volst/ui-components/src/general/icon/IconStop' {
	 let IconStop: (props: any) => JSX.Element;
	export default IconStop;

}
declare module '@volst/ui-components/src/general/icon/IconStopScreenShare' {
	 let IconStopScreenShare: (props: any) => JSX.Element;
	export default IconStopScreenShare;

}
declare module '@volst/ui-components/src/general/icon/IconStorage' {
	 let IconStorage: (props: any) => JSX.Element;
	export default IconStorage;

}
declare module '@volst/ui-components/src/general/icon/IconStore' {
	 let IconStore: (props: any) => JSX.Element;
	export default IconStore;

}
declare module '@volst/ui-components/src/general/icon/IconStoreMallDirectory' {
	 let IconStoreMallDirectory: (props: any) => JSX.Element;
	export default IconStoreMallDirectory;

}
declare module '@volst/ui-components/src/general/icon/IconStraighten' {
	 let IconStraighten: (props: any) => JSX.Element;
	export default IconStraighten;

}
declare module '@volst/ui-components/src/general/icon/IconStreetview' {
	 let IconStreetview: (props: any) => JSX.Element;
	export default IconStreetview;

}
declare module '@volst/ui-components/src/general/icon/IconStrikethroughS' {
	 let IconStrikethroughS: (props: any) => JSX.Element;
	export default IconStrikethroughS;

}
declare module '@volst/ui-components/src/general/icon/IconStyle' {
	 let IconStyle: (props: any) => JSX.Element;
	export default IconStyle;

}
declare module '@volst/ui-components/src/general/icon/IconSubdirectoryArrowLeft' {
	 let IconSubdirectoryArrowLeft: (props: any) => JSX.Element;
	export default IconSubdirectoryArrowLeft;

}
declare module '@volst/ui-components/src/general/icon/IconSubdirectoryArrowRight' {
	 let IconSubdirectoryArrowRight: (props: any) => JSX.Element;
	export default IconSubdirectoryArrowRight;

}
declare module '@volst/ui-components/src/general/icon/IconSubject' {
	 let IconSubject: (props: any) => JSX.Element;
	export default IconSubject;

}
declare module '@volst/ui-components/src/general/icon/IconSubscriptions' {
	 let IconSubscriptions: (props: any) => JSX.Element;
	export default IconSubscriptions;

}
declare module '@volst/ui-components/src/general/icon/IconSubtitles' {
	 let IconSubtitles: (props: any) => JSX.Element;
	export default IconSubtitles;

}
declare module '@volst/ui-components/src/general/icon/IconSubway' {
	 let IconSubway: (props: any) => JSX.Element;
	export default IconSubway;

}
declare module '@volst/ui-components/src/general/icon/IconSupervisorAccount' {
	 let IconSupervisorAccount: (props: any) => JSX.Element;
	export default IconSupervisorAccount;

}
declare module '@volst/ui-components/src/general/icon/IconSurroundSound' {
	 let IconSurroundSound: (props: any) => JSX.Element;
	export default IconSurroundSound;

}
declare module '@volst/ui-components/src/general/icon/IconSwapCalls' {
	 let IconSwapCalls: (props: any) => JSX.Element;
	export default IconSwapCalls;

}
declare module '@volst/ui-components/src/general/icon/IconSwapHoriz' {
	 let IconSwapHoriz: (props: any) => JSX.Element;
	export default IconSwapHoriz;

}
declare module '@volst/ui-components/src/general/icon/IconSwapVert' {
	 let IconSwapVert: (props: any) => JSX.Element;
	export default IconSwapVert;

}
declare module '@volst/ui-components/src/general/icon/IconSwapVerticalCircle' {
	 let IconSwapVerticalCircle: (props: any) => JSX.Element;
	export default IconSwapVerticalCircle;

}
declare module '@volst/ui-components/src/general/icon/IconSwitchCamera' {
	 let IconSwitchCamera: (props: any) => JSX.Element;
	export default IconSwitchCamera;

}
declare module '@volst/ui-components/src/general/icon/IconSwitchVideo' {
	 let IconSwitchVideo: (props: any) => JSX.Element;
	export default IconSwitchVideo;

}
declare module '@volst/ui-components/src/general/icon/IconSync' {
	 let IconSync: (props: any) => JSX.Element;
	export default IconSync;

}
declare module '@volst/ui-components/src/general/icon/IconSyncDisabled' {
	 let IconSyncDisabled: (props: any) => JSX.Element;
	export default IconSyncDisabled;

}
declare module '@volst/ui-components/src/general/icon/IconSyncProblem' {
	 let IconSyncProblem: (props: any) => JSX.Element;
	export default IconSyncProblem;

}
declare module '@volst/ui-components/src/general/icon/IconSystemUpdate' {
	 let IconSystemUpdate: (props: any) => JSX.Element;
	export default IconSystemUpdate;

}
declare module '@volst/ui-components/src/general/icon/IconSystemUpdateAlt' {
	 let IconSystemUpdateAlt: (props: any) => JSX.Element;
	export default IconSystemUpdateAlt;

}
declare module '@volst/ui-components/src/general/icon/IconTab' {
	 let IconTab: (props: any) => JSX.Element;
	export default IconTab;

}
declare module '@volst/ui-components/src/general/icon/IconTablet' {
	 let IconTablet: (props: any) => JSX.Element;
	export default IconTablet;

}
declare module '@volst/ui-components/src/general/icon/IconTabletAndroid' {
	 let IconTabletAndroid: (props: any) => JSX.Element;
	export default IconTabletAndroid;

}
declare module '@volst/ui-components/src/general/icon/IconTabletMac' {
	 let IconTabletMac: (props: any) => JSX.Element;
	export default IconTabletMac;

}
declare module '@volst/ui-components/src/general/icon/IconTabUnselected' {
	 let IconTabUnselected: (props: any) => JSX.Element;
	export default IconTabUnselected;

}
declare module '@volst/ui-components/src/general/icon/IconTagFaces' {
	 let IconTagFaces: (props: any) => JSX.Element;
	export default IconTagFaces;

}
declare module '@volst/ui-components/src/general/icon/IconTapAndPlay' {
	 let IconTapAndPlay: (props: any) => JSX.Element;
	export default IconTapAndPlay;

}
declare module '@volst/ui-components/src/general/icon/IconTerrain' {
	 let IconTerrain: (props: any) => JSX.Element;
	export default IconTerrain;

}
declare module '@volst/ui-components/src/general/icon/IconTextFields' {
	 let IconTextFields: (props: any) => JSX.Element;
	export default IconTextFields;

}
declare module '@volst/ui-components/src/general/icon/IconTextFormat' {
	 let IconTextFormat: (props: any) => JSX.Element;
	export default IconTextFormat;

}
declare module '@volst/ui-components/src/general/icon/IconTextsms' {
	 let IconTextsms: (props: any) => JSX.Element;
	export default IconTextsms;

}
declare module '@volst/ui-components/src/general/icon/IconTexture' {
	 let IconTexture: (props: any) => JSX.Element;
	export default IconTexture;

}
declare module '@volst/ui-components/src/general/icon/IconTheaters' {
	 let IconTheaters: (props: any) => JSX.Element;
	export default IconTheaters;

}
declare module '@volst/ui-components/src/general/icon/IconThreeDRotation' {
	 let IconThreeDRotation: (props: any) => JSX.Element;
	export default IconThreeDRotation;

}
declare module '@volst/ui-components/src/general/icon/IconThumbDown' {
	 let IconThumbDown: (props: any) => JSX.Element;
	export default IconThumbDown;

}
declare module '@volst/ui-components/src/general/icon/IconThumbsUpDown' {
	 let IconThumbsUpDown: (props: any) => JSX.Element;
	export default IconThumbsUpDown;

}
declare module '@volst/ui-components/src/general/icon/IconThumbUp' {
	 let IconThumbUp: (props: any) => JSX.Element;
	export default IconThumbUp;

}
declare module '@volst/ui-components/src/general/icon/IconTimelapse' {
	 let IconTimelapse: (props: any) => JSX.Element;
	export default IconTimelapse;

}
declare module '@volst/ui-components/src/general/icon/IconTimeline' {
	 let IconTimeline: (props: any) => JSX.Element;
	export default IconTimeline;

}
declare module '@volst/ui-components/src/general/icon/IconTimer' {
	 let IconTimer: (props: any) => JSX.Element;
	export default IconTimer;

}
declare module '@volst/ui-components/src/general/icon/IconTimer10' {
	 let IconTimer10: (props: any) => JSX.Element;
	export default IconTimer10;

}
declare module '@volst/ui-components/src/general/icon/IconTimer3' {
	 let IconTimer3: (props: any) => JSX.Element;
	export default IconTimer3;

}
declare module '@volst/ui-components/src/general/icon/IconTimerOff' {
	 let IconTimerOff: (props: any) => JSX.Element;
	export default IconTimerOff;

}
declare module '@volst/ui-components/src/general/icon/IconTimeToLeave' {
	 let IconTimeToLeave: (props: any) => JSX.Element;
	export default IconTimeToLeave;

}
declare module '@volst/ui-components/src/general/icon/IconTitle' {
	 let IconTitle: (props: any) => JSX.Element;
	export default IconTitle;

}
declare module '@volst/ui-components/src/general/icon/IconToc' {
	 let IconToc: (props: any) => JSX.Element;
	export default IconToc;

}
declare module '@volst/ui-components/src/general/icon/IconToday' {
	 let IconToday: (props: any) => JSX.Element;
	export default IconToday;

}
declare module '@volst/ui-components/src/general/icon/IconToll' {
	 let IconToll: (props: any) => JSX.Element;
	export default IconToll;

}
declare module '@volst/ui-components/src/general/icon/IconTonality' {
	 let IconTonality: (props: any) => JSX.Element;
	export default IconTonality;

}
declare module '@volst/ui-components/src/general/icon/IconTouchApp' {
	 let IconTouchApp: (props: any) => JSX.Element;
	export default IconTouchApp;

}
declare module '@volst/ui-components/src/general/icon/IconToys' {
	 let IconToys: (props: any) => JSX.Element;
	export default IconToys;

}
declare module '@volst/ui-components/src/general/icon/IconTrackChanges' {
	 let IconTrackChanges: (props: any) => JSX.Element;
	export default IconTrackChanges;

}
declare module '@volst/ui-components/src/general/icon/IconTraffic' {
	 let IconTraffic: (props: any) => JSX.Element;
	export default IconTraffic;

}
declare module '@volst/ui-components/src/general/icon/IconTrain' {
	 let IconTrain: (props: any) => JSX.Element;
	export default IconTrain;

}
declare module '@volst/ui-components/src/general/icon/IconTram' {
	 let IconTram: (props: any) => JSX.Element;
	export default IconTram;

}
declare module '@volst/ui-components/src/general/icon/IconTransferWithinAStation' {
	 let IconTransferWithinAStation: (props: any) => JSX.Element;
	export default IconTransferWithinAStation;

}
declare module '@volst/ui-components/src/general/icon/IconTransform' {
	 let IconTransform: (props: any) => JSX.Element;
	export default IconTransform;

}
declare module '@volst/ui-components/src/general/icon/IconTranslate' {
	 let IconTranslate: (props: any) => JSX.Element;
	export default IconTranslate;

}
declare module '@volst/ui-components/src/general/icon/IconTrendingDown' {
	 let IconTrendingDown: (props: any) => JSX.Element;
	export default IconTrendingDown;

}
declare module '@volst/ui-components/src/general/icon/IconTrendingFlat' {
	 let IconTrendingFlat: (props: any) => JSX.Element;
	export default IconTrendingFlat;

}
declare module '@volst/ui-components/src/general/icon/IconTrendingUp' {
	 let IconTrendingUp: (props: any) => JSX.Element;
	export default IconTrendingUp;

}
declare module '@volst/ui-components/src/general/icon/IconTune' {
	 let IconTune: (props: any) => JSX.Element;
	export default IconTune;

}
declare module '@volst/ui-components/src/general/icon/IconTurnedIn' {
	 let IconTurnedIn: (props: any) => JSX.Element;
	export default IconTurnedIn;

}
declare module '@volst/ui-components/src/general/icon/IconTurnedInNot' {
	 let IconTurnedInNot: (props: any) => JSX.Element;
	export default IconTurnedInNot;

}
declare module '@volst/ui-components/src/general/icon/IconTv' {
	 let IconTv: (props: any) => JSX.Element;
	export default IconTv;

}
declare module '@volst/ui-components/src/general/icon/IconUnarchive' {
	 let IconUnarchive: (props: any) => JSX.Element;
	export default IconUnarchive;

}
declare module '@volst/ui-components/src/general/icon/IconUndo' {
	 let IconUndo: (props: any) => JSX.Element;
	export default IconUndo;

}
declare module '@volst/ui-components/src/general/icon/IconUnfoldLess' {
	 let IconUnfoldLess: (props: any) => JSX.Element;
	export default IconUnfoldLess;

}
declare module '@volst/ui-components/src/general/icon/IconUnfoldMore' {
	 let IconUnfoldMore: (props: any) => JSX.Element;
	export default IconUnfoldMore;

}
declare module '@volst/ui-components/src/general/icon/IconUpdate' {
	 let IconUpdate: (props: any) => JSX.Element;
	export default IconUpdate;

}
declare module '@volst/ui-components/src/general/icon/IconUsb' {
	 let IconUsb: (props: any) => JSX.Element;
	export default IconUsb;

}
declare module '@volst/ui-components/src/general/icon/IconVerifiedUser' {
	 let IconVerifiedUser: (props: any) => JSX.Element;
	export default IconVerifiedUser;

}
declare module '@volst/ui-components/src/general/icon/IconVerticalAlignBottom' {
	 let IconVerticalAlignBottom: (props: any) => JSX.Element;
	export default IconVerticalAlignBottom;

}
declare module '@volst/ui-components/src/general/icon/IconVerticalAlignCenter' {
	 let IconVerticalAlignCenter: (props: any) => JSX.Element;
	export default IconVerticalAlignCenter;

}
declare module '@volst/ui-components/src/general/icon/IconVerticalAlignTop' {
	 let IconVerticalAlignTop: (props: any) => JSX.Element;
	export default IconVerticalAlignTop;

}
declare module '@volst/ui-components/src/general/icon/IconVibration' {
	 let IconVibration: (props: any) => JSX.Element;
	export default IconVibration;

}
declare module '@volst/ui-components/src/general/icon/IconVideoCall' {
	 let IconVideoCall: (props: any) => JSX.Element;
	export default IconVideoCall;

}
declare module '@volst/ui-components/src/general/icon/IconVideocam' {
	 let IconVideocam: (props: any) => JSX.Element;
	export default IconVideocam;

}
declare module '@volst/ui-components/src/general/icon/IconVideocamOff' {
	 let IconVideocamOff: (props: any) => JSX.Element;
	export default IconVideocamOff;

}
declare module '@volst/ui-components/src/general/icon/IconVideogameAsset' {
	 let IconVideogameAsset: (props: any) => JSX.Element;
	export default IconVideogameAsset;

}
declare module '@volst/ui-components/src/general/icon/IconVideoLabel' {
	 let IconVideoLabel: (props: any) => JSX.Element;
	export default IconVideoLabel;

}
declare module '@volst/ui-components/src/general/icon/IconVideoLibrary' {
	 let IconVideoLibrary: (props: any) => JSX.Element;
	export default IconVideoLibrary;

}
declare module '@volst/ui-components/src/general/icon/IconViewAgenda' {
	 let IconViewAgenda: (props: any) => JSX.Element;
	export default IconViewAgenda;

}
declare module '@volst/ui-components/src/general/icon/IconViewArray' {
	 let IconViewArray: (props: any) => JSX.Element;
	export default IconViewArray;

}
declare module '@volst/ui-components/src/general/icon/IconViewCarousel' {
	 let IconViewCarousel: (props: any) => JSX.Element;
	export default IconViewCarousel;

}
declare module '@volst/ui-components/src/general/icon/IconViewColumn' {
	 let IconViewColumn: (props: any) => JSX.Element;
	export default IconViewColumn;

}
declare module '@volst/ui-components/src/general/icon/IconViewComfy' {
	 let IconViewComfy: (props: any) => JSX.Element;
	export default IconViewComfy;

}
declare module '@volst/ui-components/src/general/icon/IconViewCompact' {
	 let IconViewCompact: (props: any) => JSX.Element;
	export default IconViewCompact;

}
declare module '@volst/ui-components/src/general/icon/IconViewDay' {
	 let IconViewDay: (props: any) => JSX.Element;
	export default IconViewDay;

}
declare module '@volst/ui-components/src/general/icon/IconViewHeadline' {
	 let IconViewHeadline: (props: any) => JSX.Element;
	export default IconViewHeadline;

}
declare module '@volst/ui-components/src/general/icon/IconViewList' {
	 let IconViewList: (props: any) => JSX.Element;
	export default IconViewList;

}
declare module '@volst/ui-components/src/general/icon/IconViewModule' {
	 let IconViewModule: (props: any) => JSX.Element;
	export default IconViewModule;

}
declare module '@volst/ui-components/src/general/icon/IconViewQuilt' {
	 let IconViewQuilt: (props: any) => JSX.Element;
	export default IconViewQuilt;

}
declare module '@volst/ui-components/src/general/icon/IconViewStream' {
	 let IconViewStream: (props: any) => JSX.Element;
	export default IconViewStream;

}
declare module '@volst/ui-components/src/general/icon/IconViewWeek' {
	 let IconViewWeek: (props: any) => JSX.Element;
	export default IconViewWeek;

}
declare module '@volst/ui-components/src/general/icon/IconVignette' {
	 let IconVignette: (props: any) => JSX.Element;
	export default IconVignette;

}
declare module '@volst/ui-components/src/general/icon/IconVisibility' {
	 let IconVisibility: (props: any) => JSX.Element;
	export default IconVisibility;

}
declare module '@volst/ui-components/src/general/icon/IconVisibilityOff' {
	 let IconVisibilityOff: (props: any) => JSX.Element;
	export default IconVisibilityOff;

}
declare module '@volst/ui-components/src/general/icon/IconVoiceChat' {
	 let IconVoiceChat: (props: any) => JSX.Element;
	export default IconVoiceChat;

}
declare module '@volst/ui-components/src/general/icon/IconVoicemail' {
	 let IconVoicemail: (props: any) => JSX.Element;
	export default IconVoicemail;

}
declare module '@volst/ui-components/src/general/icon/IconVolumeDown' {
	 let IconVolumeDown: (props: any) => JSX.Element;
	export default IconVolumeDown;

}
declare module '@volst/ui-components/src/general/icon/IconVolumeMute' {
	 let IconVolumeMute: (props: any) => JSX.Element;
	export default IconVolumeMute;

}
declare module '@volst/ui-components/src/general/icon/IconVolumeOff' {
	 let IconVolumeOff: (props: any) => JSX.Element;
	export default IconVolumeOff;

}
declare module '@volst/ui-components/src/general/icon/IconVolumeUp' {
	 let IconVolumeUp: (props: any) => JSX.Element;
	export default IconVolumeUp;

}
declare module '@volst/ui-components/src/general/icon/IconVpnKey' {
	 let IconVpnKey: (props: any) => JSX.Element;
	export default IconVpnKey;

}
declare module '@volst/ui-components/src/general/icon/IconVpnLock' {
	 let IconVpnLock: (props: any) => JSX.Element;
	export default IconVpnLock;

}
declare module '@volst/ui-components/src/general/icon/IconWallpaper' {
	 let IconWallpaper: (props: any) => JSX.Element;
	export default IconWallpaper;

}
declare module '@volst/ui-components/src/general/icon/IconWarning' {
	 let IconWarning: (props: any) => JSX.Element;
	export default IconWarning;

}
declare module '@volst/ui-components/src/general/icon/IconWatch' {
	 let IconWatch: (props: any) => JSX.Element;
	export default IconWatch;

}
declare module '@volst/ui-components/src/general/icon/IconWatchLater' {
	 let IconWatchLater: (props: any) => JSX.Element;
	export default IconWatchLater;

}
declare module '@volst/ui-components/src/general/icon/IconWbAuto' {
	 let IconWbAuto: (props: any) => JSX.Element;
	export default IconWbAuto;

}
declare module '@volst/ui-components/src/general/icon/IconWbCloudy' {
	 let IconWbCloudy: (props: any) => JSX.Element;
	export default IconWbCloudy;

}
declare module '@volst/ui-components/src/general/icon/IconWbIncandescent' {
	 let IconWbIncandescent: (props: any) => JSX.Element;
	export default IconWbIncandescent;

}
declare module '@volst/ui-components/src/general/icon/IconWbIridescent' {
	 let IconWbIridescent: (props: any) => JSX.Element;
	export default IconWbIridescent;

}
declare module '@volst/ui-components/src/general/icon/IconWbSunny' {
	 let IconWbSunny: (props: any) => JSX.Element;
	export default IconWbSunny;

}
declare module '@volst/ui-components/src/general/icon/IconWc' {
	 let IconWc: (props: any) => JSX.Element;
	export default IconWc;

}
declare module '@volst/ui-components/src/general/icon/IconWeb' {
	 let IconWeb: (props: any) => JSX.Element;
	export default IconWeb;

}
declare module '@volst/ui-components/src/general/icon/IconWebAsset' {
	 let IconWebAsset: (props: any) => JSX.Element;
	export default IconWebAsset;

}
declare module '@volst/ui-components/src/general/icon/IconWeekend' {
	 let IconWeekend: (props: any) => JSX.Element;
	export default IconWeekend;

}
declare module '@volst/ui-components/src/general/icon/IconWhatshot' {
	 let IconWhatshot: (props: any) => JSX.Element;
	export default IconWhatshot;

}
declare module '@volst/ui-components/src/general/icon/IconWidgets' {
	 let IconWidgets: (props: any) => JSX.Element;
	export default IconWidgets;

}
declare module '@volst/ui-components/src/general/icon/IconWifi' {
	 let IconWifi: (props: any) => JSX.Element;
	export default IconWifi;

}
declare module '@volst/ui-components/src/general/icon/IconWifiLock' {
	 let IconWifiLock: (props: any) => JSX.Element;
	export default IconWifiLock;

}
declare module '@volst/ui-components/src/general/icon/IconWifiTethering' {
	 let IconWifiTethering: (props: any) => JSX.Element;
	export default IconWifiTethering;

}
declare module '@volst/ui-components/src/general/icon/IconWork' {
	 let IconWork: (props: any) => JSX.Element;
	export default IconWork;

}
declare module '@volst/ui-components/src/general/icon/IconWrapText' {
	 let IconWrapText: (props: any) => JSX.Element;
	export default IconWrapText;

}
declare module '@volst/ui-components/src/general/icon/IconYoutubeSearchedFor' {
	 let IconYoutubeSearchedFor: (props: any) => JSX.Element;
	export default IconYoutubeSearchedFor;

}
declare module '@volst/ui-components/src/general/icon/IconZoomIn' {
	 let IconZoomIn: (props: any) => JSX.Element;
	export default IconZoomIn;

}
declare module '@volst/ui-components/src/general/icon/IconZoomOut' {
	 let IconZoomOut: (props: any) => JSX.Element;
	export default IconZoomOut;

}
declare module '@volst/ui-components/src/general/icon/IconZoomOutMap' {
	 let IconZoomOutMap: (props: any) => JSX.Element;
	export default IconZoomOutMap;

}
declare module '@volst/ui-components/src/general/icon/index' {
	export { default as IconAccessAlarm } from '@volst/ui-components/src/general/icon/IconAccessAlarm';
	export { default as IconAccessAlarms } from '@volst/ui-components/src/general/icon/IconAccessAlarms';
	export { default as IconAccessibility } from '@volst/ui-components/src/general/icon/IconAccessibility';
	export { default as IconAccessible } from '@volst/ui-components/src/general/icon/IconAccessible';
	export { default as IconAccessTime } from '@volst/ui-components/src/general/icon/IconAccessTime';
	export { default as IconAccountBalance } from '@volst/ui-components/src/general/icon/IconAccountBalance';
	export { default as IconAccountBalanceWallet } from '@volst/ui-components/src/general/icon/IconAccountBalanceWallet';
	export { default as IconAccountBox } from '@volst/ui-components/src/general/icon/IconAccountBox';
	export { default as IconAccountCircle } from '@volst/ui-components/src/general/icon/IconAccountCircle';
	export { default as IconAcUnit } from '@volst/ui-components/src/general/icon/IconAcUnit';
	export { default as IconAdb } from '@volst/ui-components/src/general/icon/IconAdb';
	export { default as IconAdd } from '@volst/ui-components/src/general/icon/IconAdd';
	export { default as IconAddAlarm } from '@volst/ui-components/src/general/icon/IconAddAlarm';
	export { default as IconAddAlert } from '@volst/ui-components/src/general/icon/IconAddAlert';
	export { default as IconAddAPhoto } from '@volst/ui-components/src/general/icon/IconAddAPhoto';
	export { default as IconAddBox } from '@volst/ui-components/src/general/icon/IconAddBox';
	export { default as IconAddCircle } from '@volst/ui-components/src/general/icon/IconAddCircle';
	export { default as IconAddCircleOutline } from '@volst/ui-components/src/general/icon/IconAddCircleOutline';
	export { default as IconAddLocation } from '@volst/ui-components/src/general/icon/IconAddLocation';
	export { default as IconAddShoppingCart } from '@volst/ui-components/src/general/icon/IconAddShoppingCart';
	export { default as IconAddToPhotos } from '@volst/ui-components/src/general/icon/IconAddToPhotos';
	export { default as IconAddToQueue } from '@volst/ui-components/src/general/icon/IconAddToQueue';
	export { default as IconAdjust } from '@volst/ui-components/src/general/icon/IconAdjust';
	export { default as IconAirlineSeatFlat } from '@volst/ui-components/src/general/icon/IconAirlineSeatFlat';
	export { default as IconAirlineSeatFlatAngled } from '@volst/ui-components/src/general/icon/IconAirlineSeatFlatAngled';
	export { default as IconAirlineSeatIndividualSuite } from '@volst/ui-components/src/general/icon/IconAirlineSeatIndividualSuite';
	export { default as IconAirlineSeatLegroomExtra } from '@volst/ui-components/src/general/icon/IconAirlineSeatLegroomExtra';
	export { default as IconAirlineSeatLegroomNormal } from '@volst/ui-components/src/general/icon/IconAirlineSeatLegroomNormal';
	export { default as IconAirlineSeatLegroomReduced } from '@volst/ui-components/src/general/icon/IconAirlineSeatLegroomReduced';
	export { default as IconAirlineSeatReclineExtra } from '@volst/ui-components/src/general/icon/IconAirlineSeatReclineExtra';
	export { default as IconAirlineSeatReclineNormal } from '@volst/ui-components/src/general/icon/IconAirlineSeatReclineNormal';
	export { default as IconAirplanemodeActive } from '@volst/ui-components/src/general/icon/IconAirplanemodeActive';
	export { default as IconAirplanemodeInactive } from '@volst/ui-components/src/general/icon/IconAirplanemodeInactive';
	export { default as IconAirplay } from '@volst/ui-components/src/general/icon/IconAirplay';
	export { default as IconAirportShuttle } from '@volst/ui-components/src/general/icon/IconAirportShuttle';
	export { default as IconAlarm } from '@volst/ui-components/src/general/icon/IconAlarm';
	export { default as IconAlarmAdd } from '@volst/ui-components/src/general/icon/IconAlarmAdd';
	export { default as IconAlarmOff } from '@volst/ui-components/src/general/icon/IconAlarmOff';
	export { default as IconAlarmOn } from '@volst/ui-components/src/general/icon/IconAlarmOn';
	export { default as IconAlbum } from '@volst/ui-components/src/general/icon/IconAlbum';
	export { default as IconAllInclusive } from '@volst/ui-components/src/general/icon/IconAllInclusive';
	export { default as IconAllOut } from '@volst/ui-components/src/general/icon/IconAllOut';
	export { default as IconAndroid } from '@volst/ui-components/src/general/icon/IconAndroid';
	export { default as IconAnnouncement } from '@volst/ui-components/src/general/icon/IconAnnouncement';
	export { default as IconApps } from '@volst/ui-components/src/general/icon/IconApps';
	export { default as IconArchive } from '@volst/ui-components/src/general/icon/IconArchive';
	export { default as IconArrowBack } from '@volst/ui-components/src/general/icon/IconArrowBack';
	export { default as IconArrowDownward } from '@volst/ui-components/src/general/icon/IconArrowDownward';
	export { default as IconArrowDropDown } from '@volst/ui-components/src/general/icon/IconArrowDropDown';
	export { default as IconArrowDropDownCircle } from '@volst/ui-components/src/general/icon/IconArrowDropDownCircle';
	export { default as IconArrowDropUp } from '@volst/ui-components/src/general/icon/IconArrowDropUp';
	export { default as IconArrowForward } from '@volst/ui-components/src/general/icon/IconArrowForward';
	export { default as IconArrowUpward } from '@volst/ui-components/src/general/icon/IconArrowUpward';
	export { default as IconArtTrack } from '@volst/ui-components/src/general/icon/IconArtTrack';
	export { default as IconAspectRatio } from '@volst/ui-components/src/general/icon/IconAspectRatio';
	export { default as IconAssessment } from '@volst/ui-components/src/general/icon/IconAssessment';
	export { default as IconAssignment } from '@volst/ui-components/src/general/icon/IconAssignment';
	export { default as IconAssignmentInd } from '@volst/ui-components/src/general/icon/IconAssignmentInd';
	export { default as IconAssignmentLate } from '@volst/ui-components/src/general/icon/IconAssignmentLate';
	export { default as IconAssignmentReturn } from '@volst/ui-components/src/general/icon/IconAssignmentReturn';
	export { default as IconAssignmentReturned } from '@volst/ui-components/src/general/icon/IconAssignmentReturned';
	export { default as IconAssignmentTurnedIn } from '@volst/ui-components/src/general/icon/IconAssignmentTurnedIn';
	export { default as IconAssistant } from '@volst/ui-components/src/general/icon/IconAssistant';
	export { default as IconAssistantPhoto } from '@volst/ui-components/src/general/icon/IconAssistantPhoto';
	export { default as IconAttachFile } from '@volst/ui-components/src/general/icon/IconAttachFile';
	export { default as IconAttachment } from '@volst/ui-components/src/general/icon/IconAttachment';
	export { default as IconAttachMoney } from '@volst/ui-components/src/general/icon/IconAttachMoney';
	export { default as IconAudiotrack } from '@volst/ui-components/src/general/icon/IconAudiotrack';
	export { default as IconAutorenew } from '@volst/ui-components/src/general/icon/IconAutorenew';
	export { default as IconAvTimer } from '@volst/ui-components/src/general/icon/IconAvTimer';
	export { default as IconBackspace } from '@volst/ui-components/src/general/icon/IconBackspace';
	export { default as IconBackup } from '@volst/ui-components/src/general/icon/IconBackup';
	export { default as IconBattery20 } from '@volst/ui-components/src/general/icon/IconBattery20';
	export { default as IconBattery30 } from '@volst/ui-components/src/general/icon/IconBattery30';
	export { default as IconBattery50 } from '@volst/ui-components/src/general/icon/IconBattery50';
	export { default as IconBattery60 } from '@volst/ui-components/src/general/icon/IconBattery60';
	export { default as IconBattery80 } from '@volst/ui-components/src/general/icon/IconBattery80';
	export { default as IconBattery90 } from '@volst/ui-components/src/general/icon/IconBattery90';
	export { default as IconBatteryAlert } from '@volst/ui-components/src/general/icon/IconBatteryAlert';
	export { default as IconBatteryCharging20 } from '@volst/ui-components/src/general/icon/IconBatteryCharging20';
	export { default as IconBatteryCharging30 } from '@volst/ui-components/src/general/icon/IconBatteryCharging30';
	export { default as IconBatteryCharging50 } from '@volst/ui-components/src/general/icon/IconBatteryCharging50';
	export { default as IconBatteryCharging60 } from '@volst/ui-components/src/general/icon/IconBatteryCharging60';
	export { default as IconBatteryCharging80 } from '@volst/ui-components/src/general/icon/IconBatteryCharging80';
	export { default as IconBatteryCharging90 } from '@volst/ui-components/src/general/icon/IconBatteryCharging90';
	export { default as IconBatteryChargingFull } from '@volst/ui-components/src/general/icon/IconBatteryChargingFull';
	export { default as IconBatteryFull } from '@volst/ui-components/src/general/icon/IconBatteryFull';
	export { default as IconBatteryStd } from '@volst/ui-components/src/general/icon/IconBatteryStd';
	export { default as IconBatteryUnknown } from '@volst/ui-components/src/general/icon/IconBatteryUnknown';
	export { default as IconBeachAccess } from '@volst/ui-components/src/general/icon/IconBeachAccess';
	export { default as IconBeenhere } from '@volst/ui-components/src/general/icon/IconBeenhere';
	export { default as IconBlock } from '@volst/ui-components/src/general/icon/IconBlock';
	export { default as IconBluetooth } from '@volst/ui-components/src/general/icon/IconBluetooth';
	export { default as IconBluetoothAudio } from '@volst/ui-components/src/general/icon/IconBluetoothAudio';
	export { default as IconBluetoothConnected } from '@volst/ui-components/src/general/icon/IconBluetoothConnected';
	export { default as IconBluetoothDisabled } from '@volst/ui-components/src/general/icon/IconBluetoothDisabled';
	export { default as IconBluetoothSearching } from '@volst/ui-components/src/general/icon/IconBluetoothSearching';
	export { default as IconBlurCircular } from '@volst/ui-components/src/general/icon/IconBlurCircular';
	export { default as IconBlurLinear } from '@volst/ui-components/src/general/icon/IconBlurLinear';
	export { default as IconBlurOff } from '@volst/ui-components/src/general/icon/IconBlurOff';
	export { default as IconBlurOn } from '@volst/ui-components/src/general/icon/IconBlurOn';
	export { default as IconBook } from '@volst/ui-components/src/general/icon/IconBook';
	export { default as IconBookmark } from '@volst/ui-components/src/general/icon/IconBookmark';
	export { default as IconBookmarkBorder } from '@volst/ui-components/src/general/icon/IconBookmarkBorder';
	export { default as IconBorderAll } from '@volst/ui-components/src/general/icon/IconBorderAll';
	export { default as IconBorderBottom } from '@volst/ui-components/src/general/icon/IconBorderBottom';
	export { default as IconBorderClear } from '@volst/ui-components/src/general/icon/IconBorderClear';
	export { default as IconBorderColor } from '@volst/ui-components/src/general/icon/IconBorderColor';
	export { default as IconBorderHorizontal } from '@volst/ui-components/src/general/icon/IconBorderHorizontal';
	export { default as IconBorderInner } from '@volst/ui-components/src/general/icon/IconBorderInner';
	export { default as IconBorderLeft } from '@volst/ui-components/src/general/icon/IconBorderLeft';
	export { default as IconBorderOuter } from '@volst/ui-components/src/general/icon/IconBorderOuter';
	export { default as IconBorderRight } from '@volst/ui-components/src/general/icon/IconBorderRight';
	export { default as IconBorderStyle } from '@volst/ui-components/src/general/icon/IconBorderStyle';
	export { default as IconBorderTop } from '@volst/ui-components/src/general/icon/IconBorderTop';
	export { default as IconBorderVertical } from '@volst/ui-components/src/general/icon/IconBorderVertical';
	export { default as IconBrandingWatermark } from '@volst/ui-components/src/general/icon/IconBrandingWatermark';
	export { default as IconBrightness1 } from '@volst/ui-components/src/general/icon/IconBrightness1';
	export { default as IconBrightness2 } from '@volst/ui-components/src/general/icon/IconBrightness2';
	export { default as IconBrightness3 } from '@volst/ui-components/src/general/icon/IconBrightness3';
	export { default as IconBrightness4 } from '@volst/ui-components/src/general/icon/IconBrightness4';
	export { default as IconBrightness5 } from '@volst/ui-components/src/general/icon/IconBrightness5';
	export { default as IconBrightness6 } from '@volst/ui-components/src/general/icon/IconBrightness6';
	export { default as IconBrightness7 } from '@volst/ui-components/src/general/icon/IconBrightness7';
	export { default as IconBrightnessAuto } from '@volst/ui-components/src/general/icon/IconBrightnessAuto';
	export { default as IconBrightnessHigh } from '@volst/ui-components/src/general/icon/IconBrightnessHigh';
	export { default as IconBrightnessLow } from '@volst/ui-components/src/general/icon/IconBrightnessLow';
	export { default as IconBrightnessMedium } from '@volst/ui-components/src/general/icon/IconBrightnessMedium';
	export { default as IconBrokenImage } from '@volst/ui-components/src/general/icon/IconBrokenImage';
	export { default as IconBrush } from '@volst/ui-components/src/general/icon/IconBrush';
	export { default as IconBubbleChart } from '@volst/ui-components/src/general/icon/IconBubbleChart';
	export { default as IconBugReport } from '@volst/ui-components/src/general/icon/IconBugReport';
	export { default as IconBuild } from '@volst/ui-components/src/general/icon/IconBuild';
	export { default as IconBurstMode } from '@volst/ui-components/src/general/icon/IconBurstMode';
	export { default as IconBusiness } from '@volst/ui-components/src/general/icon/IconBusiness';
	export { default as IconBusinessCenter } from '@volst/ui-components/src/general/icon/IconBusinessCenter';
	export { default as IconCached } from '@volst/ui-components/src/general/icon/IconCached';
	export { default as IconCake } from '@volst/ui-components/src/general/icon/IconCake';
	export { default as IconCall } from '@volst/ui-components/src/general/icon/IconCall';
	export { default as IconCallEnd } from '@volst/ui-components/src/general/icon/IconCallEnd';
	export { default as IconCallMade } from '@volst/ui-components/src/general/icon/IconCallMade';
	export { default as IconCallMerge } from '@volst/ui-components/src/general/icon/IconCallMerge';
	export { default as IconCallMissed } from '@volst/ui-components/src/general/icon/IconCallMissed';
	export { default as IconCallMissedOutgoing } from '@volst/ui-components/src/general/icon/IconCallMissedOutgoing';
	export { default as IconCallReceived } from '@volst/ui-components/src/general/icon/IconCallReceived';
	export { default as IconCallSplit } from '@volst/ui-components/src/general/icon/IconCallSplit';
	export { default as IconCallToAction } from '@volst/ui-components/src/general/icon/IconCallToAction';
	export { default as IconCamera } from '@volst/ui-components/src/general/icon/IconCamera';
	export { default as IconCameraAlt } from '@volst/ui-components/src/general/icon/IconCameraAlt';
	export { default as IconCameraEnhance } from '@volst/ui-components/src/general/icon/IconCameraEnhance';
	export { default as IconCameraFront } from '@volst/ui-components/src/general/icon/IconCameraFront';
	export { default as IconCameraRear } from '@volst/ui-components/src/general/icon/IconCameraRear';
	export { default as IconCameraRoll } from '@volst/ui-components/src/general/icon/IconCameraRoll';
	export { default as IconCancel } from '@volst/ui-components/src/general/icon/IconCancel';
	export { default as IconCardGiftcard } from '@volst/ui-components/src/general/icon/IconCardGiftcard';
	export { default as IconCardMembership } from '@volst/ui-components/src/general/icon/IconCardMembership';
	export { default as IconCardTravel } from '@volst/ui-components/src/general/icon/IconCardTravel';
	export { default as IconCasino } from '@volst/ui-components/src/general/icon/IconCasino';
	export { default as IconCast } from '@volst/ui-components/src/general/icon/IconCast';
	export { default as IconCastConnected } from '@volst/ui-components/src/general/icon/IconCastConnected';
	export { default as IconCenterFocusStrong } from '@volst/ui-components/src/general/icon/IconCenterFocusStrong';
	export { default as IconCenterFocusWeak } from '@volst/ui-components/src/general/icon/IconCenterFocusWeak';
	export { default as IconChangeHistory } from '@volst/ui-components/src/general/icon/IconChangeHistory';
	export { default as IconChat } from '@volst/ui-components/src/general/icon/IconChat';
	export { default as IconChatBubble } from '@volst/ui-components/src/general/icon/IconChatBubble';
	export { default as IconChatBubbleOutline } from '@volst/ui-components/src/general/icon/IconChatBubbleOutline';
	export { default as IconCheck } from '@volst/ui-components/src/general/icon/IconCheck';
	export { default as IconCheckBox } from '@volst/ui-components/src/general/icon/IconCheckBox';
	export { default as IconCheckBoxOutlineBlank } from '@volst/ui-components/src/general/icon/IconCheckBoxOutlineBlank';
	export { default as IconCheckCircle } from '@volst/ui-components/src/general/icon/IconCheckCircle';
	export { default as IconChevronLeft } from '@volst/ui-components/src/general/icon/IconChevronLeft';
	export { default as IconChevronRight } from '@volst/ui-components/src/general/icon/IconChevronRight';
	export { default as IconChildCare } from '@volst/ui-components/src/general/icon/IconChildCare';
	export { default as IconChildFriendly } from '@volst/ui-components/src/general/icon/IconChildFriendly';
	export { default as IconChromeReaderMode } from '@volst/ui-components/src/general/icon/IconChromeReaderMode';
	export { default as IconClass } from '@volst/ui-components/src/general/icon/IconClass';
	export { default as IconClear } from '@volst/ui-components/src/general/icon/IconClear';
	export { default as IconClearAll } from '@volst/ui-components/src/general/icon/IconClearAll';
	export { default as IconClose } from '@volst/ui-components/src/general/icon/IconClose';
	export { default as IconClosedCaption } from '@volst/ui-components/src/general/icon/IconClosedCaption';
	export { default as IconCloud } from '@volst/ui-components/src/general/icon/IconCloud';
	export { default as IconCloudCircle } from '@volst/ui-components/src/general/icon/IconCloudCircle';
	export { default as IconCloudDone } from '@volst/ui-components/src/general/icon/IconCloudDone';
	export { default as IconCloudDownload } from '@volst/ui-components/src/general/icon/IconCloudDownload';
	export { default as IconCloudOff } from '@volst/ui-components/src/general/icon/IconCloudOff';
	export { default as IconCloudQueue } from '@volst/ui-components/src/general/icon/IconCloudQueue';
	export { default as IconCloudUpload } from '@volst/ui-components/src/general/icon/IconCloudUpload';
	export { default as IconCode } from '@volst/ui-components/src/general/icon/IconCode';
	export { default as IconCollections } from '@volst/ui-components/src/general/icon/IconCollections';
	export { default as IconCollectionsBookmark } from '@volst/ui-components/src/general/icon/IconCollectionsBookmark';
	export { default as IconColorize } from '@volst/ui-components/src/general/icon/IconColorize';
	export { default as IconColorLens } from '@volst/ui-components/src/general/icon/IconColorLens';
	export { default as IconComment } from '@volst/ui-components/src/general/icon/IconComment';
	export { default as IconCompare } from '@volst/ui-components/src/general/icon/IconCompare';
	export { default as IconCompareArrows } from '@volst/ui-components/src/general/icon/IconCompareArrows';
	export { default as IconComputer } from '@volst/ui-components/src/general/icon/IconComputer';
	export { default as IconConfirmationNumber } from '@volst/ui-components/src/general/icon/IconConfirmationNumber';
	export { default as IconContactMail } from '@volst/ui-components/src/general/icon/IconContactMail';
	export { default as IconContactPhone } from '@volst/ui-components/src/general/icon/IconContactPhone';
	export { default as IconContacts } from '@volst/ui-components/src/general/icon/IconContacts';
	export { default as IconContentCopy } from '@volst/ui-components/src/general/icon/IconContentCopy';
	export { default as IconContentCut } from '@volst/ui-components/src/general/icon/IconContentCut';
	export { default as IconContentPaste } from '@volst/ui-components/src/general/icon/IconContentPaste';
	export { default as IconControlPoint } from '@volst/ui-components/src/general/icon/IconControlPoint';
	export { default as IconControlPointDuplicate } from '@volst/ui-components/src/general/icon/IconControlPointDuplicate';
	export { default as IconCopyright } from '@volst/ui-components/src/general/icon/IconCopyright';
	export { default as IconCreate } from '@volst/ui-components/src/general/icon/IconCreate';
	export { default as IconCreateNewFolder } from '@volst/ui-components/src/general/icon/IconCreateNewFolder';
	export { default as IconCreditCard } from '@volst/ui-components/src/general/icon/IconCreditCard';
	export { default as IconCrop } from '@volst/ui-components/src/general/icon/IconCrop';
	export { default as IconCrop169 } from '@volst/ui-components/src/general/icon/IconCrop169';
	export { default as IconCrop32 } from '@volst/ui-components/src/general/icon/IconCrop32';
	export { default as IconCrop54 } from '@volst/ui-components/src/general/icon/IconCrop54';
	export { default as IconCrop75 } from '@volst/ui-components/src/general/icon/IconCrop75';
	export { default as IconCropDin } from '@volst/ui-components/src/general/icon/IconCropDin';
	export { default as IconCropFree } from '@volst/ui-components/src/general/icon/IconCropFree';
	export { default as IconCropLandscape } from '@volst/ui-components/src/general/icon/IconCropLandscape';
	export { default as IconCropOriginal } from '@volst/ui-components/src/general/icon/IconCropOriginal';
	export { default as IconCropPortrait } from '@volst/ui-components/src/general/icon/IconCropPortrait';
	export { default as IconCropRotate } from '@volst/ui-components/src/general/icon/IconCropRotate';
	export { default as IconCropSquare } from '@volst/ui-components/src/general/icon/IconCropSquare';
	export { default as IconDashboard } from '@volst/ui-components/src/general/icon/IconDashboard';
	export { default as IconDataUsage } from '@volst/ui-components/src/general/icon/IconDataUsage';
	export { default as IconDateRange } from '@volst/ui-components/src/general/icon/IconDateRange';
	export { default as IconDehaze } from '@volst/ui-components/src/general/icon/IconDehaze';
	export { default as IconDelete } from '@volst/ui-components/src/general/icon/IconDelete';
	export { default as IconDeleteForever } from '@volst/ui-components/src/general/icon/IconDeleteForever';
	export { default as IconDeleteSweep } from '@volst/ui-components/src/general/icon/IconDeleteSweep';
	export { default as IconDescription } from '@volst/ui-components/src/general/icon/IconDescription';
	export { default as IconDesktopMac } from '@volst/ui-components/src/general/icon/IconDesktopMac';
	export { default as IconDesktopWindows } from '@volst/ui-components/src/general/icon/IconDesktopWindows';
	export { default as IconDetails } from '@volst/ui-components/src/general/icon/IconDetails';
	export { default as IconDeveloperBoard } from '@volst/ui-components/src/general/icon/IconDeveloperBoard';
	export { default as IconDeveloperMode } from '@volst/ui-components/src/general/icon/IconDeveloperMode';
	export { default as IconDeviceHub } from '@volst/ui-components/src/general/icon/IconDeviceHub';
	export { default as IconDevices } from '@volst/ui-components/src/general/icon/IconDevices';
	export { default as IconDevicesOther } from '@volst/ui-components/src/general/icon/IconDevicesOther';
	export { default as IconDialerSip } from '@volst/ui-components/src/general/icon/IconDialerSip';
	export { default as IconDialpad } from '@volst/ui-components/src/general/icon/IconDialpad';
	export { default as IconDirections } from '@volst/ui-components/src/general/icon/IconDirections';
	export { default as IconDirectionsBike } from '@volst/ui-components/src/general/icon/IconDirectionsBike';
	export { default as IconDirectionsBoat } from '@volst/ui-components/src/general/icon/IconDirectionsBoat';
	export { default as IconDirectionsBus } from '@volst/ui-components/src/general/icon/IconDirectionsBus';
	export { default as IconDirectionsCar } from '@volst/ui-components/src/general/icon/IconDirectionsCar';
	export { default as IconDirectionsRailway } from '@volst/ui-components/src/general/icon/IconDirectionsRailway';
	export { default as IconDirectionsRun } from '@volst/ui-components/src/general/icon/IconDirectionsRun';
	export { default as IconDirectionsSubway } from '@volst/ui-components/src/general/icon/IconDirectionsSubway';
	export { default as IconDirectionsTransit } from '@volst/ui-components/src/general/icon/IconDirectionsTransit';
	export { default as IconDirectionsWalk } from '@volst/ui-components/src/general/icon/IconDirectionsWalk';
	export { default as IconDiscFull } from '@volst/ui-components/src/general/icon/IconDiscFull';
	export { default as IconDns } from '@volst/ui-components/src/general/icon/IconDns';
	export { default as IconDock } from '@volst/ui-components/src/general/icon/IconDock';
	export { default as IconDomain } from '@volst/ui-components/src/general/icon/IconDomain';
	export { default as IconDone } from '@volst/ui-components/src/general/icon/IconDone';
	export { default as IconDoneAll } from '@volst/ui-components/src/general/icon/IconDoneAll';
	export { default as IconDoNotDisturb } from '@volst/ui-components/src/general/icon/IconDoNotDisturb';
	export { default as IconDoNotDisturbAlt } from '@volst/ui-components/src/general/icon/IconDoNotDisturbAlt';
	export { default as IconDoNotDisturbOff } from '@volst/ui-components/src/general/icon/IconDoNotDisturbOff';
	export { default as IconDoNotDisturbOn } from '@volst/ui-components/src/general/icon/IconDoNotDisturbOn';
	export { default as IconDonutLarge } from '@volst/ui-components/src/general/icon/IconDonutLarge';
	export { default as IconDonutSmall } from '@volst/ui-components/src/general/icon/IconDonutSmall';
	export { default as IconDrafts } from '@volst/ui-components/src/general/icon/IconDrafts';
	export { default as IconDragHandle } from '@volst/ui-components/src/general/icon/IconDragHandle';
	export { default as IconDriveEta } from '@volst/ui-components/src/general/icon/IconDriveEta';
	export { default as IconDvr } from '@volst/ui-components/src/general/icon/IconDvr';
	export { default as IconEdit } from '@volst/ui-components/src/general/icon/IconEdit';
	export { default as IconEditLocation } from '@volst/ui-components/src/general/icon/IconEditLocation';
	export { default as IconEject } from '@volst/ui-components/src/general/icon/IconEject';
	export { default as IconEmail } from '@volst/ui-components/src/general/icon/IconEmail';
	export { default as IconEnhancedEncryption } from '@volst/ui-components/src/general/icon/IconEnhancedEncryption';
	export { default as IconEqualizer } from '@volst/ui-components/src/general/icon/IconEqualizer';
	export { default as IconError } from '@volst/ui-components/src/general/icon/IconError';
	export { default as IconErrorOutline } from '@volst/ui-components/src/general/icon/IconErrorOutline';
	export { default as IconEuroSymbol } from '@volst/ui-components/src/general/icon/IconEuroSymbol';
	export { default as IconEvent } from '@volst/ui-components/src/general/icon/IconEvent';
	export { default as IconEventAvailable } from '@volst/ui-components/src/general/icon/IconEventAvailable';
	export { default as IconEventBusy } from '@volst/ui-components/src/general/icon/IconEventBusy';
	export { default as IconEventNote } from '@volst/ui-components/src/general/icon/IconEventNote';
	export { default as IconEventSeat } from '@volst/ui-components/src/general/icon/IconEventSeat';
	export { default as IconEvStation } from '@volst/ui-components/src/general/icon/IconEvStation';
	export { default as IconExitToApp } from '@volst/ui-components/src/general/icon/IconExitToApp';
	export { default as IconExpandLess } from '@volst/ui-components/src/general/icon/IconExpandLess';
	export { default as IconExpandMore } from '@volst/ui-components/src/general/icon/IconExpandMore';
	export { default as IconExplicit } from '@volst/ui-components/src/general/icon/IconExplicit';
	export { default as IconExplore } from '@volst/ui-components/src/general/icon/IconExplore';
	export { default as IconExposure } from '@volst/ui-components/src/general/icon/IconExposure';
	export { default as IconExposureNeg1 } from '@volst/ui-components/src/general/icon/IconExposureNeg1';
	export { default as IconExposureNeg2 } from '@volst/ui-components/src/general/icon/IconExposureNeg2';
	export { default as IconExposurePlus1 } from '@volst/ui-components/src/general/icon/IconExposurePlus1';
	export { default as IconExposurePlus2 } from '@volst/ui-components/src/general/icon/IconExposurePlus2';
	export { default as IconExposureZero } from '@volst/ui-components/src/general/icon/IconExposureZero';
	export { default as IconExtension } from '@volst/ui-components/src/general/icon/IconExtension';
	export { default as IconFace } from '@volst/ui-components/src/general/icon/IconFace';
	export { default as IconFastForward } from '@volst/ui-components/src/general/icon/IconFastForward';
	export { default as IconFastRewind } from '@volst/ui-components/src/general/icon/IconFastRewind';
	export { default as IconFavorite } from '@volst/ui-components/src/general/icon/IconFavorite';
	export { default as IconFavoriteBorder } from '@volst/ui-components/src/general/icon/IconFavoriteBorder';
	export { default as IconFeaturedPlayList } from '@volst/ui-components/src/general/icon/IconFeaturedPlayList';
	export { default as IconFeaturedVideo } from '@volst/ui-components/src/general/icon/IconFeaturedVideo';
	export { default as IconFeedback } from '@volst/ui-components/src/general/icon/IconFeedback';
	export { default as IconFiberDvr } from '@volst/ui-components/src/general/icon/IconFiberDvr';
	export { default as IconFiberManualRecord } from '@volst/ui-components/src/general/icon/IconFiberManualRecord';
	export { default as IconFiberNew } from '@volst/ui-components/src/general/icon/IconFiberNew';
	export { default as IconFiberPin } from '@volst/ui-components/src/general/icon/IconFiberPin';
	export { default as IconFiberSmartRecord } from '@volst/ui-components/src/general/icon/IconFiberSmartRecord';
	export { default as IconFileDownload } from '@volst/ui-components/src/general/icon/IconFileDownload';
	export { default as IconFileUpload } from '@volst/ui-components/src/general/icon/IconFileUpload';
	export { default as IconFilter } from '@volst/ui-components/src/general/icon/IconFilter';
	export { default as IconFilter1 } from '@volst/ui-components/src/general/icon/IconFilter1';
	export { default as IconFilter2 } from '@volst/ui-components/src/general/icon/IconFilter2';
	export { default as IconFilter3 } from '@volst/ui-components/src/general/icon/IconFilter3';
	export { default as IconFilter4 } from '@volst/ui-components/src/general/icon/IconFilter4';
	export { default as IconFilter5 } from '@volst/ui-components/src/general/icon/IconFilter5';
	export { default as IconFilter6 } from '@volst/ui-components/src/general/icon/IconFilter6';
	export { default as IconFilter7 } from '@volst/ui-components/src/general/icon/IconFilter7';
	export { default as IconFilter8 } from '@volst/ui-components/src/general/icon/IconFilter8';
	export { default as IconFilter9 } from '@volst/ui-components/src/general/icon/IconFilter9';
	export { default as IconFilter9Plus } from '@volst/ui-components/src/general/icon/IconFilter9Plus';
	export { default as IconFilterBAndW } from '@volst/ui-components/src/general/icon/IconFilterBAndW';
	export { default as IconFilterCenterFocus } from '@volst/ui-components/src/general/icon/IconFilterCenterFocus';
	export { default as IconFilterDrama } from '@volst/ui-components/src/general/icon/IconFilterDrama';
	export { default as IconFilterFrames } from '@volst/ui-components/src/general/icon/IconFilterFrames';
	export { default as IconFilterHdr } from '@volst/ui-components/src/general/icon/IconFilterHdr';
	export { default as IconFilterList } from '@volst/ui-components/src/general/icon/IconFilterList';
	export { default as IconFilterNone } from '@volst/ui-components/src/general/icon/IconFilterNone';
	export { default as IconFilterTiltShift } from '@volst/ui-components/src/general/icon/IconFilterTiltShift';
	export { default as IconFilterVintage } from '@volst/ui-components/src/general/icon/IconFilterVintage';
	export { default as IconFindInPage } from '@volst/ui-components/src/general/icon/IconFindInPage';
	export { default as IconFindReplace } from '@volst/ui-components/src/general/icon/IconFindReplace';
	export { default as IconFingerprint } from '@volst/ui-components/src/general/icon/IconFingerprint';
	export { default as IconFirstPage } from '@volst/ui-components/src/general/icon/IconFirstPage';
	export { default as IconFitnessCenter } from '@volst/ui-components/src/general/icon/IconFitnessCenter';
	export { default as IconFlag } from '@volst/ui-components/src/general/icon/IconFlag';
	export { default as IconFlare } from '@volst/ui-components/src/general/icon/IconFlare';
	export { default as IconFlashAuto } from '@volst/ui-components/src/general/icon/IconFlashAuto';
	export { default as IconFlashOff } from '@volst/ui-components/src/general/icon/IconFlashOff';
	export { default as IconFlashOn } from '@volst/ui-components/src/general/icon/IconFlashOn';
	export { default as IconFlight } from '@volst/ui-components/src/general/icon/IconFlight';
	export { default as IconFlightLand } from '@volst/ui-components/src/general/icon/IconFlightLand';
	export { default as IconFlightTakeoff } from '@volst/ui-components/src/general/icon/IconFlightTakeoff';
	export { default as IconFlip } from '@volst/ui-components/src/general/icon/IconFlip';
	export { default as IconFlipToBack } from '@volst/ui-components/src/general/icon/IconFlipToBack';
	export { default as IconFlipToFront } from '@volst/ui-components/src/general/icon/IconFlipToFront';
	export { default as IconFolder } from '@volst/ui-components/src/general/icon/IconFolder';
	export { default as IconFolderOpen } from '@volst/ui-components/src/general/icon/IconFolderOpen';
	export { default as IconFolderShared } from '@volst/ui-components/src/general/icon/IconFolderShared';
	export { default as IconFolderSpecial } from '@volst/ui-components/src/general/icon/IconFolderSpecial';
	export { default as IconFontDownload } from '@volst/ui-components/src/general/icon/IconFontDownload';
	export { default as IconFormatAlignCenter } from '@volst/ui-components/src/general/icon/IconFormatAlignCenter';
	export { default as IconFormatAlignJustify } from '@volst/ui-components/src/general/icon/IconFormatAlignJustify';
	export { default as IconFormatAlignLeft } from '@volst/ui-components/src/general/icon/IconFormatAlignLeft';
	export { default as IconFormatAlignRight } from '@volst/ui-components/src/general/icon/IconFormatAlignRight';
	export { default as IconFormatBold } from '@volst/ui-components/src/general/icon/IconFormatBold';
	export { default as IconFormatClear } from '@volst/ui-components/src/general/icon/IconFormatClear';
	export { default as IconFormatColorFill } from '@volst/ui-components/src/general/icon/IconFormatColorFill';
	export { default as IconFormatColorReset } from '@volst/ui-components/src/general/icon/IconFormatColorReset';
	export { default as IconFormatColorText } from '@volst/ui-components/src/general/icon/IconFormatColorText';
	export { default as IconFormatIndentDecrease } from '@volst/ui-components/src/general/icon/IconFormatIndentDecrease';
	export { default as IconFormatIndentIncrease } from '@volst/ui-components/src/general/icon/IconFormatIndentIncrease';
	export { default as IconFormatItalic } from '@volst/ui-components/src/general/icon/IconFormatItalic';
	export { default as IconFormatLineSpacing } from '@volst/ui-components/src/general/icon/IconFormatLineSpacing';
	export { default as IconFormatListBulleted } from '@volst/ui-components/src/general/icon/IconFormatListBulleted';
	export { default as IconFormatListNumbered } from '@volst/ui-components/src/general/icon/IconFormatListNumbered';
	export { default as IconFormatPaint } from '@volst/ui-components/src/general/icon/IconFormatPaint';
	export { default as IconFormatQuote } from '@volst/ui-components/src/general/icon/IconFormatQuote';
	export { default as IconFormatShapes } from '@volst/ui-components/src/general/icon/IconFormatShapes';
	export { default as IconFormatSize } from '@volst/ui-components/src/general/icon/IconFormatSize';
	export { default as IconFormatStrikethrough } from '@volst/ui-components/src/general/icon/IconFormatStrikethrough';
	export { default as IconFormatTextdirectionLToR } from '@volst/ui-components/src/general/icon/IconFormatTextdirectionLToR';
	export { default as IconFormatTextdirectionRToL } from '@volst/ui-components/src/general/icon/IconFormatTextdirectionRToL';
	export { default as IconFormatUnderlined } from '@volst/ui-components/src/general/icon/IconFormatUnderlined';
	export { default as IconForum } from '@volst/ui-components/src/general/icon/IconForum';
	export { default as IconForward } from '@volst/ui-components/src/general/icon/IconForward';
	export { default as IconForward10 } from '@volst/ui-components/src/general/icon/IconForward10';
	export { default as IconForward30 } from '@volst/ui-components/src/general/icon/IconForward30';
	export { default as IconForward5 } from '@volst/ui-components/src/general/icon/IconForward5';
	export { default as IconFreeBreakfast } from '@volst/ui-components/src/general/icon/IconFreeBreakfast';
	export { default as IconFullscreen } from '@volst/ui-components/src/general/icon/IconFullscreen';
	export { default as IconFullscreenExit } from '@volst/ui-components/src/general/icon/IconFullscreenExit';
	export { default as IconFunctions } from '@volst/ui-components/src/general/icon/IconFunctions';
	export { default as IconGamepad } from '@volst/ui-components/src/general/icon/IconGamepad';
	export { default as IconGames } from '@volst/ui-components/src/general/icon/IconGames';
	export { default as IconGavel } from '@volst/ui-components/src/general/icon/IconGavel';
	export { default as IconGesture } from '@volst/ui-components/src/general/icon/IconGesture';
	export { default as IconGetApp } from '@volst/ui-components/src/general/icon/IconGetApp';
	export { default as IconGif } from '@volst/ui-components/src/general/icon/IconGif';
	export { default as IconGolfCourse } from '@volst/ui-components/src/general/icon/IconGolfCourse';
	export { default as IconGpsFixed } from '@volst/ui-components/src/general/icon/IconGpsFixed';
	export { default as IconGpsNotFixed } from '@volst/ui-components/src/general/icon/IconGpsNotFixed';
	export { default as IconGpsOff } from '@volst/ui-components/src/general/icon/IconGpsOff';
	export { default as IconGrade } from '@volst/ui-components/src/general/icon/IconGrade';
	export { default as IconGradient } from '@volst/ui-components/src/general/icon/IconGradient';
	export { default as IconGrain } from '@volst/ui-components/src/general/icon/IconGrain';
	export { default as IconGraphicEq } from '@volst/ui-components/src/general/icon/IconGraphicEq';
	export { default as IconGridOff } from '@volst/ui-components/src/general/icon/IconGridOff';
	export { default as IconGridOn } from '@volst/ui-components/src/general/icon/IconGridOn';
	export { default as IconGroup } from '@volst/ui-components/src/general/icon/IconGroup';
	export { default as IconGroupAdd } from '@volst/ui-components/src/general/icon/IconGroupAdd';
	export { default as IconGroupWork } from '@volst/ui-components/src/general/icon/IconGroupWork';
	export { default as IconGTranslate } from '@volst/ui-components/src/general/icon/IconGTranslate';
	export { default as IconHd } from '@volst/ui-components/src/general/icon/IconHd';
	export { default as IconHdrOff } from '@volst/ui-components/src/general/icon/IconHdrOff';
	export { default as IconHdrOn } from '@volst/ui-components/src/general/icon/IconHdrOn';
	export { default as IconHdrStrong } from '@volst/ui-components/src/general/icon/IconHdrStrong';
	export { default as IconHdrWeak } from '@volst/ui-components/src/general/icon/IconHdrWeak';
	export { default as IconHeadset } from '@volst/ui-components/src/general/icon/IconHeadset';
	export { default as IconHeadsetMic } from '@volst/ui-components/src/general/icon/IconHeadsetMic';
	export { default as IconHealing } from '@volst/ui-components/src/general/icon/IconHealing';
	export { default as IconHearing } from '@volst/ui-components/src/general/icon/IconHearing';
	export { default as IconHelp } from '@volst/ui-components/src/general/icon/IconHelp';
	export { default as IconHelpOutline } from '@volst/ui-components/src/general/icon/IconHelpOutline';
	export { default as IconHighlight } from '@volst/ui-components/src/general/icon/IconHighlight';
	export { default as IconHighlightOff } from '@volst/ui-components/src/general/icon/IconHighlightOff';
	export { default as IconHighQuality } from '@volst/ui-components/src/general/icon/IconHighQuality';
	export { default as IconHistory } from '@volst/ui-components/src/general/icon/IconHistory';
	export { default as IconHome } from '@volst/ui-components/src/general/icon/IconHome';
	export { default as IconHotel } from '@volst/ui-components/src/general/icon/IconHotel';
	export { default as IconHotTub } from '@volst/ui-components/src/general/icon/IconHotTub';
	export { default as IconHourglassEmpty } from '@volst/ui-components/src/general/icon/IconHourglassEmpty';
	export { default as IconHourglassFull } from '@volst/ui-components/src/general/icon/IconHourglassFull';
	export { default as IconHttp } from '@volst/ui-components/src/general/icon/IconHttp';
	export { default as IconHttps } from '@volst/ui-components/src/general/icon/IconHttps';
	export { default as IconImage } from '@volst/ui-components/src/general/icon/IconImage';
	export { default as IconImageAspectRatio } from '@volst/ui-components/src/general/icon/IconImageAspectRatio';
	export { default as IconImportantDevices } from '@volst/ui-components/src/general/icon/IconImportantDevices';
	export { default as IconImportContacts } from '@volst/ui-components/src/general/icon/IconImportContacts';
	export { default as IconImportExport } from '@volst/ui-components/src/general/icon/IconImportExport';
	export { default as IconInbox } from '@volst/ui-components/src/general/icon/IconInbox';
	export { default as IconIndeterminateCheckBox } from '@volst/ui-components/src/general/icon/IconIndeterminateCheckBox';
	export { default as IconInfo } from '@volst/ui-components/src/general/icon/IconInfo';
	export { default as IconInfoOutline } from '@volst/ui-components/src/general/icon/IconInfoOutline';
	export { default as IconInput } from '@volst/ui-components/src/general/icon/IconInput';
	export { default as IconInsertChart } from '@volst/ui-components/src/general/icon/IconInsertChart';
	export { default as IconInsertComment } from '@volst/ui-components/src/general/icon/IconInsertComment';
	export { default as IconInsertDriveFile } from '@volst/ui-components/src/general/icon/IconInsertDriveFile';
	export { default as IconInsertEmoticon } from '@volst/ui-components/src/general/icon/IconInsertEmoticon';
	export { default as IconInsertInvitation } from '@volst/ui-components/src/general/icon/IconInsertInvitation';
	export { default as IconInsertLink } from '@volst/ui-components/src/general/icon/IconInsertLink';
	export { default as IconInsertPhoto } from '@volst/ui-components/src/general/icon/IconInsertPhoto';
	export { default as IconInvertColors } from '@volst/ui-components/src/general/icon/IconInvertColors';
	export { default as IconInvertColorsOff } from '@volst/ui-components/src/general/icon/IconInvertColorsOff';
	export { default as IconIso } from '@volst/ui-components/src/general/icon/IconIso';
	export { default as IconKeyboard } from '@volst/ui-components/src/general/icon/IconKeyboard';
	export { default as IconKeyboardArrowDown } from '@volst/ui-components/src/general/icon/IconKeyboardArrowDown';
	export { default as IconKeyboardArrowLeft } from '@volst/ui-components/src/general/icon/IconKeyboardArrowLeft';
	export { default as IconKeyboardArrowRight } from '@volst/ui-components/src/general/icon/IconKeyboardArrowRight';
	export { default as IconKeyboardArrowUp } from '@volst/ui-components/src/general/icon/IconKeyboardArrowUp';
	export { default as IconKeyboardBackspace } from '@volst/ui-components/src/general/icon/IconKeyboardBackspace';
	export { default as IconKeyboardCapslock } from '@volst/ui-components/src/general/icon/IconKeyboardCapslock';
	export { default as IconKeyboardHide } from '@volst/ui-components/src/general/icon/IconKeyboardHide';
	export { default as IconKeyboardReturn } from '@volst/ui-components/src/general/icon/IconKeyboardReturn';
	export { default as IconKeyboardTab } from '@volst/ui-components/src/general/icon/IconKeyboardTab';
	export { default as IconKeyboardVoice } from '@volst/ui-components/src/general/icon/IconKeyboardVoice';
	export { default as IconKitchen } from '@volst/ui-components/src/general/icon/IconKitchen';
	export { default as IconLabel } from '@volst/ui-components/src/general/icon/IconLabel';
	export { default as IconLabelOutline } from '@volst/ui-components/src/general/icon/IconLabelOutline';
	export { default as IconLandscape } from '@volst/ui-components/src/general/icon/IconLandscape';
	export { default as IconLanguage } from '@volst/ui-components/src/general/icon/IconLanguage';
	export { default as IconLaptop } from '@volst/ui-components/src/general/icon/IconLaptop';
	export { default as IconLaptopChromebook } from '@volst/ui-components/src/general/icon/IconLaptopChromebook';
	export { default as IconLaptopMac } from '@volst/ui-components/src/general/icon/IconLaptopMac';
	export { default as IconLaptopWindows } from '@volst/ui-components/src/general/icon/IconLaptopWindows';
	export { default as IconLastPage } from '@volst/ui-components/src/general/icon/IconLastPage';
	export { default as IconLaunch } from '@volst/ui-components/src/general/icon/IconLaunch';
	export { default as IconLayers } from '@volst/ui-components/src/general/icon/IconLayers';
	export { default as IconLayersClear } from '@volst/ui-components/src/general/icon/IconLayersClear';
	export { default as IconLeakAdd } from '@volst/ui-components/src/general/icon/IconLeakAdd';
	export { default as IconLeakRemove } from '@volst/ui-components/src/general/icon/IconLeakRemove';
	export { default as IconLens } from '@volst/ui-components/src/general/icon/IconLens';
	export { default as IconLibraryAdd } from '@volst/ui-components/src/general/icon/IconLibraryAdd';
	export { default as IconLibraryBooks } from '@volst/ui-components/src/general/icon/IconLibraryBooks';
	export { default as IconLibraryMusic } from '@volst/ui-components/src/general/icon/IconLibraryMusic';
	export { default as IconLightbulbOutline } from '@volst/ui-components/src/general/icon/IconLightbulbOutline';
	export { default as IconLinearScale } from '@volst/ui-components/src/general/icon/IconLinearScale';
	export { default as IconLineStyle } from '@volst/ui-components/src/general/icon/IconLineStyle';
	export { default as IconLineWeight } from '@volst/ui-components/src/general/icon/IconLineWeight';
	export { default as IconLink } from '@volst/ui-components/src/general/icon/IconLink';
	export { default as IconLinkedCamera } from '@volst/ui-components/src/general/icon/IconLinkedCamera';
	export { default as IconList } from '@volst/ui-components/src/general/icon/IconList';
	export { default as IconLiveHelp } from '@volst/ui-components/src/general/icon/IconLiveHelp';
	export { default as IconLiveTv } from '@volst/ui-components/src/general/icon/IconLiveTv';
	export { default as IconLocalActivity } from '@volst/ui-components/src/general/icon/IconLocalActivity';
	export { default as IconLocalAirport } from '@volst/ui-components/src/general/icon/IconLocalAirport';
	export { default as IconLocalAtm } from '@volst/ui-components/src/general/icon/IconLocalAtm';
	export { default as IconLocalBar } from '@volst/ui-components/src/general/icon/IconLocalBar';
	export { default as IconLocalCafe } from '@volst/ui-components/src/general/icon/IconLocalCafe';
	export { default as IconLocalCarWash } from '@volst/ui-components/src/general/icon/IconLocalCarWash';
	export { default as IconLocalConvenienceStore } from '@volst/ui-components/src/general/icon/IconLocalConvenienceStore';
	export { default as IconLocalDining } from '@volst/ui-components/src/general/icon/IconLocalDining';
	export { default as IconLocalDrink } from '@volst/ui-components/src/general/icon/IconLocalDrink';
	export { default as IconLocalFlorist } from '@volst/ui-components/src/general/icon/IconLocalFlorist';
	export { default as IconLocalGasStation } from '@volst/ui-components/src/general/icon/IconLocalGasStation';
	export { default as IconLocalGroceryStore } from '@volst/ui-components/src/general/icon/IconLocalGroceryStore';
	export { default as IconLocalHospital } from '@volst/ui-components/src/general/icon/IconLocalHospital';
	export { default as IconLocalHotel } from '@volst/ui-components/src/general/icon/IconLocalHotel';
	export { default as IconLocalLaundryService } from '@volst/ui-components/src/general/icon/IconLocalLaundryService';
	export { default as IconLocalLibrary } from '@volst/ui-components/src/general/icon/IconLocalLibrary';
	export { default as IconLocalMall } from '@volst/ui-components/src/general/icon/IconLocalMall';
	export { default as IconLocalMovies } from '@volst/ui-components/src/general/icon/IconLocalMovies';
	export { default as IconLocalOffer } from '@volst/ui-components/src/general/icon/IconLocalOffer';
	export { default as IconLocalParking } from '@volst/ui-components/src/general/icon/IconLocalParking';
	export { default as IconLocalPharmacy } from '@volst/ui-components/src/general/icon/IconLocalPharmacy';
	export { default as IconLocalPhone } from '@volst/ui-components/src/general/icon/IconLocalPhone';
	export { default as IconLocalPizza } from '@volst/ui-components/src/general/icon/IconLocalPizza';
	export { default as IconLocalPlay } from '@volst/ui-components/src/general/icon/IconLocalPlay';
	export { default as IconLocalPostOffice } from '@volst/ui-components/src/general/icon/IconLocalPostOffice';
	export { default as IconLocalPrintshop } from '@volst/ui-components/src/general/icon/IconLocalPrintshop';
	export { default as IconLocalSee } from '@volst/ui-components/src/general/icon/IconLocalSee';
	export { default as IconLocalShipping } from '@volst/ui-components/src/general/icon/IconLocalShipping';
	export { default as IconLocalTaxi } from '@volst/ui-components/src/general/icon/IconLocalTaxi';
	export { default as IconLocationCity } from '@volst/ui-components/src/general/icon/IconLocationCity';
	export { default as IconLocationDisabled } from '@volst/ui-components/src/general/icon/IconLocationDisabled';
	export { default as IconLocationOff } from '@volst/ui-components/src/general/icon/IconLocationOff';
	export { default as IconLocationOn } from '@volst/ui-components/src/general/icon/IconLocationOn';
	export { default as IconLocationSearching } from '@volst/ui-components/src/general/icon/IconLocationSearching';
	export { default as IconLock } from '@volst/ui-components/src/general/icon/IconLock';
	export { default as IconLockOpen } from '@volst/ui-components/src/general/icon/IconLockOpen';
	export { default as IconLockOutline } from '@volst/ui-components/src/general/icon/IconLockOutline';
	export { default as IconLooks } from '@volst/ui-components/src/general/icon/IconLooks';
	export { default as IconLooks3 } from '@volst/ui-components/src/general/icon/IconLooks3';
	export { default as IconLooks4 } from '@volst/ui-components/src/general/icon/IconLooks4';
	export { default as IconLooks5 } from '@volst/ui-components/src/general/icon/IconLooks5';
	export { default as IconLooks6 } from '@volst/ui-components/src/general/icon/IconLooks6';
	export { default as IconLooksOne } from '@volst/ui-components/src/general/icon/IconLooksOne';
	export { default as IconLooksTwo } from '@volst/ui-components/src/general/icon/IconLooksTwo';
	export { default as IconLoop } from '@volst/ui-components/src/general/icon/IconLoop';
	export { default as IconLoupe } from '@volst/ui-components/src/general/icon/IconLoupe';
	export { default as IconLowPriority } from '@volst/ui-components/src/general/icon/IconLowPriority';
	export { default as IconLoyalty } from '@volst/ui-components/src/general/icon/IconLoyalty';
	export { default as IconMail } from '@volst/ui-components/src/general/icon/IconMail';
	export { default as IconMailOutline } from '@volst/ui-components/src/general/icon/IconMailOutline';
	export { default as IconMap } from '@volst/ui-components/src/general/icon/IconMap';
	export { default as IconMarkunread } from '@volst/ui-components/src/general/icon/IconMarkunread';
	export { default as IconMarkunreadMailbox } from '@volst/ui-components/src/general/icon/IconMarkunreadMailbox';
	export { default as IconMemory } from '@volst/ui-components/src/general/icon/IconMemory';
	export { default as IconMenu } from '@volst/ui-components/src/general/icon/IconMenu';
	export { default as IconMergeType } from '@volst/ui-components/src/general/icon/IconMergeType';
	export { default as IconMessage } from '@volst/ui-components/src/general/icon/IconMessage';
	export { default as IconMic } from '@volst/ui-components/src/general/icon/IconMic';
	export { default as IconMicNone } from '@volst/ui-components/src/general/icon/IconMicNone';
	export { default as IconMicOff } from '@volst/ui-components/src/general/icon/IconMicOff';
	export { default as IconMms } from '@volst/ui-components/src/general/icon/IconMms';
	export { default as IconModeComment } from '@volst/ui-components/src/general/icon/IconModeComment';
	export { default as IconModeEdit } from '@volst/ui-components/src/general/icon/IconModeEdit';
	export { default as IconMonetizationOn } from '@volst/ui-components/src/general/icon/IconMonetizationOn';
	export { default as IconMoneyOff } from '@volst/ui-components/src/general/icon/IconMoneyOff';
	export { default as IconMonochromePhotos } from '@volst/ui-components/src/general/icon/IconMonochromePhotos';
	export { default as IconMood } from '@volst/ui-components/src/general/icon/IconMood';
	export { default as IconMoodBad } from '@volst/ui-components/src/general/icon/IconMoodBad';
	export { default as IconMore } from '@volst/ui-components/src/general/icon/IconMore';
	export { default as IconMoreHoriz } from '@volst/ui-components/src/general/icon/IconMoreHoriz';
	export { default as IconMoreVert } from '@volst/ui-components/src/general/icon/IconMoreVert';
	export { default as IconMotorcycle } from '@volst/ui-components/src/general/icon/IconMotorcycle';
	export { default as IconMouse } from '@volst/ui-components/src/general/icon/IconMouse';
	export { default as IconMoveToInbox } from '@volst/ui-components/src/general/icon/IconMoveToInbox';
	export { default as IconMovie } from '@volst/ui-components/src/general/icon/IconMovie';
	export { default as IconMovieCreation } from '@volst/ui-components/src/general/icon/IconMovieCreation';
	export { default as IconMovieFilter } from '@volst/ui-components/src/general/icon/IconMovieFilter';
	export { default as IconMultilineChart } from '@volst/ui-components/src/general/icon/IconMultilineChart';
	export { default as IconMusicNote } from '@volst/ui-components/src/general/icon/IconMusicNote';
	export { default as IconMusicVideo } from '@volst/ui-components/src/general/icon/IconMusicVideo';
	export { default as IconMyLocation } from '@volst/ui-components/src/general/icon/IconMyLocation';
	export { default as IconNature } from '@volst/ui-components/src/general/icon/IconNature';
	export { default as IconNaturePeople } from '@volst/ui-components/src/general/icon/IconNaturePeople';
	export { default as IconNavigateBefore } from '@volst/ui-components/src/general/icon/IconNavigateBefore';
	export { default as IconNavigateNext } from '@volst/ui-components/src/general/icon/IconNavigateNext';
	export { default as IconNavigation } from '@volst/ui-components/src/general/icon/IconNavigation';
	export { default as IconNearMe } from '@volst/ui-components/src/general/icon/IconNearMe';
	export { default as IconNetworkCell } from '@volst/ui-components/src/general/icon/IconNetworkCell';
	export { default as IconNetworkCheck } from '@volst/ui-components/src/general/icon/IconNetworkCheck';
	export { default as IconNetworkLocked } from '@volst/ui-components/src/general/icon/IconNetworkLocked';
	export { default as IconNetworkWifi } from '@volst/ui-components/src/general/icon/IconNetworkWifi';
	export { default as IconNewReleases } from '@volst/ui-components/src/general/icon/IconNewReleases';
	export { default as IconNextWeek } from '@volst/ui-components/src/general/icon/IconNextWeek';
	export { default as IconNfc } from '@volst/ui-components/src/general/icon/IconNfc';
	export { default as IconNoEncryption } from '@volst/ui-components/src/general/icon/IconNoEncryption';
	export { default as IconNoSim } from '@volst/ui-components/src/general/icon/IconNoSim';
	export { default as IconNote } from '@volst/ui-components/src/general/icon/IconNote';
	export { default as IconNoteAdd } from '@volst/ui-components/src/general/icon/IconNoteAdd';
	export { default as IconNotifications } from '@volst/ui-components/src/general/icon/IconNotifications';
	export { default as IconNotificationsActive } from '@volst/ui-components/src/general/icon/IconNotificationsActive';
	export { default as IconNotificationsNone } from '@volst/ui-components/src/general/icon/IconNotificationsNone';
	export { default as IconNotificationsOff } from '@volst/ui-components/src/general/icon/IconNotificationsOff';
	export { default as IconNotificationsPaused } from '@volst/ui-components/src/general/icon/IconNotificationsPaused';
	export { default as IconNotInterested } from '@volst/ui-components/src/general/icon/IconNotInterested';
	export { default as IconOfflinePin } from '@volst/ui-components/src/general/icon/IconOfflinePin';
	export { default as IconOndemandVideo } from '@volst/ui-components/src/general/icon/IconOndemandVideo';
	export { default as IconOpacity } from '@volst/ui-components/src/general/icon/IconOpacity';
	export { default as IconOpenInBrowser } from '@volst/ui-components/src/general/icon/IconOpenInBrowser';
	export { default as IconOpenInNew } from '@volst/ui-components/src/general/icon/IconOpenInNew';
	export { default as IconOpenWith } from '@volst/ui-components/src/general/icon/IconOpenWith';
	export { default as IconPages } from '@volst/ui-components/src/general/icon/IconPages';
	export { default as IconPageview } from '@volst/ui-components/src/general/icon/IconPageview';
	export { default as IconPalette } from '@volst/ui-components/src/general/icon/IconPalette';
	export { default as IconPanorama } from '@volst/ui-components/src/general/icon/IconPanorama';
	export { default as IconPanoramaFishEye } from '@volst/ui-components/src/general/icon/IconPanoramaFishEye';
	export { default as IconPanoramaHorizontal } from '@volst/ui-components/src/general/icon/IconPanoramaHorizontal';
	export { default as IconPanoramaVertical } from '@volst/ui-components/src/general/icon/IconPanoramaVertical';
	export { default as IconPanoramaWideAngle } from '@volst/ui-components/src/general/icon/IconPanoramaWideAngle';
	export { default as IconPanTool } from '@volst/ui-components/src/general/icon/IconPanTool';
	export { default as IconPartyMode } from '@volst/ui-components/src/general/icon/IconPartyMode';
	export { default as IconPause } from '@volst/ui-components/src/general/icon/IconPause';
	export { default as IconPauseCircleFilled } from '@volst/ui-components/src/general/icon/IconPauseCircleFilled';
	export { default as IconPauseCircleOutline } from '@volst/ui-components/src/general/icon/IconPauseCircleOutline';
	export { default as IconPayment } from '@volst/ui-components/src/general/icon/IconPayment';
	export { default as IconPeople } from '@volst/ui-components/src/general/icon/IconPeople';
	export { default as IconPeopleOutline } from '@volst/ui-components/src/general/icon/IconPeopleOutline';
	export { default as IconPermCameraMic } from '@volst/ui-components/src/general/icon/IconPermCameraMic';
	export { default as IconPermContactCalendar } from '@volst/ui-components/src/general/icon/IconPermContactCalendar';
	export { default as IconPermDataSetting } from '@volst/ui-components/src/general/icon/IconPermDataSetting';
	export { default as IconPermDeviceInformation } from '@volst/ui-components/src/general/icon/IconPermDeviceInformation';
	export { default as IconPermIdentity } from '@volst/ui-components/src/general/icon/IconPermIdentity';
	export { default as IconPermMedia } from '@volst/ui-components/src/general/icon/IconPermMedia';
	export { default as IconPermPhoneMsg } from '@volst/ui-components/src/general/icon/IconPermPhoneMsg';
	export { default as IconPermScanWifi } from '@volst/ui-components/src/general/icon/IconPermScanWifi';
	export { default as IconPerson } from '@volst/ui-components/src/general/icon/IconPerson';
	export { default as IconPersonAdd } from '@volst/ui-components/src/general/icon/IconPersonAdd';
	export { default as IconPersonalVideo } from '@volst/ui-components/src/general/icon/IconPersonalVideo';
	export { default as IconPersonOutline } from '@volst/ui-components/src/general/icon/IconPersonOutline';
	export { default as IconPersonPin } from '@volst/ui-components/src/general/icon/IconPersonPin';
	export { default as IconPersonPinCircle } from '@volst/ui-components/src/general/icon/IconPersonPinCircle';
	export { default as IconPets } from '@volst/ui-components/src/general/icon/IconPets';
	export { default as IconPhone } from '@volst/ui-components/src/general/icon/IconPhone';
	export { default as IconPhoneAndroid } from '@volst/ui-components/src/general/icon/IconPhoneAndroid';
	export { default as IconPhoneBluetoothSpeaker } from '@volst/ui-components/src/general/icon/IconPhoneBluetoothSpeaker';
	export { default as IconPhoneForwarded } from '@volst/ui-components/src/general/icon/IconPhoneForwarded';
	export { default as IconPhoneInTalk } from '@volst/ui-components/src/general/icon/IconPhoneInTalk';
	export { default as IconPhoneIphone } from '@volst/ui-components/src/general/icon/IconPhoneIphone';
	export { default as IconPhonelink } from '@volst/ui-components/src/general/icon/IconPhonelink';
	export { default as IconPhonelinkErase } from '@volst/ui-components/src/general/icon/IconPhonelinkErase';
	export { default as IconPhonelinkLock } from '@volst/ui-components/src/general/icon/IconPhonelinkLock';
	export { default as IconPhonelinkOff } from '@volst/ui-components/src/general/icon/IconPhonelinkOff';
	export { default as IconPhonelinkRing } from '@volst/ui-components/src/general/icon/IconPhonelinkRing';
	export { default as IconPhonelinkSetup } from '@volst/ui-components/src/general/icon/IconPhonelinkSetup';
	export { default as IconPhoneLocked } from '@volst/ui-components/src/general/icon/IconPhoneLocked';
	export { default as IconPhoneMissed } from '@volst/ui-components/src/general/icon/IconPhoneMissed';
	export { default as IconPhonePaused } from '@volst/ui-components/src/general/icon/IconPhonePaused';
	export { default as IconPhoto } from '@volst/ui-components/src/general/icon/IconPhoto';
	export { default as IconPhotoAlbum } from '@volst/ui-components/src/general/icon/IconPhotoAlbum';
	export { default as IconPhotoCamera } from '@volst/ui-components/src/general/icon/IconPhotoCamera';
	export { default as IconPhotoFilter } from '@volst/ui-components/src/general/icon/IconPhotoFilter';
	export { default as IconPhotoLibrary } from '@volst/ui-components/src/general/icon/IconPhotoLibrary';
	export { default as IconPhotoSizeSelectActual } from '@volst/ui-components/src/general/icon/IconPhotoSizeSelectActual';
	export { default as IconPhotoSizeSelectLarge } from '@volst/ui-components/src/general/icon/IconPhotoSizeSelectLarge';
	export { default as IconPhotoSizeSelectSmall } from '@volst/ui-components/src/general/icon/IconPhotoSizeSelectSmall';
	export { default as IconPictureAsPdf } from '@volst/ui-components/src/general/icon/IconPictureAsPdf';
	export { default as IconPictureInPicture } from '@volst/ui-components/src/general/icon/IconPictureInPicture';
	export { default as IconPictureInPictureAlt } from '@volst/ui-components/src/general/icon/IconPictureInPictureAlt';
	export { default as IconPieChart } from '@volst/ui-components/src/general/icon/IconPieChart';
	export { default as IconPieChartOutlined } from '@volst/ui-components/src/general/icon/IconPieChartOutlined';
	export { default as IconPinDrop } from '@volst/ui-components/src/general/icon/IconPinDrop';
	export { default as IconPlace } from '@volst/ui-components/src/general/icon/IconPlace';
	export { default as IconPlayArrow } from '@volst/ui-components/src/general/icon/IconPlayArrow';
	export { default as IconPlayCircleFilled } from '@volst/ui-components/src/general/icon/IconPlayCircleFilled';
	export { default as IconPlayCircleOutline } from '@volst/ui-components/src/general/icon/IconPlayCircleOutline';
	export { default as IconPlayForWork } from '@volst/ui-components/src/general/icon/IconPlayForWork';
	export { default as IconPlaylistAdd } from '@volst/ui-components/src/general/icon/IconPlaylistAdd';
	export { default as IconPlaylistAddCheck } from '@volst/ui-components/src/general/icon/IconPlaylistAddCheck';
	export { default as IconPlaylistPlay } from '@volst/ui-components/src/general/icon/IconPlaylistPlay';
	export { default as IconPlusOne } from '@volst/ui-components/src/general/icon/IconPlusOne';
	export { default as IconPoll } from '@volst/ui-components/src/general/icon/IconPoll';
	export { default as IconPolymer } from '@volst/ui-components/src/general/icon/IconPolymer';
	export { default as IconPool } from '@volst/ui-components/src/general/icon/IconPool';
	export { default as IconPortableWifiOff } from '@volst/ui-components/src/general/icon/IconPortableWifiOff';
	export { default as IconPortrait } from '@volst/ui-components/src/general/icon/IconPortrait';
	export { default as IconPower } from '@volst/ui-components/src/general/icon/IconPower';
	export { default as IconPowerInput } from '@volst/ui-components/src/general/icon/IconPowerInput';
	export { default as IconPowerSettingsNew } from '@volst/ui-components/src/general/icon/IconPowerSettingsNew';
	export { default as IconPregnantWoman } from '@volst/ui-components/src/general/icon/IconPregnantWoman';
	export { default as IconPresentToAll } from '@volst/ui-components/src/general/icon/IconPresentToAll';
	export { default as IconPrint } from '@volst/ui-components/src/general/icon/IconPrint';
	export { default as IconPriorityHigh } from '@volst/ui-components/src/general/icon/IconPriorityHigh';
	export { default as IconPublic } from '@volst/ui-components/src/general/icon/IconPublic';
	export { default as IconPublish } from '@volst/ui-components/src/general/icon/IconPublish';
	export { default as IconQueryBuilder } from '@volst/ui-components/src/general/icon/IconQueryBuilder';
	export { default as IconQuestionAnswer } from '@volst/ui-components/src/general/icon/IconQuestionAnswer';
	export { default as IconQueue } from '@volst/ui-components/src/general/icon/IconQueue';
	export { default as IconQueueMusic } from '@volst/ui-components/src/general/icon/IconQueueMusic';
	export { default as IconQueuePlayNext } from '@volst/ui-components/src/general/icon/IconQueuePlayNext';
	export { default as IconRadio } from '@volst/ui-components/src/general/icon/IconRadio';
	export { default as IconRadioButtonChecked } from '@volst/ui-components/src/general/icon/IconRadioButtonChecked';
	export { default as IconRadioButtonUnchecked } from '@volst/ui-components/src/general/icon/IconRadioButtonUnchecked';
	export { default as IconRateReview } from '@volst/ui-components/src/general/icon/IconRateReview';
	export { default as IconReceipt } from '@volst/ui-components/src/general/icon/IconReceipt';
	export { default as IconRecentActors } from '@volst/ui-components/src/general/icon/IconRecentActors';
	export { default as IconRecordVoiceOver } from '@volst/ui-components/src/general/icon/IconRecordVoiceOver';
	export { default as IconRedeem } from '@volst/ui-components/src/general/icon/IconRedeem';
	export { default as IconRedo } from '@volst/ui-components/src/general/icon/IconRedo';
	export { default as IconRefresh } from '@volst/ui-components/src/general/icon/IconRefresh';
	export { default as IconRemove } from '@volst/ui-components/src/general/icon/IconRemove';
	export { default as IconRemoveCircle } from '@volst/ui-components/src/general/icon/IconRemoveCircle';
	export { default as IconRemoveCircleOutline } from '@volst/ui-components/src/general/icon/IconRemoveCircleOutline';
	export { default as IconRemoveFromQueue } from '@volst/ui-components/src/general/icon/IconRemoveFromQueue';
	export { default as IconRemoveRedEye } from '@volst/ui-components/src/general/icon/IconRemoveRedEye';
	export { default as IconRemoveShoppingCart } from '@volst/ui-components/src/general/icon/IconRemoveShoppingCart';
	export { default as IconReorder } from '@volst/ui-components/src/general/icon/IconReorder';
	export { default as IconRepeat } from '@volst/ui-components/src/general/icon/IconRepeat';
	export { default as IconRepeatOne } from '@volst/ui-components/src/general/icon/IconRepeatOne';
	export { default as IconReplay } from '@volst/ui-components/src/general/icon/IconReplay';
	export { default as IconReplay10 } from '@volst/ui-components/src/general/icon/IconReplay10';
	export { default as IconReplay30 } from '@volst/ui-components/src/general/icon/IconReplay30';
	export { default as IconReplay5 } from '@volst/ui-components/src/general/icon/IconReplay5';
	export { default as IconReply } from '@volst/ui-components/src/general/icon/IconReply';
	export { default as IconReplyAll } from '@volst/ui-components/src/general/icon/IconReplyAll';
	export { default as IconReport } from '@volst/ui-components/src/general/icon/IconReport';
	export { default as IconReportProblem } from '@volst/ui-components/src/general/icon/IconReportProblem';
	export { default as IconRestaurant } from '@volst/ui-components/src/general/icon/IconRestaurant';
	export { default as IconRestaurantMenu } from '@volst/ui-components/src/general/icon/IconRestaurantMenu';
	export { default as IconRestore } from '@volst/ui-components/src/general/icon/IconRestore';
	export { default as IconRestorePage } from '@volst/ui-components/src/general/icon/IconRestorePage';
	export { default as IconRingVolume } from '@volst/ui-components/src/general/icon/IconRingVolume';
	export { default as IconRoom } from '@volst/ui-components/src/general/icon/IconRoom';
	export { default as IconRoomService } from '@volst/ui-components/src/general/icon/IconRoomService';
	export { default as IconRotate90DegreesCcw } from '@volst/ui-components/src/general/icon/IconRotate90DegreesCcw';
	export { default as IconRotateLeft } from '@volst/ui-components/src/general/icon/IconRotateLeft';
	export { default as IconRotateRight } from '@volst/ui-components/src/general/icon/IconRotateRight';
	export { default as IconRoundedCorner } from '@volst/ui-components/src/general/icon/IconRoundedCorner';
	export { default as IconRouter } from '@volst/ui-components/src/general/icon/IconRouter';
	export { default as IconRowing } from '@volst/ui-components/src/general/icon/IconRowing';
	export { default as IconRssFeed } from '@volst/ui-components/src/general/icon/IconRssFeed';
	export { default as IconRvHookup } from '@volst/ui-components/src/general/icon/IconRvHookup';
	export { default as IconSatellite } from '@volst/ui-components/src/general/icon/IconSatellite';
	export { default as IconSave } from '@volst/ui-components/src/general/icon/IconSave';
	export { default as IconScanner } from '@volst/ui-components/src/general/icon/IconScanner';
	export { default as IconSchedule } from '@volst/ui-components/src/general/icon/IconSchedule';
	export { default as IconSchool } from '@volst/ui-components/src/general/icon/IconSchool';
	export { default as IconScreenLockLandscape } from '@volst/ui-components/src/general/icon/IconScreenLockLandscape';
	export { default as IconScreenLockPortrait } from '@volst/ui-components/src/general/icon/IconScreenLockPortrait';
	export { default as IconScreenLockRotation } from '@volst/ui-components/src/general/icon/IconScreenLockRotation';
	export { default as IconScreenRotation } from '@volst/ui-components/src/general/icon/IconScreenRotation';
	export { default as IconScreenShare } from '@volst/ui-components/src/general/icon/IconScreenShare';
	export { default as IconSdCard } from '@volst/ui-components/src/general/icon/IconSdCard';
	export { default as IconSdStorage } from '@volst/ui-components/src/general/icon/IconSdStorage';
	export { default as IconSearch } from '@volst/ui-components/src/general/icon/IconSearch';
	export { default as IconSecurity } from '@volst/ui-components/src/general/icon/IconSecurity';
	export { default as IconSelectAll } from '@volst/ui-components/src/general/icon/IconSelectAll';
	export { default as IconSend } from '@volst/ui-components/src/general/icon/IconSend';
	export { default as IconSentimentDissatisfied } from '@volst/ui-components/src/general/icon/IconSentimentDissatisfied';
	export { default as IconSentimentNeutral } from '@volst/ui-components/src/general/icon/IconSentimentNeutral';
	export { default as IconSentimentSatisfied } from '@volst/ui-components/src/general/icon/IconSentimentSatisfied';
	export { default as IconSentimentVeryDissatisfied } from '@volst/ui-components/src/general/icon/IconSentimentVeryDissatisfied';
	export { default as IconSentimentVerySatisfied } from '@volst/ui-components/src/general/icon/IconSentimentVerySatisfied';
	export { default as IconSettings } from '@volst/ui-components/src/general/icon/IconSettings';
	export { default as IconSettingsApplications } from '@volst/ui-components/src/general/icon/IconSettingsApplications';
	export { default as IconSettingsBackupRestore } from '@volst/ui-components/src/general/icon/IconSettingsBackupRestore';
	export { default as IconSettingsBluetooth } from '@volst/ui-components/src/general/icon/IconSettingsBluetooth';
	export { default as IconSettingsBrightness } from '@volst/ui-components/src/general/icon/IconSettingsBrightness';
	export { default as IconSettingsCell } from '@volst/ui-components/src/general/icon/IconSettingsCell';
	export { default as IconSettingsEthernet } from '@volst/ui-components/src/general/icon/IconSettingsEthernet';
	export { default as IconSettingsInputAntenna } from '@volst/ui-components/src/general/icon/IconSettingsInputAntenna';
	export { default as IconSettingsInputComponent } from '@volst/ui-components/src/general/icon/IconSettingsInputComponent';
	export { default as IconSettingsInputComposite } from '@volst/ui-components/src/general/icon/IconSettingsInputComposite';
	export { default as IconSettingsInputHdmi } from '@volst/ui-components/src/general/icon/IconSettingsInputHdmi';
	export { default as IconSettingsInputSvideo } from '@volst/ui-components/src/general/icon/IconSettingsInputSvideo';
	export { default as IconSettingsOverscan } from '@volst/ui-components/src/general/icon/IconSettingsOverscan';
	export { default as IconSettingsPhone } from '@volst/ui-components/src/general/icon/IconSettingsPhone';
	export { default as IconSettingsPower } from '@volst/ui-components/src/general/icon/IconSettingsPower';
	export { default as IconSettingsRemote } from '@volst/ui-components/src/general/icon/IconSettingsRemote';
	export { default as IconSettingsSystemDaydream } from '@volst/ui-components/src/general/icon/IconSettingsSystemDaydream';
	export { default as IconSettingsVoice } from '@volst/ui-components/src/general/icon/IconSettingsVoice';
	export { default as IconShare } from '@volst/ui-components/src/general/icon/IconShare';
	export { default as IconShop } from '@volst/ui-components/src/general/icon/IconShop';
	export { default as IconShoppingBasket } from '@volst/ui-components/src/general/icon/IconShoppingBasket';
	export { default as IconShoppingCart } from '@volst/ui-components/src/general/icon/IconShoppingCart';
	export { default as IconShopTwo } from '@volst/ui-components/src/general/icon/IconShopTwo';
	export { default as IconShortText } from '@volst/ui-components/src/general/icon/IconShortText';
	export { default as IconShowChart } from '@volst/ui-components/src/general/icon/IconShowChart';
	export { default as IconShuffle } from '@volst/ui-components/src/general/icon/IconShuffle';
	export { default as IconSignalCellular0Bar } from '@volst/ui-components/src/general/icon/IconSignalCellular0Bar';
	export { default as IconSignalCellular1Bar } from '@volst/ui-components/src/general/icon/IconSignalCellular1Bar';
	export { default as IconSignalCellular2Bar } from '@volst/ui-components/src/general/icon/IconSignalCellular2Bar';
	export { default as IconSignalCellular3Bar } from '@volst/ui-components/src/general/icon/IconSignalCellular3Bar';
	export { default as IconSignalCellular4Bar } from '@volst/ui-components/src/general/icon/IconSignalCellular4Bar';
	export { default as IconSignalCellularConnectedNoInternet0Bar } from '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet0Bar';
	export { default as IconSignalCellularConnectedNoInternet1Bar } from '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet1Bar';
	export { default as IconSignalCellularConnectedNoInternet2Bar } from '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet2Bar';
	export { default as IconSignalCellularConnectedNoInternet3Bar } from '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet3Bar';
	export { default as IconSignalCellularConnectedNoInternet4Bar } from '@volst/ui-components/src/general/icon/IconSignalCellularConnectedNoInternet4Bar';
	export { default as IconSignalCellularNoSim } from '@volst/ui-components/src/general/icon/IconSignalCellularNoSim';
	export { default as IconSignalCellularNull } from '@volst/ui-components/src/general/icon/IconSignalCellularNull';
	export { default as IconSignalCellularOff } from '@volst/ui-components/src/general/icon/IconSignalCellularOff';
	export { default as IconSignalWifi0Bar } from '@volst/ui-components/src/general/icon/IconSignalWifi0Bar';
	export { default as IconSignalWifi1Bar } from '@volst/ui-components/src/general/icon/IconSignalWifi1Bar';
	export { default as IconSignalWifi1BarLock } from '@volst/ui-components/src/general/icon/IconSignalWifi1BarLock';
	export { default as IconSignalWifi2Bar } from '@volst/ui-components/src/general/icon/IconSignalWifi2Bar';
	export { default as IconSignalWifi2BarLock } from '@volst/ui-components/src/general/icon/IconSignalWifi2BarLock';
	export { default as IconSignalWifi3Bar } from '@volst/ui-components/src/general/icon/IconSignalWifi3Bar';
	export { default as IconSignalWifi3BarLock } from '@volst/ui-components/src/general/icon/IconSignalWifi3BarLock';
	export { default as IconSignalWifi4Bar } from '@volst/ui-components/src/general/icon/IconSignalWifi4Bar';
	export { default as IconSignalWifi4BarLock } from '@volst/ui-components/src/general/icon/IconSignalWifi4BarLock';
	export { default as IconSignalWifiOff } from '@volst/ui-components/src/general/icon/IconSignalWifiOff';
	export { default as IconSimCard } from '@volst/ui-components/src/general/icon/IconSimCard';
	export { default as IconSimCardAlert } from '@volst/ui-components/src/general/icon/IconSimCardAlert';
	export { default as IconSkipNext } from '@volst/ui-components/src/general/icon/IconSkipNext';
	export { default as IconSkipPrevious } from '@volst/ui-components/src/general/icon/IconSkipPrevious';
	export { default as IconSlideshow } from '@volst/ui-components/src/general/icon/IconSlideshow';
	export { default as IconSlowMotionVideo } from '@volst/ui-components/src/general/icon/IconSlowMotionVideo';
	export { default as IconSmartphone } from '@volst/ui-components/src/general/icon/IconSmartphone';
	export { default as IconSmokeFree } from '@volst/ui-components/src/general/icon/IconSmokeFree';
	export { default as IconSmokingRooms } from '@volst/ui-components/src/general/icon/IconSmokingRooms';
	export { default as IconSms } from '@volst/ui-components/src/general/icon/IconSms';
	export { default as IconSmsFailed } from '@volst/ui-components/src/general/icon/IconSmsFailed';
	export { default as IconSnooze } from '@volst/ui-components/src/general/icon/IconSnooze';
	export { default as IconSort } from '@volst/ui-components/src/general/icon/IconSort';
	export { default as IconSortByAlpha } from '@volst/ui-components/src/general/icon/IconSortByAlpha';
	export { default as IconSpa } from '@volst/ui-components/src/general/icon/IconSpa';
	export { default as IconSpaceBar } from '@volst/ui-components/src/general/icon/IconSpaceBar';
	export { default as IconSpeaker } from '@volst/ui-components/src/general/icon/IconSpeaker';
	export { default as IconSpeakerGroup } from '@volst/ui-components/src/general/icon/IconSpeakerGroup';
	export { default as IconSpeakerNotes } from '@volst/ui-components/src/general/icon/IconSpeakerNotes';
	export { default as IconSpeakerNotesOff } from '@volst/ui-components/src/general/icon/IconSpeakerNotesOff';
	export { default as IconSpeakerPhone } from '@volst/ui-components/src/general/icon/IconSpeakerPhone';
	export { default as IconSpellcheck } from '@volst/ui-components/src/general/icon/IconSpellcheck';
	export { default as IconStar } from '@volst/ui-components/src/general/icon/IconStar';
	export { default as IconStarBorder } from '@volst/ui-components/src/general/icon/IconStarBorder';
	export { default as IconStarHalf } from '@volst/ui-components/src/general/icon/IconStarHalf';
	export { default as IconStars } from '@volst/ui-components/src/general/icon/IconStars';
	export { default as IconStayCurrentLandscape } from '@volst/ui-components/src/general/icon/IconStayCurrentLandscape';
	export { default as IconStayCurrentPortrait } from '@volst/ui-components/src/general/icon/IconStayCurrentPortrait';
	export { default as IconStayPrimaryLandscape } from '@volst/ui-components/src/general/icon/IconStayPrimaryLandscape';
	export { default as IconStayPrimaryPortrait } from '@volst/ui-components/src/general/icon/IconStayPrimaryPortrait';
	export { default as IconStop } from '@volst/ui-components/src/general/icon/IconStop';
	export { default as IconStopScreenShare } from '@volst/ui-components/src/general/icon/IconStopScreenShare';
	export { default as IconStorage } from '@volst/ui-components/src/general/icon/IconStorage';
	export { default as IconStore } from '@volst/ui-components/src/general/icon/IconStore';
	export { default as IconStoreMallDirectory } from '@volst/ui-components/src/general/icon/IconStoreMallDirectory';
	export { default as IconStraighten } from '@volst/ui-components/src/general/icon/IconStraighten';
	export { default as IconStreetview } from '@volst/ui-components/src/general/icon/IconStreetview';
	export { default as IconStrikethroughS } from '@volst/ui-components/src/general/icon/IconStrikethroughS';
	export { default as IconStyle } from '@volst/ui-components/src/general/icon/IconStyle';
	export { default as IconSubdirectoryArrowLeft } from '@volst/ui-components/src/general/icon/IconSubdirectoryArrowLeft';
	export { default as IconSubdirectoryArrowRight } from '@volst/ui-components/src/general/icon/IconSubdirectoryArrowRight';
	export { default as IconSubject } from '@volst/ui-components/src/general/icon/IconSubject';
	export { default as IconSubscriptions } from '@volst/ui-components/src/general/icon/IconSubscriptions';
	export { default as IconSubtitles } from '@volst/ui-components/src/general/icon/IconSubtitles';
	export { default as IconSubway } from '@volst/ui-components/src/general/icon/IconSubway';
	export { default as IconSupervisorAccount } from '@volst/ui-components/src/general/icon/IconSupervisorAccount';
	export { default as IconSurroundSound } from '@volst/ui-components/src/general/icon/IconSurroundSound';
	export { default as IconSwapCalls } from '@volst/ui-components/src/general/icon/IconSwapCalls';
	export { default as IconSwapHoriz } from '@volst/ui-components/src/general/icon/IconSwapHoriz';
	export { default as IconSwapVert } from '@volst/ui-components/src/general/icon/IconSwapVert';
	export { default as IconSwapVerticalCircle } from '@volst/ui-components/src/general/icon/IconSwapVerticalCircle';
	export { default as IconSwitchCamera } from '@volst/ui-components/src/general/icon/IconSwitchCamera';
	export { default as IconSwitchVideo } from '@volst/ui-components/src/general/icon/IconSwitchVideo';
	export { default as IconSync } from '@volst/ui-components/src/general/icon/IconSync';
	export { default as IconSyncDisabled } from '@volst/ui-components/src/general/icon/IconSyncDisabled';
	export { default as IconSyncProblem } from '@volst/ui-components/src/general/icon/IconSyncProblem';
	export { default as IconSystemUpdate } from '@volst/ui-components/src/general/icon/IconSystemUpdate';
	export { default as IconSystemUpdateAlt } from '@volst/ui-components/src/general/icon/IconSystemUpdateAlt';
	export { default as IconTab } from '@volst/ui-components/src/general/icon/IconTab';
	export { default as IconTablet } from '@volst/ui-components/src/general/icon/IconTablet';
	export { default as IconTabletAndroid } from '@volst/ui-components/src/general/icon/IconTabletAndroid';
	export { default as IconTabletMac } from '@volst/ui-components/src/general/icon/IconTabletMac';
	export { default as IconTabUnselected } from '@volst/ui-components/src/general/icon/IconTabUnselected';
	export { default as IconTagFaces } from '@volst/ui-components/src/general/icon/IconTagFaces';
	export { default as IconTapAndPlay } from '@volst/ui-components/src/general/icon/IconTapAndPlay';
	export { default as IconTerrain } from '@volst/ui-components/src/general/icon/IconTerrain';
	export { default as IconTextFields } from '@volst/ui-components/src/general/icon/IconTextFields';
	export { default as IconTextFormat } from '@volst/ui-components/src/general/icon/IconTextFormat';
	export { default as IconTextsms } from '@volst/ui-components/src/general/icon/IconTextsms';
	export { default as IconTexture } from '@volst/ui-components/src/general/icon/IconTexture';
	export { default as IconTheaters } from '@volst/ui-components/src/general/icon/IconTheaters';
	export { default as IconThreeDRotation } from '@volst/ui-components/src/general/icon/IconThreeDRotation';
	export { default as IconThumbDown } from '@volst/ui-components/src/general/icon/IconThumbDown';
	export { default as IconThumbsUpDown } from '@volst/ui-components/src/general/icon/IconThumbsUpDown';
	export { default as IconThumbUp } from '@volst/ui-components/src/general/icon/IconThumbUp';
	export { default as IconTimelapse } from '@volst/ui-components/src/general/icon/IconTimelapse';
	export { default as IconTimeline } from '@volst/ui-components/src/general/icon/IconTimeline';
	export { default as IconTimer } from '@volst/ui-components/src/general/icon/IconTimer';
	export { default as IconTimer10 } from '@volst/ui-components/src/general/icon/IconTimer10';
	export { default as IconTimer3 } from '@volst/ui-components/src/general/icon/IconTimer3';
	export { default as IconTimerOff } from '@volst/ui-components/src/general/icon/IconTimerOff';
	export { default as IconTimeToLeave } from '@volst/ui-components/src/general/icon/IconTimeToLeave';
	export { default as IconTitle } from '@volst/ui-components/src/general/icon/IconTitle';
	export { default as IconToc } from '@volst/ui-components/src/general/icon/IconToc';
	export { default as IconToday } from '@volst/ui-components/src/general/icon/IconToday';
	export { default as IconToll } from '@volst/ui-components/src/general/icon/IconToll';
	export { default as IconTonality } from '@volst/ui-components/src/general/icon/IconTonality';
	export { default as IconTouchApp } from '@volst/ui-components/src/general/icon/IconTouchApp';
	export { default as IconToys } from '@volst/ui-components/src/general/icon/IconToys';
	export { default as IconTrackChanges } from '@volst/ui-components/src/general/icon/IconTrackChanges';
	export { default as IconTraffic } from '@volst/ui-components/src/general/icon/IconTraffic';
	export { default as IconTrain } from '@volst/ui-components/src/general/icon/IconTrain';
	export { default as IconTram } from '@volst/ui-components/src/general/icon/IconTram';
	export { default as IconTransferWithinAStation } from '@volst/ui-components/src/general/icon/IconTransferWithinAStation';
	export { default as IconTransform } from '@volst/ui-components/src/general/icon/IconTransform';
	export { default as IconTranslate } from '@volst/ui-components/src/general/icon/IconTranslate';
	export { default as IconTrendingDown } from '@volst/ui-components/src/general/icon/IconTrendingDown';
	export { default as IconTrendingFlat } from '@volst/ui-components/src/general/icon/IconTrendingFlat';
	export { default as IconTrendingUp } from '@volst/ui-components/src/general/icon/IconTrendingUp';
	export { default as IconTune } from '@volst/ui-components/src/general/icon/IconTune';
	export { default as IconTurnedIn } from '@volst/ui-components/src/general/icon/IconTurnedIn';
	export { default as IconTurnedInNot } from '@volst/ui-components/src/general/icon/IconTurnedInNot';
	export { default as IconTv } from '@volst/ui-components/src/general/icon/IconTv';
	export { default as IconUnarchive } from '@volst/ui-components/src/general/icon/IconUnarchive';
	export { default as IconUndo } from '@volst/ui-components/src/general/icon/IconUndo';
	export { default as IconUnfoldLess } from '@volst/ui-components/src/general/icon/IconUnfoldLess';
	export { default as IconUnfoldMore } from '@volst/ui-components/src/general/icon/IconUnfoldMore';
	export { default as IconUpdate } from '@volst/ui-components/src/general/icon/IconUpdate';
	export { default as IconUsb } from '@volst/ui-components/src/general/icon/IconUsb';
	export { default as IconVerifiedUser } from '@volst/ui-components/src/general/icon/IconVerifiedUser';
	export { default as IconVerticalAlignBottom } from '@volst/ui-components/src/general/icon/IconVerticalAlignBottom';
	export { default as IconVerticalAlignCenter } from '@volst/ui-components/src/general/icon/IconVerticalAlignCenter';
	export { default as IconVerticalAlignTop } from '@volst/ui-components/src/general/icon/IconVerticalAlignTop';
	export { default as IconVibration } from '@volst/ui-components/src/general/icon/IconVibration';
	export { default as IconVideoCall } from '@volst/ui-components/src/general/icon/IconVideoCall';
	export { default as IconVideocam } from '@volst/ui-components/src/general/icon/IconVideocam';
	export { default as IconVideocamOff } from '@volst/ui-components/src/general/icon/IconVideocamOff';
	export { default as IconVideogameAsset } from '@volst/ui-components/src/general/icon/IconVideogameAsset';
	export { default as IconVideoLabel } from '@volst/ui-components/src/general/icon/IconVideoLabel';
	export { default as IconVideoLibrary } from '@volst/ui-components/src/general/icon/IconVideoLibrary';
	export { default as IconViewAgenda } from '@volst/ui-components/src/general/icon/IconViewAgenda';
	export { default as IconViewArray } from '@volst/ui-components/src/general/icon/IconViewArray';
	export { default as IconViewCarousel } from '@volst/ui-components/src/general/icon/IconViewCarousel';
	export { default as IconViewColumn } from '@volst/ui-components/src/general/icon/IconViewColumn';
	export { default as IconViewComfy } from '@volst/ui-components/src/general/icon/IconViewComfy';
	export { default as IconViewCompact } from '@volst/ui-components/src/general/icon/IconViewCompact';
	export { default as IconViewDay } from '@volst/ui-components/src/general/icon/IconViewDay';
	export { default as IconViewHeadline } from '@volst/ui-components/src/general/icon/IconViewHeadline';
	export { default as IconViewList } from '@volst/ui-components/src/general/icon/IconViewList';
	export { default as IconViewModule } from '@volst/ui-components/src/general/icon/IconViewModule';
	export { default as IconViewQuilt } from '@volst/ui-components/src/general/icon/IconViewQuilt';
	export { default as IconViewStream } from '@volst/ui-components/src/general/icon/IconViewStream';
	export { default as IconViewWeek } from '@volst/ui-components/src/general/icon/IconViewWeek';
	export { default as IconVignette } from '@volst/ui-components/src/general/icon/IconVignette';
	export { default as IconVisibility } from '@volst/ui-components/src/general/icon/IconVisibility';
	export { default as IconVisibilityOff } from '@volst/ui-components/src/general/icon/IconVisibilityOff';
	export { default as IconVoiceChat } from '@volst/ui-components/src/general/icon/IconVoiceChat';
	export { default as IconVoicemail } from '@volst/ui-components/src/general/icon/IconVoicemail';
	export { default as IconVolumeDown } from '@volst/ui-components/src/general/icon/IconVolumeDown';
	export { default as IconVolumeMute } from '@volst/ui-components/src/general/icon/IconVolumeMute';
	export { default as IconVolumeOff } from '@volst/ui-components/src/general/icon/IconVolumeOff';
	export { default as IconVolumeUp } from '@volst/ui-components/src/general/icon/IconVolumeUp';
	export { default as IconVpnKey } from '@volst/ui-components/src/general/icon/IconVpnKey';
	export { default as IconVpnLock } from '@volst/ui-components/src/general/icon/IconVpnLock';
	export { default as IconWallpaper } from '@volst/ui-components/src/general/icon/IconWallpaper';
	export { default as IconWarning } from '@volst/ui-components/src/general/icon/IconWarning';
	export { default as IconWatch } from '@volst/ui-components/src/general/icon/IconWatch';
	export { default as IconWatchLater } from '@volst/ui-components/src/general/icon/IconWatchLater';
	export { default as IconWbAuto } from '@volst/ui-components/src/general/icon/IconWbAuto';
	export { default as IconWbCloudy } from '@volst/ui-components/src/general/icon/IconWbCloudy';
	export { default as IconWbIncandescent } from '@volst/ui-components/src/general/icon/IconWbIncandescent';
	export { default as IconWbIridescent } from '@volst/ui-components/src/general/icon/IconWbIridescent';
	export { default as IconWbSunny } from '@volst/ui-components/src/general/icon/IconWbSunny';
	export { default as IconWc } from '@volst/ui-components/src/general/icon/IconWc';
	export { default as IconWeb } from '@volst/ui-components/src/general/icon/IconWeb';
	export { default as IconWebAsset } from '@volst/ui-components/src/general/icon/IconWebAsset';
	export { default as IconWeekend } from '@volst/ui-components/src/general/icon/IconWeekend';
	export { default as IconWhatshot } from '@volst/ui-components/src/general/icon/IconWhatshot';
	export { default as IconWidgets } from '@volst/ui-components/src/general/icon/IconWidgets';
	export { default as IconWifi } from '@volst/ui-components/src/general/icon/IconWifi';
	export { default as IconWifiLock } from '@volst/ui-components/src/general/icon/IconWifiLock';
	export { default as IconWifiTethering } from '@volst/ui-components/src/general/icon/IconWifiTethering';
	export { default as IconWork } from '@volst/ui-components/src/general/icon/IconWork';
	export { default as IconWrapText } from '@volst/ui-components/src/general/icon/IconWrapText';
	export { default as IconYoutubeSearchedFor } from '@volst/ui-components/src/general/icon/IconYoutubeSearchedFor';
	export { default as IconZoomIn } from '@volst/ui-components/src/general/icon/IconZoomIn';
	export { default as IconZoomOut } from '@volst/ui-components/src/general/icon/IconZoomOut';
	export { default as IconZoomOutMap } from '@volst/ui-components/src/general/icon/IconZoomOutMap';

}
declare module '*.woff2' {
  const content: string;
  export default content;
}
