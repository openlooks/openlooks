import { JSX } from '@builder.io/mitosis/jsx-runtime';

export type Color =
  | 'black'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BaseComponentProps {
  // Mitosis CSS styles
  // Note that we cannot use the "style" prop name because it is reserved by Vue.
  // Note that we cannot use the "css" prop name because it is reserved by Mitosis.
  // See: https://github.com/BuilderIO/mitosis/blob/main/docs/components.md#css
  // Instead we use "sx" based on Mantine: https://mantine.dev/styles/sx/
  sx?: JSX.CSS | undefined;

  // Custom class names appended to the end of system generated class names
  // See: https://github.com/BuilderIO/mitosis/blob/main/docs/components.md#class-vs-classname
  class?: string;

  // Optional children
  // See: https://github.com/BuilderIO/mitosis/blob/main/docs/components.md#children
  children?: any;

  // OpenLooks color system
  // Uses Open Color: https://yeun.github.io/open-color/
  // Based on Mantine color system: https://mantine.dev/theming/colors/
  color?: Color;

  // Border radius
  radius?: Size;

  m?: Size;
  my?: Size;
  mx?: Size;
  mt?: Size;
  mb?: Size;
  ml?: Size;
  mr?: Size;

  p?: Size;
  py?: Size;
  px?: Size;
  pt?: Size;
  pb?: Size;
  pl?: Size;
  pr?: Size;
}
