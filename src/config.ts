import { parseToRgb } from 'polished';

// TODO: perhaps it is possible for color variables to enforce that it is a valid color?
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

export const defaultConfig: ThemeInterface = {
  primaryColor: '#006b94',
  successColor: '#58b96b',
  dangerColor: '#dc0818',
  warningColor: '#ffc107',
  darkColor: '#4c4c4c',
  lightColor: '#eee',
  textColor: 'rgba(0, 0, 0, 0.7)',
  borderColor: '#ccc',
  highlightColor: '#fbdba7',
  disabledColor: '#f9f9f9',
  componentBackground: '#fff',
  bodyBackground: '#fff',
  fontFamily: 'Roboto, Arial, sans-serif',
  dateFormat: 'DD-MM-YYYY',
  zIndexNotificationStack: 1010,
  zIndexModal: 1000,
  zIndexDropdownMenu: 420,
  zIndexFancySelectDropdown: 420,
  zIndexTooltip: 100,
  zIndexSingleDatePickerOverlay: 100,
};

// overrideProp : fallbackProp
// If overrideProps isn't specified in the volstTheme,
// we fall back to the value of the fallbackProp.
export const themeOverrides = {
  buttonPrimaryColor: 'primaryColor',
  headingTextColor: 'textColor',
};

// This uses YIQ to  calculate the color contrast.
// Same calculation as Bootstrap uses, seems to work better than polished's `readableColor()`
export function readableColor(color) {
  const { red, green, blue } = parseToRgb(color);
  var yiq = (red * 299 + green * 587 + blue * 114) / 1000;
  return yiq >= 150 ? '#111' : '#fff';
}
