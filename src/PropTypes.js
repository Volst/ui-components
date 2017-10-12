import PropTypes from 'prop-types';

export const ValuePropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
]);

export const OptionsPropType = PropTypes.arrayOf(
    PropTypes.shape({
        value: ValuePropType.isRequired,
        label: PropTypes.string.isRequired,
    })
).isRequired;

export const TonePropType = PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'danger',
    'light',
    'dark',
]);
