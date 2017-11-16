import { parseToRgb } from 'polished';

export const defaultConfig = {
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

export const overridablePrimaryColors = ['primaryButtonColor'];

// This uses YIQ to  calculate the color contrast.
// Same calculation as Bootstrap uses, seems to work better than polished's `readableColor()`
export function readableColor(color) {
    const { red, green, blue } = parseToRgb(color);
    var yiq = (red * 299 + green * 587 + blue * 114) / 1000;
    return yiq >= 150 ? '#111' : '#fff';
}
