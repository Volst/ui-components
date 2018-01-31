export type ValuePropType = string | number | boolean;

export type OptionsPropType = { value: ValuePropType; label: string }[];

export type TonePropType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
