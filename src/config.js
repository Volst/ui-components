import { parseToRgb } from 'polished';

const defaultConfig = {
    primaryColor: '#006b94',
    successColor: '#58b96b',
    warningColor: '#d45352',
    darkColor: '#4c4c4c',
    lightColor: '#eee',
    dangerColor: '#dc0818',
    textColor: 'rgba(0, 0, 0, 0.7)',
    borderColor: '#ccc',
    highlightColor: '#fbdba7',
    disabledColor: '#f9f9f9',
    componentBackground: '#fff',
    bodyBackground: '#fff',
    fontFamily: 'Roboto, Arial, sans-serif',
    dateFormat: 'DD-MM-YYYY',
};

export function theme(props, value) {
    return props.theme[value] || defaultConfig[value];
}

// This uses YIQ to  calculate the color contrast.
// Same calculation as Bootstrap uses, seems to work better than polished's `readableColor()`
export function readableColor(color) {
    const { red, green, blue } = parseToRgb(color);
    var yiq = (red * 299 + green * 587 + blue * 114) / 1000;
    return yiq >= 150 ? '#111' : '#fff';
}
