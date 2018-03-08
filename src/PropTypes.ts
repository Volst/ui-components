export type ValuePropType = string | number | boolean;

export type OptionsPropType = {
  value: ValuePropType;
  label: string;
  options?: OptionsPropType;
}[];

export type TonePropType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
