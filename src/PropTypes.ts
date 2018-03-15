export type ValuePropType = string | number | boolean;

export type OptionsPropType = {
  value: ValuePropType;
  label: string;
  options?: OptionsPropType;
}[];

export enum Tone {
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Light = 'light',
  Dark = 'dark',
}
