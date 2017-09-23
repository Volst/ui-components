const defaultConfig = {
    primary: '#006b94',
    success: '#58b96b',
    warning: '#d45352',
    dark: '#4c4c4c',
    light: '#eee',
    error: '#dc0818',
    textColor: 'rgba(0, 0, 0, 0.7)',
};

export function theme(props, value) {
    return props.theme[value] || defaultConfig[value];
}
