const defaultConfig = {
    primaryColor: '#006b94',
    successColor: '#58b96b',
    warningColor: '#d45352',
    darkColor: '#4c4c4c',
    lightColor: '#eee',
    errorColor: '#dc0818',
    textColor: 'rgba(0, 0, 0, 0.7)',
    borderColor: '#ccc',
    highlightColor: '#fbdba7',
    disabledColor: '#f9f9f9',
    componentBackground: '#fff',
    bodyBackground: '#fff',
    fontFamily: 'Roboto, Arial, sans-serif',
};

export function theme(props, value) {
    return props.theme[value] || defaultConfig[value];
}
